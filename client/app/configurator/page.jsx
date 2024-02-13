"use client"

import { Configurator } from '@/components/3D/Configurator'
import { Button, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material'
import { Box, PresentationControls, Stage} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'

export default function ConfiguratorPage() {

    const [selectedTabletopShape, setSelectedTabletopShape] = useState(undefined)
    const [selectedTabletopSize, setSelectedTabletopSize] = useState('120x65cm')
    const [selectedTabletopMaterial, setSelectedTabletopMaterial] = useState(undefined)
    const [selectedLegsType, setSelectedLegsType] = useState(undefined)
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const steps = [
        {
            title: 'Shape of the table top',
            values: [
                {
                    label: 'Straight',
                    imgSrc: 'url'
                },
                {
                    label: 'Rounded',
                    imgSrc: 'url'
                }
            ]
        },
        {
            title: 'Size of the table top',
            values: [
                {
                    label: '120x65cm'
                },
                {
                    label: '130x65cm'
                },
                {
                    label: '130x70cm'
                }
            ]
        },
        {
            title: 'Material of the table top',
            values: [
                {
                    label: 'Oak Boras',
                    imgSrc: 'url'
                },
                {
                    label: 'Oak Palena',
                    imgSrc: 'url'
                }, {
                    label: 'Venge Luiziana',
                    imgSrc: 'url'
                }
            ]
        },
        {
            title: 'Legs type',
            values: [
                {
                    label: 'Atlant',
                    imgSrc: 'url'
                },
                {
                    label: 'Skver',
                    imgSrc: 'url'
                },
                {
                    label: 'Trapezia',
                    imgSrc: 'url'
                },
                {
                    label: 'Lima',
                    imgSrc: 'url'
                },
                {
                    label: 'Linda',
                    imgSrc: 'url'
                },
                {
                    label: 'Ishla',
                    imgSrc: 'url'
                }
            ]
        },
    ]

    const handleSetStateValue = (characteristic, value) => {
        switch (characteristic) {
            case 'Shape of the table top':
                setSelectedTabletopShape(value)
                break
            case 'Size of the table top':
                setSelectedTabletopSize(value)
                break
            case 'Material of the table top':
                setSelectedTabletopMaterial(value)
                break
            case 'Legs type':
                setSelectedLegsType(value)
                break
            default:
                return
        }
    }

    const selectedCharacteristicOption = (characteristic) => {
        switch (characteristic) {
            case 'Shape of the table top':
                return selectedTabletopShape
            case 'Size of the table top':
                return selectedTabletopSize
            case 'Material of the table top':
                return selectedTabletopMaterial
            case 'Legs type':
                return selectedLegsType
            default:
                return
        }
    }

    return (
        <main className='container mx-auto px-2 relative min-h-[calc(100vh-86px)] pb-5'>
            <div className='absolute max-md:w-full px-4 py-4 flex flex-col  rounded-sm right-0 md:w-1/3 bg-[#00000005] h-[calc(100vh-106px)]'>
                <h1 className='tracking-wide text-2xl'>Choose the:</h1>
                <div className='w-full my-5 h-5/6 overflow-y-auto scrolable-block_gray pr-[5px]'>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.title}>
                                <StepLabel
                                    optional={
                                        index === steps.length - 1 ? (
                                            <Typography variant="caption">Last step</Typography>
                                        ) : null
                                    }
                                >
                                    {step.title}
                                </StepLabel>
                                <StepContent>
                                    <div className='w-full flex flex-row gap-x-[3%] gap-y-2 flex-wrap'>
                                        {step.values.map((stepVal, stepValIndex) => (
                                            <div
                                                onClick={() => handleSetStateValue(step.title, stepVal.label)}
                                                key={stepValIndex}
                                                className={'w-[30%] flex py-1 px-1 flex-col bg-[#00000007] rounded-lg border transition-all hover:bg-[#00000010] cursor-pointer' + `${stepVal.imgSrc ? " h-20 justify-between items-center" : " h-10 justify-center items-center"}` + `${selectedCharacteristicOption(step.title) === stepVal.label ? ' border-[#bd8448]' : ' border-transparent'}`}
                                            >
                                                {stepVal.imgSrc && <div>{stepVal.imgSrc}</div>}
                                                <h2 className='text-xs font-medium'>{stepVal.label}</h2>
                                            </div>
                                        ))}
                                    </div>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                            </Button>
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </div>
            </div>
            <div className='h-[calc(100vh-86px)] md:w-2/3 max-md:w-full'>
                <Canvas dpr={[1, 2]}>
                    <color attach='background' args={["#ffffff"]} />
                    <PresentationControls
                        speed={3}
                        global
                        polar={[-0.3, Math.PI / 6]}
                        rotation={[Math.PI / 8, Math.PI / 4, 0]}
                        zoom={1.1}

                    >
                        <Stage environment="city" shadows={false} intensity={3}>
                            <Configurator
                                tabletopShape={selectedTabletopShape}
                                tabletopSize={selectedTabletopSize.split('cm')[0]}
                                material={selectedTabletopMaterial}
                                legsType={selectedLegsType}
                            />
                        </Stage>
                    </PresentationControls>
                </Canvas>
            </div>
        </main>
    )
}