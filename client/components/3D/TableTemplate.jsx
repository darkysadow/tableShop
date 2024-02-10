"use client"

import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from 'three';


export function TableTemplate({ legsColor = "#000000", modelLink, tabletopMaterial, setIsTextureLoaded }) {
  const { nodes } = useGLTF(modelLink);
  useGLTF.preload(modelLink);
  //Tabletop node must begin with the word "TableTop_" (with underscore in the) 
  //find all nodes without scene
  const nodesKeyNames = Object.getOwnPropertyNames(nodes).filter(item => item !== "Scene")
  // 
  const tabletopSelector = nodesKeyNames.find(item => item.split("_")[0] === "TableTop")
  const legsSelectors = nodesKeyNames.filter(item => item !== tabletopSelector)

  //Tabletop Material settings
  const tableTopMaterialProps = useTexture({
    map: `/materials/${tabletopMaterial.toLowerCase().split(' ').join("_")}/Color.jpg`,
    roughnessMap: `/materials/${tabletopMaterial.toLowerCase().split(' ').join("_")}/Roughness.jpg`,
    normalMap: `/materials/${tabletopMaterial.toLowerCase().split(' ').join("_")}/NormalMap.png`
  }, (onLoad) => {setIsTextureLoaded(true)} )

  tableTopMaterialProps.map.repeat.set(4, 4);
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
    THREE.MirroredRepeatWrapping;

  return (
    <group dispose={null}>
      <mesh
        castShadow
        geometry={nodes[tabletopSelector].geometry}
        position={[
          nodes[tabletopSelector].position.x,
          nodes[tabletopSelector].position.y,
          nodes[tabletopSelector].position.z]}
        scale={[
          nodes[tabletopSelector].scale.x,
          nodes[tabletopSelector].scale.y,
          nodes[tabletopSelector].scale.z]}
      >
        <meshStandardMaterial
          roughness={nodes[tabletopSelector].material.roughness}
          metalness={nodes[tabletopSelector].material.metalness}
          {...tableTopMaterialProps}
        />
      </mesh>
      {
        legsSelectors && legsSelectors.map((item, index) => (
          <mesh
            key={index}
            castShadow
            geometry={nodes[item].geometry}
            position={[
              nodes[item].position.x,
              nodes[item].position.y,
              nodes[item].position.z,
            ]}
            rotation={[
              nodes[item].rotation.x,
              nodes[item].rotation.y,
              nodes[item].rotation.z,
            ]}
            scale={[
              nodes[item].scale.x,
              nodes[item].scale.y,
              nodes[item].scale.z,
            ]}
          >
            <meshStandardMaterial
              metalness={nodes[item].material.metalness}
              roughness={nodes[item].material.roughness}
              color={legsColor}
            />
          </mesh>
        ))
      }
    </group>
  );
  
}



