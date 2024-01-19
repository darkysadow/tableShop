import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='pt-28 bg-[#232323] text-[#7f7f7f]'>
            <div className='container mx-auto flex flex-row max-md:flex-col justify-between'>
                <div className='w-[45%] max-md:w-full max-md:items-center max-md:text-center flex flex-col gap-y-6'>
                    <h1 className='text-3xl leading-[46px] font-medium text-[#bd8448]'>
                        <Link href={'/'}>TableShop™</Link>
                    </h1>
                    <p className='text-sm leading-6'>TableShop is an online store space where you can choose loft-style tables that will perfectly match your interior. You can not only choose, but also create your own table.</p>
                    <div className='flex flex-col items-start max-md:items-center gap-y-5 text-sm'>
                        <div className='flex flex-row gap-x-3 items-center'>
                            <span className='_icon-dot'></span><p>Adress: Soborna 1, Vinnytsia, Ukraine</p>
                        </div>
                        <div className='cursor-pointer transition hover:text-[#bd8448] flex flex-row gap-x-3 items-center'>
                            <span className='_icon-incoming-call'></span><a href='tel:+380931234567'>Phone Number: (093) 12-34-567</a>
                        </div>
                        <div className='cursor-pointer transition hover:text-[#bd8448] flex flex-row gap-x-3 items-center'>
                            <span className='_icon-incoming-mail'></span><a href="mailto:support@tableshop.ua">Email: support@tableshop.ua</a>
                        </div>
                    </div>
                </div>
                <nav className='w-1/2 max-md:w-full max-md:mt-16 flex flex-row footer-nav max-md:px-5 max-[376px]:flex-col max-[376px]:gap-y-10'>
                    <div className='w-1/2 flex flex-col gap-y-9 max-[376px]:w-full'>
                        <h2 className='uppercase font-medium text-lg text-white'>information</h2>
                        <ul className='capitalize flex flex-col gap-y-4 text-sm'>
                            <li>
                                <Link href='careers'>careers</Link>
                            </li>
                            <li>
                                <Link href='search'>search</Link>
                            </li>
                            <li>
                                <Link href='delivery-information'>delivery information</Link>
                            </li>
                            <li>
                                <Link href='privacy-policy'>privacy policy</Link>
                            </li>
                            <li>
                                <Link href='terms-n-condition'>terms & condition</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='w-1/2  flex flex-col gap-y-9 max-md:items-end max-[376px]:w-full'>
                        <h2 className='uppercase font-medium text-lg text-white'>our services</h2>
                        <ul className='capitalize flex flex-col gap-y-4 text-sm max-md:items-end'>
                            <li>
                                <Link href='shipping-policy'>shipping policy</Link>
                            </li>
                            <li>
                                <Link href='help-n-contact-us'>help & contact us</Link>
                            </li>
                            <li>
                                <Link href='returns-n-refunds'>returns & refunds</Link>
                            </li>
                            <li>
                                <Link href='online-stores'>online stores</Link>
                            </li>
                            <li>
                                <Link href='terms-n-conditions'>terms & conditions</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='w-full h-[.1px] bg-[#3d3d3d] my-10'></div>
            <div className='pb-10 container mx-auto flex flex-row justify-between items-center max-md:flex-col-reverse max-md:gap-y-5'>
                <div className='max-md:text-center'>Copyright © <span className='text-[#bd8448]'>TableShop</span>. <br className='md:hidden'/>All rights reserved.</div>
                <div className='flex flex-row gap-x-6 social-links'>
                    <a href="https://facebook.com"><span className='_icon-facebook'></span></a>
                    <a href="https://twitter.com"><span className='_icon-twitter'></span></a>
                    <a href="https://pinterest.com"><span className='_icon-pinterest'></span></a>
                    <a href="https://instagram.com"><span className='_icon-instagram'></span></a>
                    <a href="https://tiktok.com"><span className='_icon-tiktok'></span></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer