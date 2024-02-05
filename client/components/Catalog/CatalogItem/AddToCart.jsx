"use client"

import { openCart, setCartAmount, setCartLines, setCartQuantity } from '@/app/redux/features/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import addToCart from '@/lib/actions/addToCart'
import React from 'react'
import { useState } from 'react'

const AddToCart = () => {
    const cart = useAppSelector((state) => state.cart)
    const variantId = useAppSelector((state) => state?.cardMaterial?.value?.node?.id)
    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState(1)
    const [isFetching, setIsFetching] = useState(false)

    const handleAddToCart = async () => {
        setIsFetching(true)
        const res = await addToCart(cart.cartId, variantId, quantity)
        if (res.data) {
            dispatch(setCartQuantity(res.data.cartLinesAdd.cart.totalQuantity))
            dispatch(setCartLines(res.data.cartLinesAdd.cart.lines.edges))
            dispatch(setCartAmount(res.data.cartLinesAdd.cart.cost.totalAmount))
            setIsFetching(false)
            dispatch(openCart())
        }

    }

    const handleSetQuantity = (value) => {
        value = Number(value)
        if (value < 1) {
            setQuantity(1)
        } else if (value >= 1 && quantity > 1) {
            setQuantity(value)
        }
    }

    return (
        <div className='w-full my-5 flex flex-row justify-between max-md:flex-col max-md:gap-y-4 items-center'>
            <div className='quick-view-form-inputBox flex flex-row md:w-1/2 lg:w-7/12 justify-between items-center border-2 text-black max-md:w-full relative'>
                <button disabled={isFetching} onClick={() => quantity > 1 && setQuantity(quantity - 1)} className='py-2 px-4 text-xl md:transition md:hover:text-[#bd8448]'>-</button>
                <input type='number' disabled={isFetching} value={quantity} onChange={(e) => handleSetQuantity(e.target.value)} min={1} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center focus:outline-none w-full py-2' />
                <button disabled={isFetching} onClick={() => setQuantity(quantity + 1)} className='py-2 px-4 text-xl md:transition md:hover:text-[#bd8448]'>+</button>
                {isFetching && <div className='absolute w-full h-full z-40 flex justify-center items-center bg-[#0000000f]'></div>}
            </div>
            <div onClick={handleAddToCart} className='text-white bg-black max-md:w-full text-center transition-colors text-nowrap md:hover:bg-[#bd8448] py-3 px-5'>Add To Cart</div>
        </div>
    )
}

export default AddToCart