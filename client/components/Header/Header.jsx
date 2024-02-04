"use client"

import { StoreProvider } from '@/app/redux/provider';
import { slideAnimation } from '@/config/motion';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import CartButton from './CartButton';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';

const Header = () => {
  const [mobileBurgerOpened, setMobileBurgerOpened] = useState(false);
  const [dropdownBurgerOpened, setDropdownBurgerOpened] = useState(false)

  const toggleMobileBurgerOpened = () => {
    if (mobileBurgerOpened) {
      setMobileBurgerOpened(false)
    } else {
      setMobileBurgerOpened(true)
    }
  }

  const handleLinkClick = () => {
    setMobileBurgerOpened(false)
  }

  useEffect(() => {
    mobileBurgerOpened
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'scroll');
  }, [mobileBurgerOpened]);
  //2.5rem+46px
  return (
    <AnimatePresence>
      <header className={'fixed z-40 w-full backdrop-blur-xl ' + `${mobileBurgerOpened ? 'bg-white' : 'bg-transparent'}`}>
        <div className='container px-5  py-5 mx-auto font-poppins flex flex-row justify-between items-center'>
          <motion.h1 className="text-3xl leading-[46px] font-medium  text-[#1a1919]" {...slideAnimation('left')}><Link href={'/'} onClick={handleLinkClick}>TableShop™</Link></motion.h1>

          <motion.nav className='flex flex-row gap-5 max-md:hidden items-center' {...slideAnimation('down')}>
            <Link href='/catalog' className='hover:text-[#bd8448] transition hover:scale-105' >Catalog</Link>
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
            {/* <div className='flex flex-row items-center gap-1 cursor-pointer transition hover:text-[#bd8448]'>
              <span className='_icon-bag text-xl'></span>
              Cart
            </div> */}
            <StoreProvider>
              <CartButton />
            </StoreProvider>
            {/* Burger */}
            <div
              onMouseLeave={() => setDropdownBurgerOpened(false)}
              onMouseEnter={() => setDropdownBurgerOpened(true)} 
              className="relative group transition-all py-3 px-3 "
            >
              <div className='space-y-1'
                 
              >
                <span className="block h-0.5 w-4 transition group-hover:bg-[#bd8448] max-md:group-hover:bg-black bg-black"></span>
                <span className="block h-0.5 w-4 transition group-hover:bg-[#bd8448] max-md:group-hover:bg-black bg-black"></span>
                <span className="block h-0.5 w-4 transition group-hover:bg-[#bd8448] max-md:group-hover:bg-black bg-black"></span>
              
              </div>
              <div 
                onMouseLeave={() => setDropdownBurgerOpened(false)}
                className={"absolute py-4 flex flex-col pl-4 pr-20 gap-y-3 bg-white top-full shadow-2xl rounded right-0 transition-all " + `${dropdownBurgerOpened ? "opacity-1 visible" : "opacity-0 invisible"}`}
                >
                  <Link href={'/wishlist'} className='transition hover:text-[#bd8448]'>Wishlist(0)</Link>
                  <Link href={'/login'} className='transition hover:text-[#bd8448]'>Sign in</Link>
                  <Link href={'/register'} className='transition hover:text-[#bd8448]'>Register</Link>
                </div>
            </div>
          </motion.div>
          <div
            className='hidden w-4 h-4 relative max-md:block burger-menu space-y-1 group transition-all header-burger'
            onClick={toggleMobileBurgerOpened}
          >
            <span className={"absolute block h-0.5 w-4 transition group-hover:bg-[#bd8448] max-md:group-hover:bg-black  " + `${mobileBurgerOpened ? "rotate-45 bottom-1/3 -translate-y-1/3 bg-[#bd8448]" : "top-[1px] bg-black"}`}></span>
            <span className={"absolute block h-0.5 w-4 transition group-hover:bg-[#bd8448] max-md:group-hover:bg-black  " + `${mobileBurgerOpened ? "-rotate-45 top-1/3 -translate-y-1/3 bg-[#bd8448]" : 'top-1/4 -translate-y-1/2 bg-black'}`}></span>
            <span className={"absolute block h-0.5 w-4 transition group-hover:bg-[#bd8448] max-md:group-hover:bg-black bg-black " + `${mobileBurgerOpened ? "opacity-0" : 'opacity-1 bottom-[1px]'}`}></span>
          </div>
        </div>
        <div className={'flex items-center justify-center mobile-burger-layout fixed top-[calc(2.5rem+46px)] transition-all w-full h-[calc(100vh-(2.5rem+46px))] z-[49] pb-[calc(2.5rem+46px)] bg-white ' + `${mobileBurgerOpened ? 'right-0' : '-right-full'}`} >
          <nav className='mx-auto flex flex-col gap-y-2 text-center text-2xl'>
            <Link href='/catalog' onClick={handleLinkClick}>Catalog</Link>
            <Link href='/contacts' onClick={handleLinkClick}>Contacts</Link>
            <Link href='/configurator' onClick={handleLinkClick}>Create Your</Link>
            <hr />
            <div className='flex flex-col gap-y-1'>
              
              <Link href={'/wishlist'} onClick={handleLinkClick}>Wishlist</Link>
              <Link href={'/login'} onClick={handleLinkClick}>Sign in</Link>
              <Link href={'/register'} onClick={handleLinkClick}>Register</Link>
              <Link 
                className='flex flex-row items-center justify-center gap-x-1'
                href={'/search'}
              >
                <span className='_icon-loup text-xl'></span>
                Search
              </Link>
              <div className='flex flex-row justify-center'>
                <StoreProvider>
                  <CartButton onClick={handleLinkClick} />
                </StoreProvider>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </AnimatePresence>
  )
}

export default Header;