"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import ImagePreloader from '../Preloaders/ImagePreloader'

const CartItem = ({
    title, previewImageUrl,
    material, price, amount, variantId,
    isLoading, changeAmount, deleteFromCart
}) => {
    const [isFetching, setIsFetching] = useState(false)
    const handleClickDelete = () => {
        setIsFetching(true)
        deleteFromCart(variantId)
    }
    return (
        <div className='w-full relative py-5 px-5 my-5 flex flex-row justify-between items-start'>
            {(isLoading || isFetching) && <div className='absolute z-40 backdrop-blur-sm w-11/12 h-full flex justify-center items-center'>
                <ImagePreloader ml={false} />
            </div>}
            <div className='flex flex-row justify-start items-center'>
                <div className='w-1/4 relative'>
                    <Image
                        priority={false}
                        src={previewImageUrl}
                        width={1920}
                        height={1080}
                        sizes='100%'
                        alt={title + " " + material}
                    />
                </div>
                <div className='w-3/5 flex flex-col gap-y-2'>
                    <h4 className='text-lg'>{title}</h4>
                    {material !== "Default Title" && <p className='text-sm text-slate-400'>Material: {material}</p>}
                    <p className='text-lg text-black font-medium'>${price}</p>
                    {amount !== 0 ? <div className='quick-view-form-inputBox flex flex-row md:w-1/2 lg:w-2/3 justify-between items-center border-2 text-black max-md:w-full relative'>
                        <button disabled={isLoading?.status} onClick={() => changeAmount(variantId ,amount - 1)} className='py-2 px-4 text-xl md:transition md:hover:text-[#bd8448]'>-</button>
                        <input type='number' disabled={isLoading?.status} value={amount} onChange={(e) => e.target.value >= 1 && changeAmount(variantId, e.target.value)} min={1} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center focus:outline-none w-full py-2' />
                        <button disabled={isLoading?.status} onClick={() => changeAmount(variantId, amount + 1)} className='py-2 px-4 text-xl md:transition md:hover:text-[#bd8448]'>+</button>
                        {isLoading?.id === variantId && <div className='absolute w-full h-full z-40 flex justify-center items-center bg-[#0000000f]'></div>}
                    </div> : <p>The product is not available!</p>}
                </div>
            </div>
            <div
                        className='mr-3 cursor-pointer text-xl transition-colors md:hover:text-[#bd8448]'
                        onClick={() => handleClickDelete()} 
                    >✖</div>

        </div>
    )
}

export default CartItem