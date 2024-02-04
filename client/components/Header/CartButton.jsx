"use client"

import { closeCart, openCart } from '@/app/redux/features/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import React from 'react'

const CartButton = ({onClickProps}) => {
    const isCartOpened = useAppSelector((state) => state.cart.isCartOpened)
    const dispatch = useAppDispatch()

    const handleClick = () => {
        if (onClickProps === undefined) {
            return
        } else {
            onClickProps()
        }
    }

    const changeCartState = () => {
        if (isCartOpened) {
            dispatch(closeCart())
        } else {
            dispatch(openCart())
        }
    }
    return (
        <div 
            onClick={() => {changeCartState(); handleClick()}}
            className='flex flex-row items-center gap-1 cursor-pointer transition hover:text-[#bd8448]'>
            <span className='_icon-bag text-xl'></span>
            Cart
        </div>
    )
}

export default CartButton