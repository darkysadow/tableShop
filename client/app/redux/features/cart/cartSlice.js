'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isCartOpened: false,
    lines: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        /* 
        changeMaterial: (state, action) => {
            state.value = action.payload
        }, */
        openCart: (state) => {
            state.isCartOpened = true
        },
        closeCart: (state) => {
            state.isCartOpened = false
        },
    }
})

export const {openCart, closeCart} = cartSlice.actions

export default cartSlice.reducer