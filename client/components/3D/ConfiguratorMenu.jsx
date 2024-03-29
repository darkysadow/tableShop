"use client"

import { initializeConfiguratorState, setSelectedOption } from '@/app/redux/features/configurator/configuratorSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import React, { useEffect, useRef, useState } from 'react'
import ImagePreloader from '../Preloaders/ImagePreloader';
import Image from 'next/image';
import addConfiguratedToCart from '@/lib/actions/addConfiguratedToCart';
import { openCart, setCartAmount, setCartLines, setCartQuantity } from '@/app/redux/features/cart/cartSlice';

const ConfiguratorMenu = ({ steps, setOverflowY = () => {}, windowWidth}) => {
    const [isFetching, setIsFetching] = useState(false)
    const [shapeFlag, setShapeFlag] = useState(true)
    const [legsFlag, setLegsFlag] = useState(true)
    const store = useAppSelector((state) => state.configurator)
    const cart = useAppSelector((state) => state.cart)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!store.initialized) {
            dispatch(initializeConfiguratorState({
                tabletopShapes: steps.shapes,
                tabletopSizes: steps.sizes.map(item => item.label),
                tabletopMaterials: steps.materials,
                legsTypes: steps.legsTypes
            }))
        }
    }, [steps])

    useEffect(() => {
        if(store.selected.shape?.label) {
            setShapeFlag(false)
        }
    }, [store.selected.shape])

    useEffect(() => {
        if(store.selected.legsType?.label) {
            setLegsFlag(false)
        }
    }, [store.selected.legsType])

    const handleAddToCart = async () => {
        setIsFetching(true)
        const res = await addConfiguratedToCart(
            cart.cartId,
            store.selected.shape.variants.find(item => (item.title.split(" / ")[0] === store.selected.material.label)&&(item.title.split(" / ")[1] === store.selected.size)).id,
            store.selected.legsType.variant
        )
        if (res.data) {
            dispatch(setCartQuantity(res.data.cartLinesAdd.cart.totalQuantity))
            dispatch(setCartLines(res.data.cartLinesAdd.cart.lines.edges))
            dispatch(setCartAmount(res.data.cartLinesAdd.cart.cost.totalAmount))
            setIsFetching(false)
            dispatch(openCart())
        }
    }

    if (store.initialized) {
        return (
            <div
                onPointerDown={() => setOverflowY(false)}
                onMouseEnter={() => setOverflowY(false)} 
                className='md:absolute max-md:w-full px-4 py-4 flex flex-col  rounded-sm right-0 md:w-1/3 bg-[#00000005] md:h-[calc(100vh-106px)] max-md:h-[calc(54vh-43px)]'>
                {windowWidth < 768 && <div className='absolute right-5 animate-pulse rounded-md px-2 text-xs py-2 bg-[#00000063] text-white '>
                        <span className='_icon-arrow-left'></span>
                        <span className='_icon-pointer'></span>
                        <span className='_icon-arrow-right'></span>
                </div>}
                <h1 className='tracking-wide text-2xl'>Choose the:</h1>
                <div 
                    className='w-full my-5 h-5/6 md:overflow-y-auto max-md:overflow-x-auto md:scrolable-block_gray max-md:scrolable-block-y_gray md:pr-[5px] flex md:flex-col md:gap-y-3 max-md:flex-row max-md:gap-x-3 max-md:h-[27vh]'>
                    <div className='min-w-full relative flex flex-col gap-y-2 gap-x-[10%] bg-white py-2 px-2 md:rounded-t-lg max-md:h-5/6'>
                        {shapeFlag && <span className='text-[#bd8448] z-50 absolute text-xs top-[2px] right-1 animate-pulse'>Select variant</span>}
                        <h2>Shape of the table top</h2>
                        <div className={'md:w-full max-md:w-full flex flex-row max-md:items-center max-md:justify-start h-full max-md:overflow-x-auto md:flex-wrap gap-x-[3%] gap-y-2'}>
                
                            {store.tabletopShapes.map((shape, index) => (
                                <div
                                    key={index}
                                    onClick={() => dispatch(setSelectedOption({ option: 'shape', value: shape }))}
                                    className={'w-[30%] flex py-1 px-1 flex-col bg-[#00000007] rounded-lg border transition-all hover:bg-[#00000010] cursor-pointer relative' 
                                    + `${shape.imgSrc ? " h-20 justify-between items-center" : " h-10 justify-center items-center"}` 
                                    + `${store.selected?.shape?.label === shape.label ? ' border-[#bd8448]' : ' border-transparent'}`
                                    + `${!store.selected.shape ? " before:absolute before:animate-pulse before:w-full before:h-full before:border before:border-[#5e5e5e] before:top-0 before:rounded-lg " : ""}`}
                                >
                                    {shape.imgSrc && <div className='relative max-md:w-[45px] max-md:h-[45px] md:h-[6vw] md:w-[3.5vw] rounded-lg'>
                                        <Image
                                            priority={false}
                                            alt={`${shape.label} shape`}
                                            src={shape.imgSrc}
                                            fill
                                            style={{ position: "absolute", objectFit: 'contain', borderRadius: '8px' }}
                                            sizes='100%'
                                        />
                                    </div>}
                                    <h2 className='text-xs font-medium'>{shape.label}</h2>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className='min-w-full flex flex-col gap-y-2 gap-x-[10%] bg-white py-2 px-2 max-md:h-5/6'>
                        <h2>Size of the table top</h2>
                        <div className='md:w-full max-md:w-full flex flex-row max-md:items-center max-md:justify-start h-full max-md:overflow-x-auto md:flex-wrap gap-x-[3%] gap-y-2'>
                            {store.tabletopSizes.map((size, index) => (
                                <div
                                    key={index}
                                    onClick={() => dispatch(setSelectedOption({ option: 'size', value: size }))}
                                    className={'w-[30%] flex py-1 px-1 flex-col bg-[#00000007] rounded-lg border transition-all hover:bg-[#00000010] cursor-pointer' + `${size.imgSrc ? " h-20 justify-between items-center" : " h-10 justify-center items-center"}` + `${store.selected?.size === size ? ' border-[#bd8448]' : ' border-transparent'}`}
                                >
                                    <h3 className='text-xs font-medium'>{size}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='min-w-full flex flex-col gap-y-2 gap-x-[10%] bg-white py-2 px-2 max-md:h-5/6'>
                        <h2>Material of the table top</h2>
                        <div className='md:w-full max-md:w-full flex flex-row max-md:items-center max-md:justify-start h-full max-md:overflow-x-auto md:flex-wrap gap-x-[3%] gap-y-2'>
                            {store.tabletopMaterials.map((material, index) => (
                                <div
                                    key={index}
                                    onClick={() => dispatch(setSelectedOption({ option: 'material', value: material }))}
                                    className={'w-[30%] flex py-1 px-1 flex-col bg-[#00000007] rounded-lg border transition-all hover:bg-[#00000010] cursor-pointer h-20 justify-between items-center' + `${store.selected?.material === material ? ' border-[#bd8448]' : ' border-transparent'}`}
                                >
                                    <div className='relative max-md:w-[45px] max-md:h-[45px] md:h-[6vw] md:w-[3.5vw] rounded-lg'>
                                        <Image
                                            priority={false}
                                            alt={`${material.label} material`}
                                            src={`/materialPreview/${material.label.toLowerCase().split(' ').join('_')}/Color.jpg`}
                                            fill
                                            style={{ position: "absolute", objectFit: 'cover', borderRadius: '8px' }}
                                            sizes='100%'
                                        />
                                    </div>
                                    <h3 className='text-xs [word-spacing:99999px] font-medium text-center '>{material.label}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='min-w-full relative flex flex-col items-center gap-y-2 bg-white py-2 px-2 md:rounded-b-lg  max-md:h-5/6'>
                        {legsFlag && <span className='text-[#bd8448] z-50 absolute text-xs top-[2px] right-1 animate-pulse'>Select variant</span>}
                        <h2 className='text-left w-full'>Type of legs</h2>
                        <div className='md:w-full max-md:w-[80vw] max-md:overflow-x-auto flex flex-row  max-md:items-center max-md:justify-start h-full md:flex-wrap gap-x-[3%] gap-y-2'>
                            {store.legsTypes.map((leg, index) => (
                                <div
                                    key={index}
                                    onClick={() => dispatch(setSelectedOption({ option: 'legsType', value: leg }))}
                                    className={'md:w-[30%] relative max-md:min-w-[5.3125rem] flex py-1 px-1 flex-col bg-[#00000007] rounded-lg border transition-all hover:bg-[#00000010] cursor-pointer' 
                                    + `${leg.imgSrc ? " h-20 justify-between items-center" : " h-10 justify-center items-center"}` 
                                    + `${store.selected?.legsType === leg ? ' border-[#bd8448]' : ' border-transparent'}` 
                                    + `${!store.selected.shape ? " before:absolute before:animate-pulse before:w-full before:h-full before:border before:border-[#5e5e5e] before:top-0 before:rounded-lg " : ""}`}
                                >
                                    {leg.imgSrc && <div className='relative max-md:w-[45px] max-md:h-[45px] md:h-[6vw] md:w-[3.5vw] rounded-lg'>
                                        <Image
                                            priority={false}
                                            alt={`${leg.label} type`}
                                            src={leg.imgSrc}
                                            fill
                                            style={{ position: "absolute", objectFit: 'contain', borderRadius: '8px' }}
                                            sizes='100%'
                                        />
                                    </div>}
                                    <h3 className='text-xs font-medium'>{leg.label}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center gap-y-2 items-center my-auto'>
                    {(!store.selected.shape || !store.selected.size || !store.selected.material || !store.selected.legsType) && <p className='text-[#bd8448] text-center w-4/5 text-xs'>Select shape, size, material and type of legs</p>}
                    <button
                        disabled={!store.selected.shape || !store.selected.size || !store.selected.material || !store.selected.legsType || isFetching} 
                        onClick={handleAddToCart}
                        className='w-2/3 text-lg font-medium text-white bg-black py-2 md:transition-colors md:hover:bg-[#bd8448] disabled:bg-slate-200 disabled:md:hover:bg-white'>
                        Add to cart
                    </button>
                </div>
                
            </div>
        )
    } else {
        return (
            <div className='absolute max-md:w-full px-4 py-4 flex justify-center items-center  rounded-sm right-0 md:w-1/3 bg-[#00000005] h-[calc(100vh-106px)]'>
                <ImagePreloader />
            </div>
        )
    }
}

export default ConfiguratorMenu