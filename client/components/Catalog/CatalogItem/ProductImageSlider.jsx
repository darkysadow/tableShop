"use client"

import React from 'react'
import { useSelector } from 'react-redux'

const ProductImageSlider = () => {
    const material = useSelector((state) => state.cardMaterial.value)
    if(material) {
        return (
            <div className="w-3/5">
                <div>
                    IMAGE
                </div>
                <p>{material.node.title}</p>
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}

export default ProductImageSlider