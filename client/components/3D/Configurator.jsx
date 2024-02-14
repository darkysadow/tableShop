"use client"

import { useAppSelector } from '@/app/redux/hooks';
import { PresentationControls, Stage, useGLTF, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import React, { useEffect } from 'react'
import * as THREE from 'three';

export function Configurator() {
    const store = useAppSelector((state) => state.configurator)
    const texturesArray = store.tabletopMaterials.map(mat => ({
        title: mat?.label,
        texture: useTexture({
            map: `/materials/${mat?.label.toLowerCase().split(' ').join("_")}/Color.jpg`,
            roughnessMap: `/materials/${mat?.label.toLowerCase().split(' ').join("_")}/Roughness.jpg`,
            normalMap: `/materials/${mat?.label.toLowerCase().split(' ').join("_")}/NormalMap.png`
        })
    }))
    if (store.initialized) {
        const tabletops = store.tabletopShapes
        const materials = store.tabletopMaterials
        const selectedTabletopShape = store.selected.shape
        const selectedMaterial = store.selected.material?.label
        const tabletopScale = {
            x: Number(store.selected.size.split('x')[0]) / 200,
            z: Number(store.selected.size.split('x')[1].split('cm')[0]) / 200
        }
        const tabletopSceneArray = tabletops.map((tabletopShape) => useGLTF(tabletopShape.link).nodes)
        const tabletopModelsArray = tabletopSceneArray.map((tabletopScene) => {
            const { Scene, ...rest } = tabletopScene;
            return rest;
        });
        const tempObjectWithSelectedForm = tabletopModelsArray.find(obj => {
            const keys = Object.keys(obj);
            if (selectedTabletopShape?.label) {
                return keys.some(key => key.includes(selectedTabletopShape.label));
            }
        });
        const objectWithSelectedForm = tempObjectWithSelectedForm ? tempObjectWithSelectedForm[Object.keys(tempObjectWithSelectedForm)[0]] : undefined

        

        return (
            <group dispose={null} position={[0, 0, 0]}>
                {objectWithSelectedForm !== undefined && <mesh
                    geometry={objectWithSelectedForm.geometry}
                    position={[
                        objectWithSelectedForm.position.x,
                        objectWithSelectedForm.position.y,
                        objectWithSelectedForm.position.z,
                    ]}
                    scale={[
                        tabletopScale.x,
                        objectWithSelectedForm.scale.y,
                        tabletopScale.z
                    ]}
                >
                    { texturesArray !== undefined  ?
                        <meshStandardMaterial {...texturesArray[1].texture} />
                    : <meshStandardMaterial />
                    }
                </mesh>}
            </group>
        )
    }
}


/* export function Configurator({ tabletopShape, tabletopSize, material, legsType }) {
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



        return (
            <group dispose={null} position={[0, 0, 0]}>
                {tabletopModel && <mesh
                    geometry={tabletopModel[tabletopSelector[0]].geometry}
                    scale={[
                        Number(tabletopSizes[0]) / 200,
                        tabletopModel[tabletopSelector[0]].scale.y,
                        Number(tabletopSizes[1]) / 200,
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
                        key={legType}
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
                        <meshStandardMaterial
                            metalness={legsModel[legType].material.metalness}
                            roughness={legsModel[legType].material.roughness}
                            color={"black"}
                        />
                    </mesh>
                ))}
            </group>
        )
    }
} */