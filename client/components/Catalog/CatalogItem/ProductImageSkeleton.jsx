import React from 'react'

const ProductImageSkeleton = () => {
    return (
        <div className="w-3/5 flex flex-row max-md:w-full">
            <div className='w-1/5 flex flex-col gap-y-5'>
                    <div className={'relative h-[100px] w-full border rounded bg-[#00000032] animate-pulse transition-colors '}></div>
                    <div className={'relative h-[100px] w-full border rounded bg-[#00000032] animate-pulse transition-colors '}></div>
                    <div className={'relative h-[100px] w-full border rounded bg-[#00000032] animate-pulse transition-colors '}></div>
            </div>
            <div className='w-4/5 relative flex justify-center items-start'>
                <div className='absolute rounded h-[50vh] bg-[#00000032] animate-pulse w-10/12'>
                    
                </div>


            </div>
        </div>
    )
}

export default ProductImageSkeleton