"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ProductImageSlider = ({ images }) => {
    const material = useSelector((state) => state.cardMaterial.value)
    const [productImages, setProductImages] = useState(undefined)
    const [selectedImage, setSelectedImage] = useState(undefined)

    useEffect(() => {
        if (material) {
            const newProductImages = images.filter((obj) => obj.node.altText.split('_')[1] === material.node.title.toLowerCase().split(" ").join('-'))
            setProductImages(newProductImages)
            if (selectedImage) {
                const prevImageType = selectedImage.split('_')[2]
                setSelectedImage(newProductImages.find((obj) => obj.node.altText.split('_')[2] === prevImageType).node.altText)
            } else {
                setSelectedImage(newProductImages[0].node.altText)
            }
        }
    }, [material])

    if (material) {
        
        return (
            <div className="w-3/5 flex flex-row">
                <div className='w-1/5 flex flex-col gap-y-5'>
                    {productImages && productImages.map((productImage, index) => (
                        <div 
                            key={index}
                            className={'relative w-full border transition-colors ' + `${selectedImage === productImage.node.altText ? "border-[#bd8448]" : 'border-transparent'} `}
                            onClick={() => setSelectedImage(productImage.node.altText)}
                        >
                            <Image
                                unoptimized={true}
                                priority
                                alt={productImage.node.altText}
                                src={productImage.node.url}
                                width={1920}
                                height={1080}
                                sizes='100%'
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }

}

export default ProductImageSlider