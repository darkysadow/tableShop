"use client"

import React, { useEffect, useState } from 'react'
import ConfiguratorMenu from '@/components/3D/ConfiguratorMenu'
import { StoreProvider } from '../redux/provider'
import { Canvas } from '@react-three/fiber'
import { PresentationControls, Stage } from '@react-three/drei'
import { ConfiguratorWrapper } from '@/components/3D/ConfiguratorWrapper'
import getTabletops from '@/lib/actions/getTabletops'
import ConfiguratorCanvas from '@/components/3D/ConfiguratorCanvas'
import ImagePreloader from '@/components/Preloaders/ImagePreloader'

export default function ConfiguratorPage() {
    const [overflowY, setOverflowY] = useState(false)
    const [windowWidth, setWindowWidth] = useState(undefined)
    const [steps, setSteps] = useState(undefined)
    
    useEffect(() => {
        const fetchData = async () => {
            const tabletops = await getTabletops()
            setSteps(tabletops)
        }
        fetchData()
    }, [])

    useEffect(() => {
        overflowY && windowWidth < 768
            ? (document.body.style.overflowY = 'hidden')
            : (document.body.style.overflowY = 'scroll');
    }, [overflowY]);

    
    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])

    return (
        <main className={'container mx-auto relative min-h-[calc(100vh-86px)] pb-5 max-md:flex max-md:flex-col-reverse ' + `${!overflowY ? " pr-[5px] pl-2" : " px-2"}`}>
            <StoreProvider>
                {steps ? 
                    <ConfiguratorMenu steps={steps} setOverflowY={setOverflowY} /> 
                :
                    <div className='md:absolute max-md:w-full px-4 py-4 flex flex-col justify-center items-center rounded-sm right-0 md:w-1/3 bg-[#00000005] md:h-[calc(100vh-106px)] max-md:h-[calc(54vh-43px)]'>
                        <div className='flex flex-col justify-center items-center'>
                            <ImagePreloader ml={false} />
                            <p>Loading table components</p>
                        </div>
                    </div>
                }
                {steps ? 
                    <ConfiguratorCanvas 
                        setOverflowY={setOverflowY}
                        steps={steps}
                        windowWidth={windowWidth}
                    /> 
                : 
                    <div className='md:h-[calc(100vh-86px)] md:w-2/3 max-md:h-[calc(46vh-43px)] flex justify-center items-center max-md:w-full'>
                        <div className='flex justify-center items-center flex-col'>
                            <ImagePreloader ml={false} />
                            <p>Loading table parts...</p>
                        </div>
                    </div>
                }
            </StoreProvider>
        </main>
    )
}
