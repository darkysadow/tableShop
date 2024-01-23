"use client"

import { Dialog, DialogContent, Rating } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper/modules'

const SalesCard = ({ item }) => {
    const imagePath = `/wtp/${item.tableType}/${item.material}/`
    const mainImagePath = imagePath + "main.jpg"
    const secondImagePath = imagePath + "second.jpg"
    const thirdImagePath = imagePath + "third.jpg"
    const materialImagePath = `/materialPreview/${item.material}/Color.jpg`
    const name = item.goodName
    const materialName = item.material.split('_').join(" ")
    const discountPercentage = Math.floor((Number(item.oldPrice) - Number(item.salePrice)) / (item.oldPrice) * 100)
    const [dialogOpened, setDialogOpened] = useState(false);
    const [goodCountToAdd, setGoodCountToAdd] = useState(1);

    const increaseCount = () => {
        setGoodCountToAdd(goodCountToAdd + 1)
    }

    const reduceCount = () => {
        if (goodCountToAdd > 1) {
            setGoodCountToAdd(goodCountToAdd - 1)
        }
    }

    const onInputValueChange = (value) => {
        value = Number(value)
        if (value > 1) {
            setGoodCountToAdd(value)
        } else {
            setGoodCountToAdd(1)
        }
    }

    const closeDialog = () => {
        setDialogOpened(false)
        setGoodCountToAdd(1)
    }

    return (
        <>
            <div
                className='w-[32%] max-md:w-full pb-8 mb-6'
            >
                <div className='relative w-full sale-card'>
                    {/* Sale percent */}
                    <div className='absolute w-full'>
                        <span className='absolute right-4 [writing-mode:vertical-lr] py-3 px-1 bg-[#bd8448] font-rubik text-sm text-white sale-triangle z-[3]'>-{discountPercentage}%</span>
                    </div>
                    <div className='sales-secondary-buttons absolute w-12 h-12 rounded-full border border-slate-200 top-[30%] bg-white flex justify-center items-center'><span className='_icon-heart leading-4 text-lg'></span></div>
                    <div
                        className='sales-secondary-buttons absolute w-12 h-12 rounded-full border border-slate-200 top-[55%] bg-white flex justify-center items-center'
                        onClick={() => setDialogOpened(true)}
                    ><span className='_icon-loup leading-4 text-lg'></span></div>
                    <div className='w-full sales-main-image'>
                        <Image src={mainImagePath} width={1920} height={1080} style={{objectFit: 'contain',objectPosition: 'top' }} alt={name + " main image"} />
                    </div>
                    <div className='w-full sales-second-image'>
                        <Image src={secondImagePath} width={1920} height={1080} style={{objectFit: 'contain',objectPosition: 'top' }} alt={name + " second image"} />
                    </div>
                    <div className='overflow-x-hidden sale-card-bottom'>
                        <h4 className='px-2 my-2 text-[#323232] transition hover:text-[#bd8448] cursor-pointer inline-block'>
                            {name}
                        </h4>
                        <div className='px-2 w-full h-7 absolute sale-card-bottom-effect'>
                            <div className='flex flex-row gap-1 text-sm absolute leading-7 sale-card-price'>
                                <span className='font-rubik'>${item.salePrice}</span><span className='font-rubik line-through text-slate-300'>${item.oldPrice}</span>
                            </div>
                            <div className='absolute sale-card-addtocart font-rubik'>
                                Add to Cart +
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                            <Image src={mainImagePath} width={1920} height={1080} style={{objectFit: 'contain',objectPosition: 'center' }} alt={name + " main image"} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='flex w-full h-full justify-center items-center'>
                                            <Image src={secondImagePath} width={1920} height={1080} style={{objectFit: 'contain',objectPosition: 'center' }} alt={name + " second image"} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='flex w-full h-full justify-center items-center'>
                                            <Image src={thirdImagePath} width={1920} height={1080} style={{objectFit: 'contain',objectPosition: 'center' }} alt={name + " third image"} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='flex w-full h-full justify-center items-center'>
                                            <Image src={materialImagePath} width={1920} height={1080} style={{objectFit: 'contain',objectPosition: 'center' }} alt={name + " material image"} />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="quick-view-content flex flex-col">
                                <h1 className='text-xl text-black font-medium'>{name}</h1>
                                <div className='quick-view-reviews flex flex-row gap-x-2 mt-4 mb-2'>
                                    <div className='quick-view-stars'>
                                        <Rating name="read-only" value={4.5} precision={0.1} readOnly size="small" />
                                    </div>
                                    |
                                    <div className='quick-view-count'>2 reviews</div>
                                </div>
                                <div className="quick-view-price flex flex-row gap-x-2 items-center  text-2xl">
                                    <span className='font-rubik text-black'>${item.salePrice}</span><span className='font-rubik line-through text-slate-300'>${item.oldPrice}</span>
                                </div>
                                <p className={'quick-view-availability my-3'}>Availability: <span className={' ' + `${(item.availability === "Not Available") ? "text-red-400" : 'text-blue-600'}`}>{item.availability}</span></p>
                                <div className="quick-view-description line-clamp-3 w-full">
                                    {item.description}
                                </div>
                                <div className='quick-view-form flex md:flex-row justify-between my-5 max-md:flex-col max-md:gap-y-2'>
                                    <div className='quick-view-form-inputBox flex flex-row md:w-1/3 justify-between items-center border-2 text-black max-md:w-full'>
                                        <button onClick={reduceCount} className='py-2 px-4 text-xl md:transition md:hover:text-[#bd8448]'>-</button>
                                        <input type='number' value={goodCountToAdd} onChange={(e) => onInputValueChange(e.target.value)} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center focus:outline-none w-full py-2' />
                                        <button onClick={increaseCount} className='py-2 px-4 text-xl md:transition md:hover:text-[#bd8448]'>+</button>
                                    </div>
                                    <button className='md:w-[calc(70%-40px)] bg-black text-white md:transition md:hover:bg-[#bd8448] max-md:w-full max-md:py-3'>Add To Cart</button>
                                </div>
                                <div className='flex flex-row gap-1 mb-1'>
                                    Table type: <p className='text-black'>{item.tableType}</p>
                                </div>
                                <div className='flex flex-row gap-1 capitalize'>
                                    Material: <p className='text-black'>{materialName}</p>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </div>
            </Dialog>
        </>
    )
}

export default SalesCard