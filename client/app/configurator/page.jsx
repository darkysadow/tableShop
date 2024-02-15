"use client"

import React from 'react'
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
                    imgSrc: 'url',
                    link: "/models/Parts/Tabletops/straight_tabletop_120x65.glb"
                },
                {
                    label: 'Rounded',
                    imgSrc: 'url',
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
                    imgSrc: 'url',
                    link: '/models/Parts/Legs/atlant.glb'
                },
                {
                    label: 'Skver',
                    imgSrc: 'url',
                    link: '/models/Parts/Legs/skver.glb'
                },
                {
                    label: 'Trapezia',
                    imgSrc: 'url',
                    link: '/models/Parts/Legs/trapezia.glb'
                },
                {
                    label: 'Lima',
                    imgSrc: 'url',
                    link: '/models/Parts/Legs/lima.glb'
                },
                {
                    label: 'Linda',
                    imgSrc: 'url',
                    link: '/models/Parts/Legs/linda.glb'
                },
                {
                    label: 'Ishla',
                    imgSrc: 'url',
                    link: '/models/Parts/Legs/ishla.glb'
                }
            ]
        },
    ]

    return (
        <main className='container mx-auto px-2 relative min-h-[calc(100vh-86px)] pb-5'>
            <StoreProvider>
                <ConfiguratorMenu steps={steps} />
                <div className='h-[calc(100vh-86px)] md:w-2/3 max-md:w-full'>
                    <Canvas dpr={[1, 2]}>
                        <color attach='background' args={["#ffffff"]} />
                        <PresentationControls
                            speed={3}
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
