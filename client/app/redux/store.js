'use client'

import { configureStore } from "@reduxjs/toolkit"
import cardMaterialReducer from "./features/cardMaterial/cardMaterialSlice"
import cartReducer from "./features/cart/cartSlice"
import popupMaterialReducer from './features/popupMaterial/popupMaterialSlice'
import viewer3dReducer from "./features/viewIn3d/viewer3dSlice"


export const store = configureStore({
    reducer: {
        cardMaterial: cardMaterialReducer,
        cart: cartReducer,
        popupMaterial: popupMaterialReducer,
        viewer3d: viewer3dReducer
    }
})