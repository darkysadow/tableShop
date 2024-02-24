"use client"

import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PresentationControls, Stage } from '@react-three/drei'
import { ConfiguratorWrapper } from './ConfiguratorWrapper'
import { useAppSelector } from '@/app/redux/hooks'

const ConfiguratorCanvas = ({ setOverflowY = () => { }, windowWidth, steps }) => {
    const [activeRotateHint, setActiveRotateHint] = useState(true)
    const selected = useAppSelector((state) => state.configurator.selected)

    const handlePointerDown = () => {
        setOverflowY(true)
        setActiveRotateHint(false)
    }

    useEffect(() => {
        setActiveRotateHint(true)
    }, [selected])

    return (
        <div className='md:h-[calc(100vh-86px)] relative md:w-2/3 max-md:h-[calc(46vh-43px)] max-md:w-full'>
            {!selected.shape &&
                <div className='absolute z-50 px-2 py-1 bg-[#00000063] text-white text-xs rounded-md left-1/2 -translate-x-1/2 animate-pulse'>
                    Select the table top shape
                </div>
            }
            {!selected.legsType &&
                <div className='absolute z-50 px-2 py-1 bottom-10 bg-[#00000063] text-white text-xs rounded-md left-1/2 -translate-x-1/2 animate-pulse'>
                    Select the legs type
                </div>
            }
            {selected.shape && activeRotateHint &&
                <div className='absolute flex flex-col items-start justify-start z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 text-xs py-2 bg-[#00000063] text-white gap-y-1 rounded-md animate-pulse'>
                    <div className='flex flex-row gap-x-2'>
                        <span className='_icon-arrow-up-left'></span>
                        <span className='_icon-arrow-up'></span>
                        <span className='_icon-arrow-up-right'></span>
                    </div>
                    <div className='flex flex-row gap-x-2'>
                        <span className='_icon-arrow-left'></span>
                        <span className='_icon-pointer'></span>
                        <span className='_icon-arrow-right'></span>
                    </div>
                    <div className='flex flex-row gap-x-2'>
                        <span className='_icon-arrow-down-left'></span>
                        <span className='_icon-arrow-down'></span>
                        <span className='_icon-arrow-down-right'></span>
                    </div>
                </div>
            }
            <Canvas dpr={[1, 2]} onPointerDown={() => handlePointerDown()} onPointerUp={() => setOverflowY(false)}>
                <color attach='background' args={["#ffffff"]} />
                <PresentationControls
                    speed={1 + (6 * (2560 - windowWidth)) / (2560 - 320)}
                    global
                    polar={[-0.3, Math.PI / 6]}
                    rotation={[Math.PI / 8, Math.PI / 4, 0]}
                    zoom={1}
                >
                    <Stage environment="city" shadows={false} intensity={3}>
                        {steps && <ConfiguratorWrapper items={steps} />}
                    </Stage>
                </PresentationControls>
            </Canvas>
        </div>
    )
}

export default ConfiguratorCanvas