"use client"

import React, { useEffect, useState } from 'react'
import ConfiguratorMenu from '@/components/3D/ConfiguratorMenu'
import { StoreProvider } from '../redux/provider'
import { Canvas } from '@react-three/fiber'
import { PresentationControls, Stage } from '@react-three/drei'
import { ConfiguratorWrapper } from '@/components/3D/ConfiguratorWrapper'

export default function ConfiguratorPage() {
    const steps = [
        {
            title: 'Shape of the table top',
            values: [
                {
                    label: 'Straight',
                    imgSrc: '/models/Parts/Tabletops/straight.png',
                    link: "/models/Parts/Tabletops/straight_tabletop_120x65.glb"
                },
                {
                    label: 'Rounded',
                    imgSrc: '/models/Parts/Tabletops/rounded.png',
                    link: "/models/Parts/Tabletops/rounded_tabletop_120x65.glb"
                }
            ]
        },
        {
            title: 'Size of the table top',
            values: [
                {
                    label: '120x65cm'
                },
                {
                    label: '130x65cm'
                },
                {
                    label: '130x70cm'
                }
            ]
        },
        {
            title: 'Material of the table top',
            values: [
                {
                    label: 'Oak Boras',
                    imgSrc: 'url'
                },
                {
                    label: 'Oak Palena',
                    imgSrc: 'url'
                }, {
                    label: 'Venge Luiziana',
                    imgSrc: 'url'
                }
            ]
        },
        {
            title: 'Legs type',
            values: [
                {
                    label: 'Atlant',
                    imgSrc: '/models/Parts/Legs/atlant.png',
                    link: '/models/Parts/Legs/atlant.glb'
                },
                {
                    label: 'Skver',
                    imgSrc: '/models/Parts/Legs/skver.png',
                    link: '/models/Parts/Legs/skver.glb'
                },
                {
                    label: 'Trapezia',
                    imgSrc: '/models/Parts/Legs/trapezia.png',
                    link: '/models/Parts/Legs/trapezia.glb'
                },
                {
                    label: 'Lima',
                    imgSrc: '/models/Parts/Legs/lima.png',
                    link: '/models/Parts/Legs/lima.glb'
                },
                {
                    label: 'Linda',
                    imgSrc: '/models/Parts/Legs/linda.png',
                    link: '/models/Parts/Legs/linda.glb'
                },
                {
                    label: 'Ishla',
                    imgSrc: '/models/Parts/Legs/ishla.png',
                    link: '/models/Parts/Legs/ishla.glb'
                }
            ]
        },
    ]

    const [overflowY, setOverflowY] = useState(false)

    useEffect(() => {
        console.log(overflowY);
        overflowY
            ? (document.body.style.overflowY = 'hidden')
            : (document.body.style.overflowY = 'scroll');
    }, [overflowY]);

    const [windowWidth, setWindowWidth] = useState(undefined)
    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])

    return (
        <main className='container mx-auto px-2 relative min-h-[calc(100vh-86px)] pb-5 max-md:flex max-md:flex-col-reverse'>
            <StoreProvider>
                <ConfiguratorMenu steps={steps} setOverflowY={setOverflowY} />
                <div className='md:h-[calc(100vh-86px)] md:w-2/3 max-md:h-[calc(46vh-43px)] max-md:w-full'>
                    <Canvas dpr={[1, 2]} onMouseEnter={() => setOverflowY(true)} onMouseLeave={() => setOverflowY(false)} onPointerDown={() => setOverflowY(true)} onPointerUp={() => setOverflowY(false)} /* onPointerOut={() => setOverflowY(false)} */>
                        <color attach='background' args={["#ffffff"]} />
                        <PresentationControls
                            speed={1 + (11 * (2560 - windowWidth)) / (2560 - 320)}
                            global
                            polar={[-0.3, Math.PI / 6]}
                            rotation={[Math.PI / 8, Math.PI / 4, 0]}
                            zoom={1}
                        >
                            <Stage environment="city" shadows={false} intensity={3}>
                                <ConfiguratorWrapper items={steps} />
                            </Stage>
                        </PresentationControls>
                    </Canvas>
                </div>
            </StoreProvider>
        </main>
    )
}
