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

export const configuratorSlice = createSlice({
    name: 'configurator',
    initialState,
    reducers: {
        

    }
})

export const {} = configuratorSlice.actions

export default configuratorSlice.reducer