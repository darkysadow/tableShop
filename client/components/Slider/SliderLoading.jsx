import React from 'react'

const SliderLoading = () => {
    return (
        <div className='h-[60vh] w-full relative flex flex-row'>
            {/* Buttons, bullets */}
            <div className='swiper-skeleton-button animate-pulse left-2'></div>
            <div className='swiper-skeleton-button animate-pulse right-2'></div>
            <div className='swiper-skeleton-bullets animate-pulse bottom-1'></div>
            {/* ---------------- */}
            <div className="container px-14 mx-auto flex flex-row h-full justify-center">
                <div className='flex flex-col w-[45%] items-start justify-center gap-8 h-full'>
                    <div className='w-full gap-[3px] flex flex-col animate-pulse'>
                        <div className='h-[2.9rem] w-[70%] bg-[#00000032] rounded'></div>
                        <div className='h-[2.9rem] w-[85%] bg-[#00000032] rounded'></div>
                    </div>
                    <div className='w-full gap-[3px] flex flex-col animate-pulse'>
                        <div className='h-[1rem] w-[90%] bg-[#00000032] rounded'></div>
                        <div className='h-[1rem] w-[85%] bg-[#00000032] rounded'></div>
                        <div className='h-[1rem] w-[43%] bg-[#00000032] rounded'></div>
                    </div>
                    <div className='mt-12 animate-pulse'>
                        <div className='h-[4rem] w-[180px] bg-[#00000032] rounded'></div>
                    </div>

                </div>
                <div className='flex items-center w-[45%] h-[100%] animate-pulse'>
                    <div className='bg-[#00000032] w-full h-[80%]'></div>
                </div>
            </div>
        </div>
    )
}

export default SliderLoading