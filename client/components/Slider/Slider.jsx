"use client"

import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//Images
import atlant from '@/public/wtp/Trapezia/oak_palena/second.jpg'
import loft from '@/public/wtp/Atlant/oak_boras/main.jpg'
import twoTable from '@/public/wtp/Lima/venge_luiziana/main.jpg'
import { swiperFadeAnimation, swiperSlideAnimation } from '@/config/motion'
import Image from 'next/image'
import Link from 'next/link'

const Slider = () => {

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            /* onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(e) => console.log(e, 'slide change')} */
            className='h-[60vh] max-md:h-[85vh] w-full'
        >

            <AnimatePresence>
                <SwiperSlide>
                    {({ isActive }) => (<div className="container px-14 mx-auto flex flex-row max-md:flex-col h-full justify-center max-md:justify-start">
                        <div className='flex flex-col w-[45%] max-md:w-full items-start justify-center max-md:justify-start max-md:pt-10 gap-8 max-md:gap-6 h-full max-md:h-auto'>
                            <motion.h2 className='text-5xl font-[600]' {...swiperSlideAnimation(isActive, 'left')}
                            >Elegant and Modern Tables for Your Home</motion.h2>
                            <motion.p className='text-[#323232] font-[400] w-[85%] max-md:w-full' {...swiperSlideAnimation(isActive, 'left')}>Discover how our tables can transform your space. A blend of elegant design and high-quality materials.</motion.p>
                            <motion.div {...swiperSlideAnimation(isActive, 'up')} className='mt-12 max-md:hidden'>
                                <Link href={'/catalog'} className='uppercase text-[1rem] font-[500] border-2 border-black p-4 transition hover:text-white hover:bg-[#bd8448] hover:border-[#bd8448]'>View The Catalog</Link>
                            </motion.div>

                        </div>
                        <div className='max-md:w-full md:w-[45%] flex justify-center items-center'>
                            <motion.div {...swiperFadeAnimation(isActive)} className='flex items-center  md:w-full max-md:w-[80%]'>
                                <Image priority={false} src={loft} alt="Table Loft" /* layout='responsive' */ width={500} height={500} />
                            </motion.div>
                        </div>
                        
                        <motion.div {...swiperSlideAnimation(isActive, 'up')} className='mt-12 md:hidden'>
                                <Link href={'/catalog'} className='uppercase text-[1rem] font-[500] border-2 border-black p-4'>View The Catalog</Link>
                            </motion.div>

                    </div>)}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => (<div className="container px-14 mx-auto flex flex-row max-md:flex-col h-full justify-center max-md:justify-start ">
                        <div className='flex flex-col w-[45%] max-md:w-full items-start justify-center max-md:justify-start max-md:pt-10 gap-8 max-md:gap-6 h-full max-md:h-auto'>
                            <motion.h2 className='text-5xl font-[600]' {...swiperSlideAnimation(isActive, 'left')}>Custom Design for Your Interior</motion.h2>
                            <motion.p className='text-[#323232] font-[400] w-[85%]' {...swiperSlideAnimation(isActive, 'left')}>Create your unique style with our wide range of colors and shapes. Purchase a table that reflects your personal taste and style.</motion.p>
                            <motion.div {...swiperSlideAnimation(isActive, 'up')} className='mt-12 max-md:hidden'>
                                <Link href={'/configurator'} className='uppercase text-[1rem] font-[500] border-2 border-black p-4 transition hover:text-white hover:bg-[#bd8448] hover:border-[#bd8448]'>Create Table</Link>
                            </motion.div>

                        </div>
                        <div className='max-md:w-full md:w-[45%] flex justify-center items-center'>
                        <motion.div {...swiperFadeAnimation(isActive)} className='flex items-center md:w-full max-md:w-[80%]'>
                            <Image priority={false} src={atlant} alt="Table Loft" /* layout='responsive' */ width={500} height={500} />
                        </motion.div>
                        </div>
                        
                        <motion.div {...swiperSlideAnimation(isActive, 'up')} className='mt-12 md:hidden'>
                                <Link href={'/configurator'} className='uppercase text-[1rem] font-[500] border-2 border-black p-4 transition '>Create Table</Link>
                            </motion.div>
                    </div>)}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => (<div className="container px-14 mx-auto flex flex-row max-md:flex-col h-full justify-center max-md:justify-start">
                        <div className='flex flex-col w-[45%] max-md:w-full items-start justify-center max-md:justify-start max-md:pt-10 gap-8 max-md:gap-6 h-full max-md:h-auto'>
                            <motion.h2 className='text-5xl font-[600]' {...swiperSlideAnimation(isActive, 'left')}>Get in Touch With Us</motion.h2>
                            <motion.p className='text-[#323232] font-[400] w-[85%]' {...swiperSlideAnimation(isActive, 'left')}>Have questions or need assistance? Contact our friendly team. We're here to help you find the perfect table for your home.</motion.p>
                            <motion.div {...swiperSlideAnimation(isActive, 'up')} className='mt-12 max-md:hidden'>
                                <Link href={'/contacts'} className='uppercase text-[1rem] font-[500] border-2 border-black p-4 transition hover:text-white hover:bg-[#bd8448] hover:border-[#bd8448]'>Contacts</Link>
                            </motion.div>

                        </div>
                        <div className='max-md:w-full md:w-[45%] flex justify-center items-center'>
                        <motion.div {...swiperFadeAnimation(isActive)} className='flex items-center md:w-full max-md:w-[full]'>
                            <Image priority={false} src={twoTable} alt="Tables from catalog" /* layout='responsive' */ width={500} height={500} />
                        </motion.div>
                        </div>
                        
                        <motion.div {...swiperSlideAnimation(isActive, 'up')} className='mt-12 md:hidden'>
                                <Link href={'/contacts'} className='uppercase text-[1rem] font-[500] border-2 border-black p-4 transition'>Contacts</Link>
                        </motion.div>
                    </div>)}
                </SwiperSlide>
            </AnimatePresence>
        </Swiper>
    )
}

export default Slider