"use client"

import { useGLTF, useTexture } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three';

export function Configurator({tabletopShape, tabletopSize, material, legsType}) {
    const tabletopModel = tabletopShape && tabletopSize && useGLTF(`/models/Parts/Tabletops/${tabletopShape.toLowerCase()}_tabletop_120x65.glb`).nodes
    tabletopShape && tabletopSize && useGLTF.preload(`/models/Parts/Tabletops/${tabletopShape}_tabletop_${tabletopSize}.glb`);
    const tabletopSelector = tabletopModel && Object.getOwnPropertyNames(tabletopModel).filter(item => item !== "Scene")
    const tabletopSizes = tabletopSize.split('x')
    const legsModel = legsType && useGLTF(`/models/Parts/Legs/${legsType.toLowerCase()}.glb`).nodes
    const legsSelector = legsModel && Object.getOwnPropertyNames(legsModel).filter(item => item !== "Scene")
    const tableTopMaterialProps = material && useTexture({
        map: `/materials/${material.toLowerCase().split(' ').join("_")}/Color.jpg`,
        roughnessMap: `/materials/${material.toLowerCase().split(' ').join("_")}/Roughness.jpg`,
        normalMap: `/materials/${material.toLowerCase().split(' ').join("_")}/NormalMap.png`
      })
      if (material) {
        tableTopMaterialProps.map.repeat.set(4, 4)
        tableTopMaterialProps.map.rotation = Math.PI / 2
        tableTopMaterialProps.roughnessMap.rotation = Math.PI / 2
        tableTopMaterialProps.roughnessMap.repeat.set(4, 4);
        tableTopMaterialProps.normalMap.rotation = Math.PI / 2
        tableTopMaterialProps.normalMap.repeat.set(4, 4);
        tableTopMaterialProps.map.wrapS = tableTopMaterialProps.map.wrapT =
          THREE.MirroredRepeatWrapping;
        tableTopMaterialProps.roughnessMap.wrapS =
          tableTopMaterialProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
        tableTopMaterialProps.normalMap.wrapS = tableTopMaterialProps.normalMap.wrapT =
          THREE.MirroredRepeatWrapping
      }
      

    return (
        <group dispose={null} position={[0,0,0]}>
            {tabletopModel && <mesh
                geometry={tabletopModel[tabletopSelector[0]].geometry}
                scale={[
                    Number(tabletopSizes[0])/200,
                    tabletopModel[tabletopSelector[0]].scale.y,
                    Number(tabletopSizes[1])/200,
                ]}
                position={[
                    tabletopModel[tabletopSelector[0]].position.x,
                    tabletopModel[tabletopSelector[0]].position.y,
                    tabletopModel[tabletopSelector[0]].position.z,

                ]}
            >
                <meshStandardMaterial 
                    {...tableTopMaterialProps}
                />
            </mesh>}
            {legsSelector && legsSelector.map((legType) => (
                <mesh 
                    geometry={legsModel[legType].geometry}
                    scale={[
                        legsModel[legType].scale.x,
                        legsModel[legType].scale.y,
                        legsModel[legType].scale.z,
                    ]}
                    position={[
                        legsModel[legType].position.x,
                        legsModel[legType].position.y,
                        legsModel[legType].position.z,
                    ]}
                    rotation={[
                        legsModel[legType].rotation.x,
                        legsModel[legType].rotation.y,
                        legsModel[legType].rotation.z,
                    ]}
                >   
                    <meshStandardMaterial />
                </mesh>
            ))}
        </group>
    )
}