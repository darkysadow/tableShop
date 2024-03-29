'use client'

import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

//Image paths
import materialsImage from '@/public/section2/1.jpg'
import legsImage from "@/public/section2/2.jpg"
import { fadeAnimation, slideAnimation } from '@/config/motion'

const UnderSliderSection = () => {
  return (
    <section className='container mx-auto my-10 px-4 flex flex-row justify-between max-md:flex-col max-md:px-10'>
          <motion.div 
            className='w-[50%] max-md:w-full flex flex-row items-center gap-3 max-md:gap-0 max-md:justify-between'
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
              <Image priority={false} src={materialsImage} alt='Materials' fill={true} sizes='100%' style={{ objectFit: "cover" }} className='rounded-full' />
            </motion.div>
          </motion.div>
          <motion.div 
            className='w-[50%] max-md:w-full flex flex-row-reverse items-center gap-3 max-md:gap-0 max-md:justify-between'
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
              <Image priority={false} src={legsImage} alt='Legs' fill={true} sizes='100%' style={{ objectFit: "cover" }} className='rounded-full' />
            </motion.div>
          </motion.div>
      </section>
  )
}

export default UnderSliderSection