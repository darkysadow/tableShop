"use client"

import { open3dViewer } from '@/app/redux/features/viewIn3d/viewer3dSlice'
import { useAppDispatch } from '@/app/redux/hooks'
import React from 'react'

const ViewIn3DButton = () => {
    const dispatch = useAppDispatch()

    return (
        <div className='w-full flex justify-center items-center mt-5 max-md:mb-5'>
            <div 
                className='w-2/3 bg-[#bd8448] text-white py-3 text-center transition-colors hover:bg-black'
                onClick={() => dispatch(open3dViewer())}
            >View in 3D</div>
        </div>
    )
}

export default ViewIn3DButton