'use client'

import { configureStore } from "@reduxjs/toolkit"
import cardMaterialReducer from "./features/cardMaterial/cardMaterialSlice"

export const store = configureStore({
    reducer: {
        cardMaterial: cardMaterialReducer
    }
})