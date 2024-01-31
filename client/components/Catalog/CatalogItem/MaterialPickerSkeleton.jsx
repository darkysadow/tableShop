import React from 'react'

const MaterialPickerSkeleton = () => {
    return (
        <div className="flex flex-col w-full items-start my-5">
            <div className='h-[1.2rem] w-[50%] bg-[#00000032] animate-pulse rounded'></div>
            <div className="flex w-full justify-center flex-row gap-x-3 items-end">
                <div className="variant relative mt-10 w-10 h-10 rounded-full bg-[#00000032] animate-pulse border-2 "></div>
                <div className="variant relative mt-10 w-10 h-10 rounded-full bg-[#00000032] animate-pulse border-2 "></div>
                <div className="variant relative mt-10 w-10 h-10 rounded-full bg-[#00000032] animate-pulse border-2 "></div>
            </div>
        </div>
    )
}

export default MaterialPickerSkeleton