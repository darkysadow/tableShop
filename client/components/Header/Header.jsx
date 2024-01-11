"use client"

import { slideAnimation } from '@/config/motion';
import { motion, AnimatePresence } from 'framer-motion';
import cartImage from '@/public/cart.png'
import shoppingBag from '@/public/shoppingBag.png'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <AnimatePresence>
      <header className='container mx-auto py-5 font-poppins flex flex-row justify-between items-center'>
        <motion.h1 className="text-3xl leading-[46px] font-medium  text-[#1a1919]" {...slideAnimation('left')}><Link href={'/'}>TableShop™</Link></motion.h1>
        
        <motion.nav className='flex flex-row gap-5 items-center' {...slideAnimation('down')}>
          <Link href='/catalog' className='hover:text-yellow-600 transition hover:scale-105'>Catalog</Link>
          <Link href='/contacts' className='hover:text-yellow-600 transition hover:scale-105'>Contacts</Link>
          <Link href='/configurator' className='p-2 border border-yellow-600 hover:text-yellow-600 transition hover:scale-105'>Create Your</Link>
        </motion.nav>
        {/* Controls */}
        <motion.div className='flex flex-row items-center gap-3 text-[14px]'
                    {...slideAnimation('right')}>
          <div className='flex flex-row items-center gap-1 cursor-pointer transition hover:text-yellow-500'>
            Cart
          </div>
          {/* Burger */}
          <div
            className="space-y-1 group transition-all"
          >
            <span className="block h-0.5 w-4 transition group-hover:bg-yellow-500 bg-black"></span>
            <span className="block h-0.5 w-4 transition group-hover:bg-yellow-500 bg-black"></span>
            <span className="block h-0.5 w-4 transition group-hover:bg-yellow-500 bg-black"></span>
          </div>
        </motion.div>
      </header>
    </AnimatePresence>
  )
}

export default Header;