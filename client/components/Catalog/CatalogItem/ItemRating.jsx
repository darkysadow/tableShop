"use client"

import React from 'react'
import { Rating } from '@mui/material'

const ItemRating = () => {
    return (
        <div className='quick-view-reviews flex flex-row gap-x-2 mt-4 mb-2'>
            <div className='quick-view-stars'>
                <Rating name="read-only" value={4.5} precision={0.1} readOnly size="small" />
            </div>
            |
            <div className='quick-view-count'>2 reviews</div>
        </div>
    )
}

export default ItemRating