'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import { changeMaterial } from '@/app/redux/features/cardMaterial/cardMaterialSlice'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import MaterialPickerSkeleton from './MaterialPickerSkeleton'

const MaterialPicker = ({ materials, titleBackground = false }) => {
    const material = useAppSelector((state) => state.cardMaterial.value)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (material === undefined || (material && material.node.product.productType !== materials[0].node.product.productType)) {
            dispatch(changeMaterial(materials[0]))
        }

    }, [materials])

    if (material) {
        return (
            <div className="flex flex-col items-start my-5">
                <p className={`${titleBackground && "bg-white rounded-md px-2 text-nowrap"}`}>Material: <span className="font-medium">{material.node.title}</span></p>
                <div className="flex w-full justify-center flex-row gap-x-3 items-end">
                    {materials && materials.map((variant, index) => (
                        <div key={index}
                            onClick={() => dispatch(changeMaterial(variant))}
                            className={"variant relative mt-10 w-10 h-10 rounded-full border-2 " + `${material.node.title === variant.node.title ? " border-[#bd8448]" : " border-transparent"}`}>
                            <div className='material-label absolute bottom-[120%] -left-full rounded-md invisible opacity-0 text-nowrap inline-block text-xs font-medium tracking-wider text-white px-4 bg-[#000000bd]'>{variant.node.title}</div>
                            <Image
                                priority={false}
                                alt={`${variant.node.title} material`}
                                src={`/materialPreview/${variant.node.title.toLowerCase().split(' ').join('_')}/Color.jpg`}
                                fill
                                style={{ position: "absolute", objectFit: 'cover', borderRadius: '50%' }}
                                sizes='100%'
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <MaterialPickerSkeleton />
        )
    }

}

export default MaterialPicker