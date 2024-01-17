import Image from 'next/image'
import React from 'react'

const SalesCard = ({item}) => {
    const imagePath = `/wtp/${item.tableType}/${item.material}/`
    const mainImagePath = imagePath+"main.jpg"
    const secondImagePath = imagePath+"second.jpg"
    const name = item.goodName
    const discountPercentage = Math.floor((Number(item.oldPrice) - Number(item.salePrice)) / (item.oldPrice) * 100)

    return (
        <div className='w-[32%] pb-8 mb-6'>
            <div className='relative w-full sale-card'>
                {/* Sale percent */}
                <div className='absolute w-full'>
                    <span className='absolute right-4 [writing-mode:vertical-lr] py-3 px-1 bg-[#bd8448] font-rubik text-sm text-white sale-triangle z-[3]'>-{discountPercentage}%</span>
                </div>
                <div className='sales-secondary-buttons absolute w-12 h-12 rounded-full border border-slate-200 top-[30%] bg-white flex justify-center items-center'><span className='_icon-heart leading-4 text-lg'></span></div>
                <div className='sales-secondary-buttons absolute w-12 h-12 rounded-full border border-slate-200 top-[55%] bg-white flex justify-center items-center'><span className='_icon-loup leading-4 text-lg'></span></div>
                <div className='w-full sales-main-image'>
                    <Image src={mainImagePath} width={1920} height={1080} objectFit='contain' objectPosition='top' />
                </div>
                <div className='w-full sales-second-image'>
                    <Image src={secondImagePath} width={1920} height={1080} objectFit='contain' objectPosition='top' />
                </div>
                <div className='overflow-x-hidden sale-card-bottom'>
                    <h4 className='px-2 my-2 text-[#323232] transition hover:text-[#bd8448] cursor-pointer inline-block'>
                        {name}
                    </h4>
                    <div className='px-2 w-full h-7 absolute sale-card-bottom-effect'>
                        <div className='flex flex-row gap-1 text-sm absolute leading-7 sale-card-price'>
                            <span className='font-rubik'>${item.salePrice}</span><span className='font-rubik line-through text-slate-300'>${item.oldPrice}</span>
                        </div>
                        <div className='absolute sale-card-addtocart font-rubik'>
                            Add to Cart +
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesCard