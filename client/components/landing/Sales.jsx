import React from 'react'

import atlantMain from '@/public/tablesPhotos/Atlant/oak_boras/main.jpg'
import atlantSecond from "@/public/tablesPhotos/Atlant/oak_boras/second.jpg"

import Image from 'next/image'

const Sales = () => {
    return (
        <div className='w-full my-5'>
            <div className='container mx-auto flex flex-col my-10'>
                <div className='flex flex-col'>
                    <h2 className='text-center font-medium text-3xl'>Sale Off</h2>
                    <h3 className='text-center font-normal text-md text-[#323232]'>You might like discounted items</h3>
                </div>
                <div className='flex flex-row justify-start gap-x-[2%] flex-wrap py-10'>
                    <div className='w-[32%] pb-8 mb-6'>
                        <div className='relative w-full sale-card'>
                            {/* Sale percent */}
                            <div className='absolute w-full'>
                                <span className='absolute right-4 [writing-mode:vertical-lr] py-3 px-1 bg-[#bd8448] font-rubik text-sm text-white sale-triangle'>-7%</span>
                            </div>
                            <div className='sales-secondary-buttons absolute w-12 h-12 rounded-full top-[30%] bg-white flex justify-center items-center'><p>W</p></div>
                            <div className='sales-secondary-buttons absolute w-12 h-12 rounded-full top-[55%] bg-white flex justify-center items-center'><p>V</p></div>
                            <div className='w-full sales-main-image bg-[#CECECE]'>
                                <Image src={atlantMain} objectFit='contain' objectPosition='top'/>
                            </div>
                            <div className='w-full sales-second-image bg-[#CECECE]'>
                                <Image src={atlantSecond} objectFit='contain' objectPosition='top'/>
                            </div>
                            <div className='overflow-x-hidden sale-card-bottom'>
                                <h4 className='px-2 my-2 text-[#323232] transition hover:text-[#bd8448] cursor-pointer inline-block'>
                                    Table Atlant
                                </h4>
                                <div className='px-2 w-full h-7 absolute sale-card-bottom-effect'>
                                    <div className='flex flex-row gap-1 text-sm absolute leading-7 sale-card-price'>
                                        <span className='font-rubik'>$260.00</span><span className='font-rubik line-through text-slate-300'>$280.00</span>
                                    </div>
                                    <div className='absolute sale-card-addtocart font-rubik'>
                                        Add to Cart +
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Sales