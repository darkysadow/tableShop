import Image from 'next/image'
import React from 'react'

const CatalogCard = ({item}) => {
    /* const previewMainImage = item.images.edges.find(image => image.node.altText === "atlant_oak-palena_third");
    console.log(item); */
    return (
        <>
            <div
                className='w-[32%] max-md:w-full pb-8 mb-6'
            >
                <div className='relative w-full sale-card'>
                    <div className='sales-secondary-buttons absolute w-12 h-12 rounded-full border border-slate-200 top-[30%] bg-white flex justify-center items-center'><span className='_icon-heart leading-4 text-lg'></span></div>
                    <div
                        className='sales-secondary-buttons absolute w-12 h-12 rounded-full border border-slate-200 top-[55%] bg-white flex justify-center items-center'
                        
                    ><span className='_icon-loup leading-4 text-lg'></span></div>
                    <div className='w-full sales-main-image'>
                        <Image src={item.images.edges[0].node.url} width={1920} height={1080} style={{ objectFit: 'contain', objectPosition: 'top' }} alt={" main image"} />
                    </div>
                    <div className='w-full sales-second-image'>
                        <Image src={item.images.edges[1].node.url} width={1920} height={1080} style={{ objectFit: 'contain', objectPosition: 'top' }} alt={" second image"} />
                    </div>
                    <div className='overflow-x-hidden sale-card-bottom'>
                        <h4 className='px-2 my-2 text-[#323232] transition hover:text-[#bd8448] cursor-pointer inline-block'>
                            {item.title}
                        </h4>
                        <div className='px-2 w-full h-7 absolute sale-card-bottom-effect'>
                            <div className='flex flex-row gap-1 text-sm absolute leading-7 sale-card-price'>
                                <span className='font-rubik'>${item.priceRange.minVariantPrice.amount}</span>
                            </div>
                            <div className='absolute sale-card-addtocart font-rubik'>
                                Add to Cart +
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogCard