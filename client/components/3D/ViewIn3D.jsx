'use client'

import { close3dViewer } from '@/app/redux/features/viewIn3d/viewer3dSlice'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import { Dialog, DialogContent } from '@mui/material'
import { PresentationControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import { TableTemplate } from './TableTemplate'

const ViewIn3D = ({

}) => {
    const isOpened = useAppSelector((state) => state.viewer3d.dialog.opened)
    const legsColor = useAppSelector((state) => state.viewer3d.table.legsColor)
    const dispatch = useAppDispatch()

    const [windowWidth, setWindowWidth] = useState(undefined)

    const closeDialog = () => {
        dispatch(close3dViewer())
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])

    if (windowWidth) {
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
                            <color attach='background' args={["#ffffff"]} />
                            <PresentationControls
                                speed={1 + (11 * (2560 - windowWidth)) / (2560 - 320)}
                                global
                                polar={[-0.3, Math.PI / 6]}
                                rotation={[Math.PI / 8, Math.PI / 4, 0]}
                            >
                                <Stage environment="city" intensity={0.1} castShadow={false}>
                                    <TableTemplate legsColor={legsColor} modelLink={"/models/Ishla/ishlaSecond.glb"} />
                                </Stage>
                                <mesh receiveShadow={true} castShadow rotation={[-Math.PI / 2, 0, 0]} position-y={-0.3}>
                                    <planeGeometry args={[170, 170]} />
                                    <meshStandardMaterial
                                        color={"#f1f1f1"}

                                    />
                                </mesh>
                                
                                <mesh position={[0.02, -0.29, 0.04]} rotation={[-Math.PI / 2, 0, 0]}>
                                    <planeGeometry args={[1.2, 0.7]} />
                                    <meshBasicMaterial
                                        color={"#f7f7f7"}
                                    />
                                </mesh>

                            </PresentationControls>
                        </Canvas>
                    </div>
                </DialogContent>
            </Dialog>
        )
    }
}

export default ViewIn3D