'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isCartOpened: false,
    cartId: null,
    totalQuantity: '0.0',
    lines: [],
    totalAmount: 0,
    isFetch: [],
    updatingAmount: []
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
        },
        setUpdatingAmount: (state, action) => {
            return {
                ...state,
                updatingAmount: [...state.updatingAmount, {id: action.payload, status: true}]
            }
        },
        unsetUpdatingAmount: (state, action) => {
            return {
                ...state,
                updatingAmount: [state.updatingAmount.filter(item => item.id !== action.payload)]
            }
        },

    }
})

export const {openCart, closeCart, setCartId, setIsFetch, unsetIsFetch,
                setUpdatingAmount, unsetUpdatingAmount,
                setCartQuantity, setCartLines, setCartAmount, addLineToCart} = cartSlice.actions

export default cartSlice.reducer