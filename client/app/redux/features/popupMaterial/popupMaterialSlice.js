'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [
        {
            id: undefined /* id of product variant */,
            title: undefined,
            product: {
                productType: undefined /* Product type, like: "Atlant", "Skver", etc */
            }
        }
    ]
}

export const popupMaterialSlice = createSlice({
    name: 'popupMaterial',
    initialState,
    reducers: {
        addPopupMaterial: (state, action) => {
            const existingProduct = state.products.find((p) => {
                return (
                  p.id === action.payload.id &&
                  p.title === action.payload.title &&
                  p.product.productType === action.payload.product.productType
                );
              });
              if (!existingProduct) {
                return {
                  ...state,
                  products: [...state.products, action.payload]
                };
              } else {
                return state;
              }
        
        },
        changePopupMaterial: (state, action) => {
            const updatedItems = state.products.map(item => {
                if (item.product.productType === action.payload.product.productType) {
                    return {
                        ...item,
                        title: action.payload.title,
                        id: action.payload.id
                    }
                }
                return item
            })
            return {
                ...state,
                products: updatedItems
            }
        }
    }
})

export const {addPopupMaterial, changePopupMaterial} = popupMaterialSlice.actions

export default popupMaterialSlice.reducer