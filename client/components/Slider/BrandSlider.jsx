"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

import kronospan from '@/public/brands/kronospan.jpg'
import pfleiderer from '@/public/brands/pfleiderer.png'
import swisskrono from "@/public/brands/swisskrono.png"
import swisspan from "@/public/brands/swisspan.png"

const BrandSlider = () => {
    return (
        <Swiper
            modules={[Navigation,  A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            /* onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(e) => console.log(e, 'slide change')} */
            className='h-[15vh] w-full container mx-auto mb-10 grayscale brightness-125'
        >
            <SwiperSlide>
                <div className='flex justify-center items-center mb-5 h-full relative'>
                    <Image src={kronospan} fill objectFit='contain' objectPosition='center' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center items-center h-full relative'>
                    <Image src={pfleiderer} fill objectFit='contain' objectPosition='center' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center items-center h-full relative'>
                    <Image src={swisskrono} fill objectFit='contain' objectPosition='center' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center items-center h-full relative mb-10'>
                    <Image src={swisspan} fill objectFit='contain' objectPosition='center' />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default BrandSlider