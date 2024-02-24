"use client"

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PresentationControls, Stage } from '@react-three/drei'
import { ConfiguratorWrapper } from './ConfiguratorWrapper'

const ConfiguratorCanvas = ({ setOverflowY = () => { }, windowWidth, steps }) => {
    return (
        <div className='md:h-[calc(100vh-86px)] md:w-2/3 max-md:h-[calc(46vh-43px)] max-md:w-full'>
            <Canvas dpr={[1, 2]} onPointerDown={() => setOverflowY(true)} onPointerUp={() => setOverflowY(false)}>
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
    )
}

export default ConfiguratorCanvas