import React from 'react'

const SliderLoading = () => {
    return (
        <div className='h-[60vh] max-md:h-[85vh] max-md:flex-col max-md:justify-start w-full relative flex flex-row'>
            {/* Buttons, bullets */}
            <div className='swiper-skeleton-button animate-pulse left-2 max-md:hidden'></div>
            <div className='swiper-skeleton-button animate-pulse right-2 max-md:hidden'></div>
            <div className='swiper-skeleton-bullets animate-pulse bottom-1'></div>
            {/* ---------------- */}
            <div className="container px-14 mx-auto flex flex-row h-full justify-center max-md:flex-col">
                <div className='flex flex-col w-[45%] max-md:w-full items-start justify-center max-md:justify-start max-md:pt-10 gap-8 max-md:gap-6 h-full max-md:h-auto'>
                    <div className='w-full gap-[3px] flex flex-col animate-pulse'>
                        <div className='h-[2.9rem] w-[70%] bg-[#00000032] rounded'></div>
                        <div className='h-[2.9rem] w-[85%] bg-[#00000032] rounded'></div>
                    </div>
                    <div className='w-full gap-[3px] flex flex-col animate-pulse'>
                        <div className='h-[1rem] w-[90%] bg-[#00000032] rounded'></div>
                        <div className='h-[1rem] w-[85%] bg-[#00000032] rounded'></div>
                        <div className='h-[1rem] w-[43%] bg-[#00000032] rounded'></div>
                    </div>
                    <div className='max-md:hidden mt-12 animate-pulse'>
                        <div className='h-[4rem] w-[180px] bg-[#00000032] rounded'></div>
                    </div>

                </div>
                <div className='flex items-center w-[45%] max-md:w-full h-[100%] animate-pulse'>
                    <div className='bg-[#00000032] w-full h-[80%] max-md:h-[95%]'></div>
                </div>
                <div className='md:hidden mt-12 max-md:mt-2 animate-pulse'>
                        <div className='h-[4rem] w-[180px] bg-[#00000032] rounded'></div>
                </div>
            </div>
        </div>
    )
}

export default SliderLoading