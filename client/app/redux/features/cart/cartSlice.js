'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isCartOpened: false,
    cartId: null,
    totalQuantity: '0.0',
    lines: [],
    totalAmount: 0,
    isFetch: []
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
        },
        addLineToCart: (state, action) => {
            return {
                ...state,
                lines: [ action.payload, ...lines]
            }
        },
        setIsFetch: (state, action) => {
            return {
                ...state,
                isFetch: [...state.isFetch, {id: action.payload, status: true}]
            }
        },
        unsetIsFetch: (state, action) => {
            return {
                ...state,
                isFetch: [state.isFetch.filter(item => item.id !== action.payload)]
            }
        }

    }
})

export const {openCart, closeCart, setCartId, setIsFetch, unsetIsFetch,
                setCartQuantity, setCartLines, setCartAmount, addLineToCart} = cartSlice.actions

export default cartSlice.reducer