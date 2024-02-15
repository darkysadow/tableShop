'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    initialized: false,
    tabletopShapes: [
        {
            imgSrc: undefined,
            title: undefined
        },
    ],
    tabletopSizes: [],
    tabletopMaterials: [
        {
            label: 'Oak Boras',
            imgSrc: 'url'
        }
    ],
    legsTypes: [
        {
            imgSrc: undefined,
            title: undefined,
            modelLink: undefined
        }
    ],
    selected: {
        shape: undefined,
        size: undefined,
        material: undefined,
        legsType: undefined
    },
    loadedShape: undefined
}

export const configuratorSlice = createSlice({
    name: 'configurator',
    initialState,
    reducers: {
        initializeConfiguratorState: (state, action) => {
            return {
                ...state,
                tabletopShapes: action.payload.tabletopShapes,
                tabletopSizes: action.payload.tabletopSizes,
                tabletopMaterials: action.payload.tabletopMaterials,
                legsTypes: action.payload.legsTypes,
                initialized: true,
                selected: {
                    ...state.selected,
                    size: state.selected.size ? state.selected.size : action.payload.tabletopSizes[0],
                    material: state.selected.material ? state.selected.material : action.payload.tabletopMaterials[0]
                }
            }
        },
        setSelectedOption: (state, action) => {
            return {
                ...state,
                selected: {
                  ...state.selected,
                  [action.payload.option]: action.payload.value
                }
              };
        },
        setLoadedShape: (state, action) => {
            return {
                ...state,
                loadedShape: action.payload
            }
        }
    }
})

export const {initializeConfiguratorState, setSelectedOption, setLoadedShape} = configuratorSlice.actions

export default configuratorSlice.reducer