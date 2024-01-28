'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const MaterialPicker = ({ materials }) => {
    const [selectedMaterial, setSelectedVariant] = useState(materials[0])

    const changeMaterial = (materialName) => {
        if (materialName !== selectedMaterial.node.title) {
            setSelectedVariant(materials.find(variant => variant.node.title === materialName))
        }
    }

    return (
        <div className="flex flex-col items-start my-5">
            <p>Material: <span className="font-medium">{selectedMaterial.node.title}</span></p>
            <div className="flex w-full justify-center flex-row gap-x-3 items-end">
                {materials && materials.map((variant, index) => (
                    <div key={index}
                        onClick={() => changeMaterial(variant.node.title)}
                        className={"variant relative mt-10 w-10 h-10 rounded-full border-2 " + `${selectedMaterial.node.title === variant.node.title ? " border-[#bd8448]" : " border-transparent"}`}>
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
}

export default MaterialPicker