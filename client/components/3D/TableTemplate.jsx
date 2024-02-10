import React from "react";
import { useGLTF } from "@react-three/drei";

export function TableTemplate({ legsColor = "#000000", modelLink }) {
  const { nodes } = useGLTF(modelLink);
  useGLTF.preload(modelLink);
  //Tabletop node must begin with the word "TableTop_" (with underscore in the) 
  //find all nodes without scene
  const nodesKeyNames = Object.getOwnPropertyNames(nodes).filter(item => item !== "Scene")
  // 
  const tabletopSelector = nodesKeyNames.find(item => item.split("_")[0] === "TableTop")
  const legsSelectors = nodesKeyNames.filter(item => item !== tabletopSelector)

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



