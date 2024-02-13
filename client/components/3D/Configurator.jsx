import { PresentationControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Configurator = () => {
    return (
        <Canvas dpr={[1, 2]} camera={{ position: [100, 100, 100] }}>
            <color attach='background' args={["#ffffff"]} />
            <PresentationControls
                speed={3}
                global
                polar={[-0.3, Math.PI / 6]}
                rotation={[Math.PI / 8, Math.PI / 4, 0]}
                zoom={1.1}

            >
                <Stage environment="city" shadows={false} intensity={3}>
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshBasicMaterial wireframe color={"red"} />
                    </mesh>
                </Stage>
            </PresentationControls>
        </Canvas>
    )
}

export default Configurator