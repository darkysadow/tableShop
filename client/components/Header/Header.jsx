import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <header className='container mx-auto py-5 font-poppins flex flex-row justify-between items-center'>
      <h1 className="text-3xl leading-[46px] font-medium  text-[#1a1919]"><Link href={'/'}>TableShop™</Link></h1>
      <nav className='flex flex-row gap-5 items-center'>
        <Link href='/catalog' className='hover:text-yellow-600'>Catalog</Link>
        <Link href='/contacts' className='hover:text-yellow-600'>Contacts</Link>
        <Link href='/configurator' className='p-2 border border-yellow-600 hover:text-yellow-600'>Create Your</Link>
      </nav>
      {/* Controls */}
      <div className='flex flex-row items-center gap-3'>
        <div>
          Cart
        </div>
        {/* Burger */}
        <div className='group relative w-4 h-4 
                        before:w-4 before:h-[1.6px] before:bg-gray-950 before:absolute before:top-[1px]
                        after:w-4 after:h-[1.6px] after:bg-gray-950 after:absolute after:bottom-[1px]
                        hover:after:bg-yellow-600 hover:before:bg-yellow-600 group-hover:bg-yellow-600
                       '>
          <span className='absolute w-4 h-[1.1px] opacity-100 bg-gray-950 top-[50%] translate-y-[-50%] group-hover:bg-yellow-600'></span>
        </div>
      </div>
    </header>
  )
}

export default Header;