"use client"

import { useGLTF } from '@react-three/drei'
import React from 'react'

export const LegsMesh = ({leg}) => {
    const gltf = useGLTF(leg.link).nodes
    const legsSelectors = Object.getOwnPropertyNames(gltf).filter(item => item !== "Scene")

    return (
        <>
        
        {
            legsSelectors && legsSelectors.map((leg, index) => (
                <mesh
                    key={index}
                    geometry={gltf[leg].geometry}
                    scale={[
                        gltf[leg].scale.x,
                        gltf[leg].scale.y,
                        gltf[leg].scale.z,
                    ]}
                    position={[
                        gltf[leg].position.x,
                        gltf[leg].position.y,
                        gltf[leg].position.z,                        
                    ]}
                    rotation={[
                        gltf[leg].rotation.x,
                        gltf[leg].rotation.y,
                        gltf[leg].rotation.z,
                    ]}
                >
                    <meshStandardMaterial color={"black"} />
                </mesh>
            ))
        }

        </>
    )
}