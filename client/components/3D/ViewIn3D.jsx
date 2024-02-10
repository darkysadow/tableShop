'use client'

import { close3dViewer } from '@/app/redux/features/viewIn3d/viewer3dSlice'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import { Dialog, DialogContent } from '@mui/material'
import { PresentationControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import { TableTemplate } from './TableTemplate'
import MaterialPicker from '../Catalog/CatalogItem/MaterialPicker'
import ImagePreloader from '../Preloaders/ImagePreloader'

const ViewIn3D = ({
    materials,
    model
}) => {
    const isOpened = useAppSelector((state) => state.viewer3d.dialog.opened)
    const legsColor = useAppSelector((state) => state.viewer3d.table.legsColor)
    const tabletopMaterial = useAppSelector((state) => state.cardMaterial.value)
    const dispatch = useAppDispatch()
    const [windowWidth, setWindowWidth] = useState(undefined)
    const [isTextureLoaded, setIsTextureLoaded] = useState(false)

    const materialPickerValue = useAppSelector((state) => state.cardMaterial.value)

    useEffect(() => {
        setIsTextureLoaded(false)
    }, [materialPickerValue])

    const closeDialog = () => {
        dispatch(close3dViewer())
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])

    if (windowWidth && materials) {
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
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 z-50'>
                        <MaterialPicker materials={materials} titleBackground={true} />
                    </div>
                    {!isTextureLoaded && 
                        <div className='absolute w-full h-full text-center  flex flex-col justify-center items-center gap-y-4 top-0 left-0 z-50'>
                            <div className='flex flex-col justify-center items-center'>
                                <ImagePreloader ml={false} />
                                <span className='px-2 rounded-md'>Loading</span>
                            </div>
                        </div>
                    }
                    <div className='pt-10 w-full h-full'>
                        <Canvas dpr={[1, 2]}>
                            <color attach='background' args={["#ffffff"]} />
                            <PresentationControls
                                speed={1 + (11 * (2560 - windowWidth)) / (2560 - 320)}
                                global
                                polar={[-0.3, Math.PI / 6]}
                                rotation={[Math.PI / 8, Math.PI / 4, 0]}
                                zoom={1.1}
                            >
                                <Stage environment="city" shadows={false} intensity={3}>
                                    
                                    <TableTemplate legsColor={legsColor}
                                        modelLink={model.url} tabletopMaterial={tabletopMaterial.node.title}
                                        setIsTextureLoaded={setIsTextureLoaded}
                                    />
                                </Stage>
                            </PresentationControls>
                        </Canvas>
                    </div>
                </DialogContent>
            </Dialog>
        )
    } 
}

export default ViewIn3D