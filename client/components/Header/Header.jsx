"use client"

import { slideAnimation } from '@/config/motion';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'

const Header = () => {
  const [mobileBurgerOpened, setMobileBurgerOpened] = useState(false);
  const toggleMobileBurgerOpened = () => {

    if (mobileBurgerOpened) {
      setMobileBurgerOpened(false)
    } else {
      setMobileBurgerOpened(true)

    }
    console.log(mobileBurgerOpened);
  }
  return (
    <AnimatePresence>
      <header className='fixed z-50 w-full bg-transparent backdrop-blur-xl px-5  py-5'>
        <div className='container mx-auto font-poppins flex flex-row justify-between items-center'>
          <motion.h1 className="text-3xl leading-[46px] font-medium  text-[#1a1919]" {...slideAnimation('left')}><Link href={'/'}>TableShop™</Link></motion.h1>

          <motion.nav className='flex flex-row gap-5 max-md:hidden items-center' {...slideAnimation('down')}>
            <Link href='/catalog' className='hover:text-[#bd8448] transition hover:scale-105'>Catalog</Link>
            <Link href='/contacts' className='hover:text-[#bd8448] transition hover:scale-105'>Contacts</Link>
            <Link href='/configurator' className='p-2 border border-[#bd8448] text-[#bd8448] hover:bg-[#bd8448] hover:text-white transition hover:scale-105'>Create Your</Link>
          </motion.nav>
          {/* Controls */}
          <motion.div className='flex flex-row items-center gap-x-7 text-[14px] max-md:hidden'
            {...slideAnimation('right')}>
            <div className='flex flex-row items-center gap-1 cursor-pointer transition hover:text-[#bd8448]'>
              <span className='_icon-loup text-xl'></span>
              Search
            </div>
            <div className='flex flex-row items-center gap-1 cursor-pointer transition hover:text-[#bd8448]'>
              <span className='_icon-bag text-xl'></span>
              Cart
            </div>
            {/* Burger */}
            <div
              className="space-y-1 group transition-all"
            >
              <span className="block h-0.5 w-4 transition group-hover:bg-[#bd8448] bg-black"></span>
              <span className="block h-0.5 w-4 transition group-hover:bg-[#bd8448] bg-black"></span>
              <span className="block h-0.5 w-4 transition group-hover:bg-[#bd8448] bg-black"></span>
            </div>
          </motion.div>
          <div
            className='hidden w-4 h-4 relative max-md:block burger-menu space-y-1 group transition-all'
            onClick={toggleMobileBurgerOpened}
          >
            {/* <span className="block h-0.5 w-4 transition group-hover:bg-[#bd8448] bg-black"></span>
              <span className="block h-0.5 w-4 transition group-hover:bg-[#bd8448] bg-black"></span>
              <span className="block h-0.5 w-4 transition group-hover:bg-[#bd8448] bg-black"></span> */}
            <span className={"absolute block h-0.5 w-4 transition group-hover:bg-[#bd8448]  " + `${mobileBurgerOpened ? "rotate-45 bottom-1/3 -translate-y-1/3 bg-[#bd8448]" : "top-[1px] bg-pink-600"}`}></span>
            <span className={"absolute block h-0.5 w-4 transition group-hover:bg-[#bd8448]  " + `${mobileBurgerOpened ? "-rotate-45 top-1/3 -translate-y-1/3 bg-[#bd8448]" : 'top-1/4 -translate-y-1/2 bg-pink-600'}`}></span>
            <span className={"absolute block h-0.5 w-4 transition group-hover:bg-[#bd8448] bg-pink-600 " + `${mobileBurgerOpened ? "opacity-0" : 'opacity-1 bottom-[1px]'}`}></span>
          </div>
        </div>
        <div className={'flex items-center justify-center mobile-burger-layout fixed top-20 transition-all w-full h-[100vh] z-[49] pb-20 bg-white ' + `${mobileBurgerOpened ? 'right-0' : '-right-full'}`} >
          <nav className='mx-auto flex flex-col gap-y-2 text-right'>
            <Link href='/catalog'>Catalog</Link>
            <Link href='/contacts'>Contacts</Link>
            <Link href='/configurator'>Create Your</Link>
            <hr />
            <div className='flex flex-col gap-y-1'>
              
              <Link href={'/wishlist'}>Wishlist</Link>
              <Link href={'/login'}>Sign in</Link>
              <Link href={'/register'}>Register</Link>
              <Link 
                className='flex flex-row items-center justify-end gap-x-1'
                href={'/search'}
              >
                <span className='_icon-loup text-xl'></span>
                Search
              </Link>
              <Link 
                className='flex flex-row items-center justify-end gap-x-1'
                href={'/cart'}
              >
                <span className='_icon-bag text-xl'></span>
                Cart
              </Link>
            </div>

          </nav>
        </div>
      </header>
    </AnimatePresence>
  )
}

export default Header;