'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    dialog: {
        opened: false,
    },
    table: {
        legsColor: '#000000'
    }
}

export const viewer3dSlice = createSlice({
    name: 'viewer3d',
    initialState,
    reducers: {
        open3dViewer: (state) => {
            state.dialog.opened = true
        },
        close3dViewer: (state) => {
            state.dialog.opened = false
        }
    }
})

export const {open3dViewer, close3dViewer} = viewer3dSlice.actions

export default viewer3dSlice.reducer