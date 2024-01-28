'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: undefined
}

export const cardMaterialSlice = createSlice({
    name: 'cardMaterial',
    initialState,
    reducers: {
        changeMaterial: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {changeMaterial} = cardMaterialSlice.actions

export default cardMaterialSlice.reducer