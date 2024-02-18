"use client"

import React, { useEffect, useState } from 'react'
import ConfiguratorMenu from '@/components/3D/ConfiguratorMenu'
import { StoreProvider } from '../redux/provider'
import { Canvas } from '@react-three/fiber'
import { PresentationControls, Stage } from '@react-three/drei'
import { ConfiguratorWrapper } from '@/components/3D/ConfiguratorWrapper'
import getTabletops from '@/lib/actions/getTabletops'

export default function ConfiguratorPage() {
    const [overflowY, setOverflowY] = useState(false)
    const [windowWidth, setWindowWidth] = useState(undefined)
    const [steps, setSteps] = useState(undefined)
    
    useEffect(() => {
        const fetchData = async () => {
            const tabletops = await getTabletops()
            console.log(tabletops);
            setSteps(tabletops)
        }
        fetchData()
    }, [])

    useEffect(() => {
        overflowY
            ? (document.body.style.overflowY = 'hidden')
            : (document.body.style.overflowY = 'scroll');
    }, [overflowY]);

    
    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])

    return (
        <main className={'container mx-auto relative min-h-[calc(100vh-86px)] pb-5 max-md:flex max-md:flex-col-reverse ' + `${!overflowY ? " pr-[5px] pl-2" : " px-2"}`}>
            <StoreProvider>
                {steps && <ConfiguratorMenu steps={steps} setOverflowY={setOverflowY} />}
                <div className='md:h-[calc(100vh-86px)] md:w-2/3 max-md:h-[calc(46vh-43px)] max-md:w-full'>
                    <Canvas dpr={[1, 2]} onPointerDown={() => setOverflowY(true)} onPointerUp={() => setOverflowY(false)} /* onPointerOut={() => setOverflowY(false)} */>
                        <color attach='background' args={["#ffffff"]} />
                        <PresentationControls
                            speed={1 + (11 * (2560 - windowWidth)) / (2560 - 320)}
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
            </StoreProvider>
        </main>
    )
}
