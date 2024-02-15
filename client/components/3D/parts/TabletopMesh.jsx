"use client"

import { useAppSelector } from '@/app/redux/hooks'
import { useGLTF, useTexture } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'

export const TabletopMesh = ({ shape }) => {
    const model = useGLTF(shape.link).nodes
    const getTabletopModel = () => {
        const { Scene, ...rest } = model;
        return rest;
    };
    const tabletopObject = getTabletopModel()
    const tableModel = tabletopObject ? tabletopObject[Object.keys(tabletopObject)[0]] : undefined

    const selectedMaterial = useAppSelector((state) => state.configurator.selected.material)
    const selectedSize = useAppSelector((state) => state.configurator.selected.size)
    const modelScale = {
        x: Number(selectedSize.split('x')[0])/200,
        y: tableModel.scale.y,
        z: Number(selectedSize.split('x')[1].split('cm')[0])/200

    }
    const textureProps = useTexture({
        map: `/materials/${selectedMaterial?.label.toLowerCase().split(' ').join("_")}/Color.jpg`,
        roughnessMap: `/materials/${selectedMaterial?.label.toLowerCase().split(' ').join("_")}/Roughness.jpg`,
        normalMap: `/materials/${selectedMaterial?.label.toLowerCase().split(' ').join("_")}/NormalMap.png`
    })

    textureProps.map.repeat.set(4, 4);
    textureProps.map.rotation = Math.PI / 2
    textureProps.roughnessMap.rotation = Math.PI / 2
    textureProps.roughnessMap.repeat.set(4, 4);
    textureProps.normalMap.rotation = Math.PI / 2
    textureProps.normalMap.repeat.set(4, 4);
    textureProps.map.wrapS = textureProps.map.wrapT =
        THREE.MirroredRepeatWrapping;
    textureProps.roughnessMap.wrapS =
        textureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
    textureProps.normalMap.wrapS = textureProps.normalMap.wrapT =
        THREE.MirroredRepeatWrapping;
    return (
        <mesh
            geometry={tableModel.geometry}
            scale={[
                modelScale.x, modelScale.y, modelScale.z
            ]}
            position={[
                tableModel.position.x,
                tableModel.position.y,
                tableModel.position.z,
            ]}
        >
            {textureProps ? <meshStandardMaterial {...textureProps}/> : <meshStandardMaterial />}
        </mesh>
    )
}
