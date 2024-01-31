"use client"

import ImagePreloader from '@/components/Preloaders/ImagePreloader'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductImageSkeleton from './ProductImageSkeleton'

const ProductImageSlider = ({ images }) => {
    const material = useSelector((state) => state.cardMaterial.value)
    const [productImages, setProductImages] = useState(undefined)
    const [selectedImage, setSelectedImage] = useState(undefined)
    const [isImagesLoaded, setIsImagesLoaded] = useState(undefined)

    function compareAltText(a, b) {
        // Common order for preview images
        const order = {
            "main": 1,
            "second": 2,
            "third": 3
        };
        const altTextA = a.node.altText.toLowerCase();
        const altTextB = b.node.altText.toLowerCase();
        return order[altTextA.split("_").pop()] - order[altTextB.split("_").pop()];
    }


    useEffect(() => {
        if (material) {
            setIsImagesLoaded(false)
            const newProductImages = images.filter((obj) => obj.node.altText.split('_')[1] === material.node.title.toLowerCase().split(" ").join('-'))
            setIsImagesLoaded(newProductImages.map((obj) => ({ title: obj.node.altText, loaded: false })))
            setProductImages(newProductImages.sort(compareAltText))

            if (selectedImage) {
                const prevImageType = selectedImage.split('_')[2]
                setSelectedImage(newProductImages.find((obj) => obj.node.altText.split('_')[2] === prevImageType).node.altText)
            } else {
                setSelectedImage(newProductImages[0].node.altText)
            }
        }
    }, [material])

    const changeImageLoadedStatus = (alt) => {
        setIsImagesLoaded(prevState => {
            return prevState.map(image => {
                if (image.title === alt) {
                    return { ...image, loaded: true };
                }
                return image;
            });
        });
    };

    if (material) {

        return (
            <div className="w-3/5 flex flex-row max-md:w-full">
                <div className='w-1/5 flex flex-col gap-y-5'>
                    {productImages && productImages.map((productImage, index) => (
                        <div
                            key={index}
                            className={'relative w-full border transition-colors ' + `${selectedImage === productImage.node.altText ? "border-[#bd8448]" : 'border-transparent'} `}
                            onClick={() => setSelectedImage(productImage.node.altText)}
                        >
                            <div className='relative'>
                                <Image
                                    unoptimized={true}
                                    priority
                                    alt={productImage.node.altText}
                                    src={productImage.node.url}
                                    width={1920}
                                    height={1080}
                                    sizes='100%'
                                    onLoad={(e) => changeImageLoadedStatus(e.currentTarget.alt)}
                                />
                                {(isImagesLoaded && isImagesLoaded.find((obj) => obj.title === productImage.node.altText).loaded === false) && <div className='absolute top-0 w-full h-full flex justify-center items-center'><ImagePreloader /></div>}
                            </div>

                        </div>
                    ))}
                </div>
                <div className='w-4/5 relative'>
                    <div className='absolute w-full'>
                        {
                            productImages &&
                            <Image
                                unoptimized={true}
                                priority
                                alt={selectedImage}
                                width={1920}
                                height={1080}
                                src={productImages.find((obj) => obj.node.altText === selectedImage).node.url}
                                onLoad={(e) => changeImageLoadedStatus(e.currentTarget.alt)}
                            />
                        }
                        {
                            (isImagesLoaded && isImagesLoaded.find((obj) => obj.title === selectedImage).loaded === false) && <div className='absolute top-0 w-full h-full flex justify-center items-center'><ImagePreloader /></div>
                        }
                        </div>


                </div>
            </div>
        )
    } else {
        return (
            <ProductImageSkeleton />
        )
    }

}

export default ProductImageSlider