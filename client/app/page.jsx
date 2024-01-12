"use client"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { fadeAnimation, slideAnimation } from '@/config/motion';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';


//Image paths
import materialsImage from '@/public/section2/1.jpg'
import legsImage from "@/public/section2/2.jpg"


import Slider from '@/components/Slider';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Slider />
      <section className='container mx-auto my-10 flex flex-row justify-between'>
          <motion.div 
            className='w-[50%] flex flex-row items-center gap-3'
            {...slideAnimation('left')}
          >
            <div className='w-[50%] h-full py-4 flex flex-col justify-center gap-4'>
              <h2 className='font-medium text-lg'>Materials</h2>
              <p className='text-[#323232] text-md font-variant-small-caps'>We select only quality materials for our products, for your comfort and ease of use</p>
            </div>
            <motion.div 
              className='w-36 h-36 relative rounded-full'
              {...fadeAnimation}
            >
              <Image src={materialsImage} alt='Materials' fill={true} style={{ objectFit: "cover" }} className='rounded-full' />
            </motion.div>
          </motion.div>
          <motion.div 
            className='w-[50%] flex flex-row items-center gap-3 justify-end'
            {...slideAnimation('right')}
          >
            <div className='w-[50%] h-full py-4 flex flex-col justify-center gap-4'>
              <h2 className='font-medium text-lg'>Table Supports</h2>
              <p className='text-[#323232] text-md'>A huge selection of table legs is presented for you, so that you can choose exactly what you need</p>
            </div>
            <motion.div 
              className='w-36 h-36 relative rounded-full'
              {...fadeAnimation}
            >
              <Image src={legsImage} alt='Legs' fill={true} style={{ objectFit: "cover" }} className='rounded-full' />
            </motion.div>
          </motion.div>
      </section>
    </main>
  )
}
