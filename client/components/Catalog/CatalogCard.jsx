'use client'


import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ImagePreloader from '../Preloaders/ImagePreloader'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import addToCart from '@/lib/actions/addToCart'
import { openCart, setCartAmount, setCartLines, setCartQuantity, setIsFetch, unsetIsFetch } from '@/app/redux/features/cart/cartSlice'

const CatalogCard = ({item}) => {

    
    const [selectedVariant, setSelectedVariant] = useState({title: 'Oak Boras', id: undefined})
    const [mainImgLoaded, setMainImgLoaded] = useState(false)
    const [secondImgLoaded, setSecondImgLoaded] = useState(false)
    const altForImage = item.title.split(' ')[0].toLowerCase()+"_"+ selectedVariant.title.toLowerCase().split(" ").join('-');
    const previewMainImage = item.images.edges.find(image => image.node.altText === (altForImage + "_main"))?.node.url;
    const previewSecondImage = item.images.edges.find(image => image.node.altText === (altForImage + "_second"))?.node.url;
    const variantsNames = item.variants.edges.map((variant) => variant.node.title)

    const cartId = useAppSelector((state) => state.cart.cartId)
    const isCartDataFetching = useAppSelector((state) => state.cart.isFetch)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setSelectedVariant(item.variants.edges[0].node)
    }, [])

    const changeMaterial = (material) => {
        if (!isCartDataFetching.find(cartItem => cartItem.id === item.id)?.status) {
            if (material !== selectedVariant.title) {
                setMainImgLoaded(false)
                setSecondImgLoaded(false)
                const newMaterial = item.variants.edges.find(edge => edge.node.title === material).node
                setSelectedVariant(newMaterial)
            }
        }
    }

    const handleAddToCart = async () => {
        if (!isCartDataFetching.find(cartItem => cartItem.id === item.id)?.status) {
            dispatch(setIsFetch(item.id))
            const res = await addToCart(cartId, selectedVariant.id)
            if (res.data) {
                dispatch(setCartQuantity(res.data.cartLinesAdd.cart.totalQuantity))
                dispatch(setCartLines(res.data.cartLinesAdd.cart.lines.edges))
                dispatch(setCartAmount(res.data.cartLinesAdd.cart.cost.totalAmount))
                dispatch(unsetIsFetch(item.id))
                dispatch(openCart())
            }
        }
    }


    return (
        <>
            <div
                className='w-[32%] max-md:w-full pb-8 mb-6 relative'
            >
                <div className='relative w-full sale-card'>
                    <div className='sales-secondary-buttons absolute w-12 h-12 rounded-full border border-slate-200 top-[20%] max-xl:top-[10%] max-md:top-[20%] bg-white flex justify-center items-center before:opacity-0 before:invisible hover:before:visible transition-all before:transition-all hover:before:opacity-100 before:bg-[rgba(0,0,0,0.85)] before:text-sm before:absolute before:px-8 before:text-white before:w-auto before: before:z-40 before:content-["Add\00a0to\00a0Wishlist"] before:right-[150%] hover:before:right-[105%] before:rounded-md  before:rounded-ee-none'>
                        <span className='_icon-heart leading-4 text-lg'></span>
                    </div>
                    <div
                        className='sales-secondary-buttons absolute w-12 h-12 rounded-full border border-slate-200 top-[40%] max-xl:top-[40%] max-md:top-[40%] bg-white flex justify-center items-center before:opacity-0 before:invisible hover:before:visible transition-all before:transition-all hover:before:opacity-100 before:bg-[rgba(0,0,0,0.85)] before:text-sm before:absolute before:px-8 before:text-white before:w-auto before: before:z-40 before:content-["Quick\00a0View"] before:right-[150%] hover:before:right-[105%] before:rounded-md  before:rounded-ee-none'
                        
                    ><span className='_icon-loup leading-4 text-lg'></span></div>
                    <Link href={'/catalog/'+item.id.split('/')[item.id.split('/').length-1]} className='sales-secondary-buttons absolute w-12 h-12 rounded-full border border-slate-200 top-[60%] max-xl:top-[70%] max-md:top-[60%] bg-white flex justify-center items-center before:opacity-0 before:invisible hover:before:visible transition-all before:transition-all hover:before:opacity-100 before:bg-[rgba(0,0,0,0.85)] before:text-sm before:absolute before:px-8 before:text-white before:w-auto before: before:z-40 before:content-["Visit\00a0Page"] before:right-[150%] hover:before:right-[105%] before:rounded-md  before:rounded-ee-none'>
                    <span className='_icon-totop leading-4 text-lg'></span>
                    </Link>
                    <div className='absolute left-2 w-8 h-5/6 flex flex-col justify-center gap-y-3 z-10'>
                        {variantsNames && variantsNames.map((variant, index) => (
                            <div 
                                key={index} 
                                className={`variant relative w-8 h-8 flex transition-all justify-center items-center rounded-full border-2 ` + `${selectedVariant.title === variant ? ' border-[#bd8448]' : " border-slate-300"}`}
                                onClick={() => changeMaterial(variant)}
                            >
                                <div className='material-label opacity-0 invisible transition-all absolute left-[150%] inline-block text-nowrap px-4 bg-[rgba(0,0,0,0.85)] text-white text-sm rounded-md rounded-ss-none'>
                                    {variant}
                                </div>
                                <Image 
                                    priority={false}
                                    alt={`${variant} material`} 
                                    src={`/materialPreview/${variant.toLowerCase().split(' ').join('_')}/Color.jpg`} 
                                    fill 
                                    style={{position:"absolute", objectFit: 'cover', borderRadius: '50%'}}
                                    sizes='100%'
                                />
                            </div>
                        ))}
                    </div>
                    {(!mainImgLoaded || !secondImgLoaded) && (<div className='absolute w-[calc(100%-6.65rem)] left-[2.5rem] h-5/6 z-30 flex justify-center items-center backdrop-blur-sm tracking-widest sales-main-preloader'>
                        <ImagePreloader />
                    </div>)}
                    <div className='w-full sales-main-image'>
                        {previewMainImage && <Image priority={false} blurDataURL src={previewMainImage} width={1920} height={1080} style={{ objectFit: 'contain', objectPosition: 'top' }} alt={" main image"} onLoad={() => setMainImgLoaded(true)} />}
                    </div>
                    <div className='w-full sales-second-image'>
                        {previewSecondImage && <Image priority={false} blurDataURL src={previewSecondImage} width={1920} height={1080} style={{ objectFit: 'contain', objectPosition: 'top' }} alt={" second image"} onLoad={() => setSecondImgLoaded(true)} />}
                    </div>
                    <div className='overflow-x-hidden sale-card-bottom'>
                        <h4 className='px-2 my-2 text-[#323232] transition hover:text-[#bd8448] cursor-pointer inline-block'>
                            {item.title}
                        </h4>
                        <div className='px-2 w-full h-7 absolute sale-card-bottom-effect'>
                            <div className='flex flex-row gap-1 text-sm absolute leading-7 sale-card-price'>
                                <span className='font-rubik'>${item.priceRange.minVariantPrice.amount}</span>
                            </div>
                            <div className='absolute sale-card-addtocart font-rubik' onClick={handleAddToCart}>
                                Add to Cart +
                            </div>
                        </div>
                    </div>
                </div>
                {isCartDataFetching.find(cartItem => cartItem.id === item.id)?.status === true && 
                    <div className='absolute w-full h-full top-0 left-0  z-40 flex justify-center items-center'>
                        <ImagePreloader />    
                    </div>}
            </div>
        </>
    )
}

export default CatalogCard