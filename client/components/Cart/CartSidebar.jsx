"use client"

import { closeCart } from '@/app/redux/features/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import React, { useEffect } from 'react'
import CartItem from './CartItem'

const CartSidebar = () => {
    const isCartOpened = useAppSelector((state) => state.cart.isCartOpened)
    const dispatch = useAppDispatch()

    useEffect(() => {
        isCartOpened
          ? (document.body.style.overflowY = 'hidden')
          : (document.body.style.overflowY = 'scroll');
      }, [isCartOpened]);

    return (
        <div className={'fixed left-0 w-full h-[100vh] z-50 ' + `${isCartOpened ? ' bg-[#00000042] visible top-0' : ' bg-transparent invisible -top-full'}`}>
            <div 
                className=' max-sm:w-0 max-md:w-1/3 md:w-1/2 max-lg:w-2/4 lg:w-8/12 h-full'
                onClick={() => {dispatch(closeCart())}}
            ></div>
            <div className={'fixed transition-all h-full max-sm:w-full max-md:w-2/3 md:1/2 max-lg:w-2/4 lg:w-4/12  py-6 bg-white flex flex-col z-50 shadow-xl top-0 ' + `${isCartOpened ? ' right-0 visible' : ' -right-full invisible'}`}>
                <div className='flex flex-row justify-between text-3xl px-5 '>
                    <p>Your Cart</p>
                    <span
                        className='mr-3 cursor-pointer'
                        onClick={() => dispatch(closeCart())}
                    >✖</span>
                </div>
                <div className='mt-10 w-full bg-slate-50 px-5 border-t-[1px] border-b-[1px] border-slate-200 py-5'>
                    <p className='text-sm text-slate-500'>Free Shipping for all orders over $500.00</p>
                </div>
                <div className='overflow-y-auto'>
                    <CartItem 
                        title={'Plastic Dining Armchair'}
                        material={"Oak Boras"}
                        price={120}
                        amount={1}
                        previewImageUrl={'https://cdn.shopify.com/s/files/1/0564/6693/1811/files/main.jpg?v=1706054037'}
                    />
                    <CartItem 
                        title={'Plastic Dining Armchair'}
                        material={"Oak Boras"}
                        price={120}
                        amount={1}
                        previewImageUrl={'https://cdn.shopify.com/s/files/1/0564/6693/1811/files/main.jpg?v=1706054037'}
                    />
                    <CartItem 
                        title={'Plastic Dining Armchair'}
                        material={"Oak Boras"}
                        price={120}
                        amount={1}
                        previewImageUrl={'https://cdn.shopify.com/s/files/1/0564/6693/1811/files/main.jpg?v=1706054037'}
                    />
                </div>
            </div>
        </div>

    )
}

export default CartSidebar