"use client"

import Image from 'next/image'
import React from 'react'

const CartItem = ({
    title, previewImageUrl,
    material, price, amount,
    changeAmount, deleteFromCart
}) => {
    return (
        <div className='w-full py-5 px-5 my-5 flex flex-row justify-between items-start'>

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
                    <p className='text-sm text-slate-400'>Material: {material}</p>
                    <p className='text-lg text-black font-medium'>${price}</p>
                    <div className='quick-view-form-inputBox flex flex-row md:w-1/2 lg:w-2/3 justify-between items-center border-2 text-black max-md:w-full'>
                        <button onClick={() => console.log('reduce')} className='py-2 px-4 text-xl md:transition md:hover:text-[#bd8448]'>-</button>
                        <input type='number' value={amount} onChange={(e) => console.log(e.target.value)} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center focus:outline-none w-full py-2' />
                        <button onClick={() => console.log('increase')} className='py-2 px-4 text-xl md:transition md:hover:text-[#bd8448]'>+</button>
                    </div>
                </div>
            </div>
            <span
                        className='mr-3 cursor-pointer text-xl transition-colors md:hover:text-[#bd8448]'
                        onClick={() => console.log("Deleted from cart")}
                    >✖</span>

        </div>
    )
}

export default CartItem