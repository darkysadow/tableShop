"use client"

import { closeCart, setCartAmount, setCartId, setCartLines, setCartQuantity, setUpdatingAmount, unsetUpdatingAmount } from '@/app/redux/features/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import React, { useEffect } from 'react'
import CartItem from './CartItem'
import getCartFromShopify from '@/lib/actions/getCartFromShopify'
import createCartOnShopify from '@/lib/actions/createCartOnShopify'
import deleteFromCart from '@/lib/actions/deleteFromCart'
import updateCartLine from '@/lib/actions/updateCartLine'

const CartSidebar = () => {
    const isCartOpened = useAppSelector((state) => state.cart.isCartOpened)
    const cart = useAppSelector((state) => state.cart)
    const isInputLoading = useAppSelector((state) => state.cart.updatingAmount)
    const dispatch = useAppDispatch()

    useEffect(() => {
        async function getCart() {
            let localCartData = JSON.parse(
                window.localStorage.getItem('tableShop:shopify:cart')
            )
            if (localCartData) {
                const cartInfo = await getCartFromShopify(localCartData.id)
                dispatch(setCartId(localCartData.id))
                dispatch(setCartQuantity(cartInfo.data.cart.totalQuantity))
                dispatch(setCartLines(cartInfo.data.cart.lines.edges))
                dispatch(setCartAmount(cartInfo.data.cart.cost.totalAmount))
                return
            }
            localCartData = await createCartOnShopify()
            dispatch(setCartId(localCartData.id))
            window.localStorage.setItem('tableShop:shopify:cart', JSON.stringify(localCartData))
        }
        getCart()
    }, [])

    useEffect(() => {
        isCartOpened
            ? (document.body.style.overflowY = 'hidden')
            : (document.body.style.overflowY = 'scroll');
    }, [isCartOpened]);

    const handleDeleteFromCart = async (selectedCartItem) => {
        const deleteResult = await deleteFromCart(cart.cartId, selectedCartItem)
        if (deleteResult) {
            dispatch(setCartLines(deleteResult.lines.edges))
            dispatch(setCartQuantity(deleteResult.totalQuantity))
            dispatch(setCartAmount(deleteResult.cost.totalAmount))
        }
    }

    const handleChangeAmount = async(selectedCartItem, quantity) => {
        dispatch(setUpdatingAmount(selectedCartItem))
        const updateResult = await updateCartLine(cart.cartId, selectedCartItem, Number(quantity))
        if (updateResult) {
            dispatch(setCartLines(updateResult.lines.edges))
            dispatch(setCartQuantity(updateResult.totalQuantity))
            dispatch(setCartAmount(updateResult.cost.totalAmount))
            dispatch(unsetUpdatingAmount(selectedCartItem))
        }
    }

    return (
        <div className={'fixed left-0 w-full h-[100vh] z-50 ' + `${isCartOpened ? ' bg-[#00000042] visible top-0' : ' bg-transparent invisible -top-full'}`}>
            <div
                className=' max-sm:w-0 max-md:w-1/3 md:w-1/2 max-lg:w-2/4 lg:w-8/12 h-full'
                onClick={() => { dispatch(closeCart()) }}
            ></div>
            <div className={'fixed transition-all h-full max-sm:w-full max-md:w-2/3 md:1/2 max-lg:w-2/4 lg:w-4/12  pt-6 bg-white flex flex-col z-50 shadow-xl top-0 ' + `${isCartOpened ? ' right-0 visible' : ' -right-full invisible'}`}>
                <div className='flex flex-row justify-between text-3xl px-5 '>
                    <p>Your Cart</p>
                    <span
                        className='mr-3 cursor-pointer'
                        onClick={() => dispatch(closeCart())}
                    >✖</span>
                </div>
                <div className='mt-10 w-full bg-slate-50 px-5 border-t-[1px] border-b-[1px] border-slate-200 py-5'>
                    <div className='w-full h-2 flex flex-row items-start justify-start bg-slate-300 rounded-lg'>
                        {cart?.totalAmount && <div 
                            className={`h-full relative bg-blue-400 rounded-lg`}
                            style={{
                                width: `${(cart.totalAmount.amount/500)*100 <= 100 ? (cart.totalAmount.amount/500)*100 : 100}%`
                            }}
                        >
                            <div className='absolute w-7 h-7 bg-white border-[1px] border-blue-400 rounded-full bottom-1/2 translate-y-[50%] right-0 translate-x-[50%] text-blue-500 _icon-shipping text-center text-sm leading-7'></div>
                        </div>}
                    </div>
                    <p className='text-sm mt-5 text-slate-500'>
                        {cart.totalAmount.amount === 0 ?
                            "Free Shipping for all orders over $500.00"
                        : cart.totalAmount.amount < 500 ?
                            (<>Spend <span className='font-medium text-black'>${500 - Number(cart.totalAmount.amount)}</span> more to enjoy <span className='text-red-400'>free shipping!</span></>)
                        : <span className='text-red-500'>Congratulations! You've got free shipping!</span>
                        }
                        
                    </p>
                </div>
                {
                    cart?.lines && cart?.lines?.length !== 0
                ? <div className='w-full h-full flex flex-col justify-between'>
                <div className='overflow-y-auto scrolable-block '>
                    {
                        cart?.lines && cart.lines.map((cartItem, index) => (<CartItem
                            key={index}
                            title={cartItem.node.merchandise.product.title}
                            material={cartItem.node.merchandise.title}
                            price={cartItem.node.merchandise.price.amount}
                            amount={cartItem.node.quantity}
                            variantId={cartItem.node.id}
                            previewImageUrl={cartItem.node.merchandise.image.url}
                            isLoading={isInputLoading.length === 0 ? undefined : isInputLoading.find(item => item.id === cartItem.node.id)}
                            deleteFromCart={handleDeleteFromCart}
                            changeAmount={handleChangeAmount}
                        />))
                    }
                    
                </div>
                
                <div className='w-full flex flex-col gap-y-2 px-4 py-5'>
                <hr />
                    <div className='flex flex-row justify-between items-center'>
                        <p className='text-black font-medium text-lg'>Subtotal</p>
                        <p className='text-lg font-rubik'>${cart.totalAmount.amount}</p>
                    </div>
                    <p className='italic text-sm text-[#000000a1]'>Taxes and shipping calculated at checkout</p>
                    <div className='w-full flex justify-center items-center mt-4'>
                        <button className='uppercase px-10 py-3 font-semibold text-sm transition-colors hover:bg-black bg-[#bd8448] text-white'>check out</button>
                    </div>
                </div>
                </div> :
                <div className='w-full text-3xl text-[#000000a1] py-10 text-center'>Your cart is empty</div>
                }
            </div>
        </div>
    )
}

export default CartSidebar