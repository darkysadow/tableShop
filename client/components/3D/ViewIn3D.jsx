'use client'

import { close3dViewer } from '@/app/redux/features/viewIn3d/viewer3dSlice'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import { Dialog, DialogContent } from '@mui/material'
import { MeshReflectorMaterial, PresentationControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { Ishla } from './Ishla'
import { MeshBasicMaterial } from 'three'

const ViewIn3D = ({

}) => {
    const isOpened = useAppSelector((state) => state.viewer3d.dialog.opened)
    const dispatch = useAppDispatch()

    const closeDialog = () => {
        dispatch(close3dViewer())
    }

    useEffect(() => {
        console.log(isOpened);
    }, [isOpened])


    return (
        <Dialog
            open={isOpened}
            onClose={closeDialog}
            fullScreen={true}
        >
            <DialogContent className='relative pt-5'>
                <div
                    className='absolute top-0 right-0 p-2 m-2 text-2xl cursor-pointer'
                    onClick={closeDialog}
                >
                    ✖
                </div>
                <div className='pt-10 w-full h-full'>
                    <Canvas dpr={[1, 2]}>
                        <color attach='background' args={["#f1f1f1"]} />
                        <PresentationControls
                            speed={1.5}
                            global
                            polar={[-0.1, Math.PI / 4]}
                            rotation={[Math.PI / 8, Math.PI / 4, 0]}
                        >
                            <Stage environment="city" intensity={0.6} castShadow={false}>
                                <Ishla />
                            </Stage>
                            <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-0.3}>
                                <planeGeometry args={[170, 170]} />
                            </mesh>
                            <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-0.299} position-x={0.05} position-z={0.1}>
                                <planeGeometry args={[1.2, 0.7]} />
                                <meshBasicMaterial 
                                    color="#000000"
                                    wireframe
                                />
                            </mesh>
                        </PresentationControls>
                    </Canvas>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ViewIn3D