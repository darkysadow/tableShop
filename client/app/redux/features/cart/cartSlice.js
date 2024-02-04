'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isCartOpened: false,
    cartId: null,
    totalQuantity: '0.0',
    lines: [],
    totalAmount: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        openCart: (state) => {
            state.isCartOpened = true
        },
        closeCart: (state) => {
            state.isCartOpened = false
        },
        setCartId: (state, action) => {
            state.cartId = action.payload
        },
        setCartQuantity: (state, action) => {
            state.totalQuantity = action.payload 
        },
        setCartLines: (state, action) => {
            state.lines = action.payload
        },
        setCartAmount: (state, action) => {
            state.totalAmount = action.payload
        }

    }
})

export const {openCart, closeCart, setCartId, 
                setCartQuantity, setCartLines, setCartAmount} = cartSlice.actions

export default cartSlice.reducer