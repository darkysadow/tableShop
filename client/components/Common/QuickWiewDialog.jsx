"use client"

import React, { useEffect } from 'react'
import { Dialog, DialogContent, Rating } from '@mui/material'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import MaterialPicker from '../Catalog/CatalogItem/MaterialPicker'


import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const QuickWiewDialog = ({ dialogOpened, closeDialog, mainImagePath, secondImagePath,
    thirdImagePath, materialImagePath, title, salePrice = undefined, availability, price,
    amount, reduceCount, increaseCount, tableType, materialName, onInputValueChange,
    materials = undefined, description = undefined, descriptionHtml = undefined,
}) => {

    return (
        <Dialog open={dialogOpened} onClose={closeDialog} maxWidth='md'>
            <div className='relative'>
                <div
                    className='absolute right-0 top-0 w-10 h-10 text-black text-xl flex justify-center items-center cursor-pointer transition'
                    onClick={closeDialog}
                >
                    ✕
                </div>

                <DialogContent>
                    <div className='w-full h-full text-[#6e6d6d] flex md:flex-row gap-x-2 max-md:flex-col'>
                        <div className="quick-view-slider md:w-1/2 max-md:w-full">
                            <Swiper
                                modules={[Navigation, Pagination, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                className='h-[60vh]'
                            >
                                <SwiperSlide>
                                    <div className='flex w-full h-full justify-center items-center'>
                                        <Image src={mainImagePath} width={1920} height={1080} style={{ objectFit: 'contain', objectPosition: 'center' }} alt={title + " image"} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex w-full h-full justify-center items-center'>
                                        <Image src={secondImagePath} width={1920} height={1080} style={{ objectFit: 'contain', objectPosition: 'center' }} alt={title + " image"} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex w-full h-full justify-center items-center'>
                                        <Image src={thirdImagePath} width={1920} height={1080} style={{ objectFit: 'contain', objectPosition: 'center' }} alt={title + " image"} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex w-full h-full justify-center items-center'>
                                        <Image src={materialImagePath} width={1920} height={1080} style={{ objectFit: 'contain', objectPosition: 'center' }} alt={title + " image"} />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="quick-view-content flex flex-col">
                            <h1 className='text-xl text-black font-medium'>{title}</h1>
                            <div className='quick-view-reviews flex flex-row gap-x-2 mt-4 mb-2'>
                                <div className='quick-view-stars'>
                                    <Rating name="read-only" value={4.5} precision={0.1} readOnly size="small" />
                                </div>
                                |
                                <div className='quick-view-count'>2 reviews</div>
                            </div>
                            <div className="quick-view-price flex flex-row gap-x-2 items-center  text-2xl">
                                {
                                    !salePrice ?
                                        <><span className='font-rubik text-black'>${price}</span></>
                                    :
                                        <><span className='font-rubik text-black'>${salePrice}</span><span className='font-rubik line-through text-slate-300'>${price}</span></>

                                }
                            </div>
                            <p className={'quick-view-availability my-3'}>Availability: <span className={' ' + `${(availability === "Not Available") ? "text-red-400" : 'text-blue-600'}`}>{availability}</span></p>
                            {!descriptionHtml ? (<div className="quick-view-description line-clamp-3 w-full">
                                {description}
                            </div>) :
                                (<div className="quick-view-description line-clamp-3 w-full" dangerouslySetInnerHTML={{ __html: descriptionHtml }}></div>)}
                            {materials && <MaterialPicker materials={materials} />}
                            <div className='quick-view-form flex md:flex-row justify-between my-5 max-md:flex-col max-md:gap-y-2'>
                                <div className='quick-view-form-inputBox flex flex-row md:w-1/3 justify-between items-center border-2 text-black max-md:w-full'>
                                    <button onClick={reduceCount} className='py-2 px-4 text-xl md:transition md:hover:text-[#bd8448]'>-</button>
                                    <input type='number' value={amount} onChange={(e) => onInputValueChange(e.target.value)} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center focus:outline-none w-full py-2' />
                                    <button onClick={increaseCount} className='py-2 px-4 text-xl md:transition md:hover:text-[#bd8448]'>+</button>
                                </div>
                                <button className='md:w-[calc(70%-40px)] bg-black text-white md:transition md:hover:bg-[#bd8448] max-md:w-full max-md:py-3'>Add To Cart</button>
                            </div>
                            <div className='flex flex-row gap-1 mb-1'>
                                Table type: <p className='text-black'>{tableType}</p>
                            </div>
                            {!materials && <div className='flex flex-row gap-1 capitalize'>
                                Material: <p className='text-black'>{materialName}</p>
                            </div>}
                        </div>
                    </div>
                </DialogContent>
            </div>
        </Dialog>
    )
}

export default QuickWiewDialog