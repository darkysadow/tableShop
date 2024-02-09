/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ishla.glb --transform 
Files: ishla.glb [10.58KB] > D:\front\tableShop\client\public\models\Ishla\ishla-transformed.glb [1.6KB] (85%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Ishla(props) {
  const { nodes, materials } = useGLTF('/models/Ishla/ishla-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.TableTop_120x65_Straight.geometry} material={nodes.TableTop_120x65_Straight.material} position={[0, 0.74, 0]} scale={[0.599, 0.009, 0.325]} />
    </group>
  )
}

useGLTF.preload('/models/Ishla/ishla-transformed.glb')
