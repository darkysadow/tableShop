"use client"

import Configurator from '@/components/3D/Configurator'
import { Accordion, AccordionDetails, AccordionSummary, Button, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material'
import { Box, PresentationControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'

export default function ConfiguratorPage() {

    const [selectedTabletopShape, setSelectedTabletopShape] = useState(undefined)
    const [selectedTabletopSize, setSelectedTabletopSize] = useState(undefined)
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
                    label: '120x70cm'
                },
                {
                    label: '130x70cm'
                },
                {
                    label: '130x80cm'
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
            case 'Size of the table top':
                setSelectedTabletopSize(value)
            case 'Material of the table top':
                setSelectedTabletopMaterial(value)
            case 'Legs type':
                setSelectedLegsType(value)
            default:
                return
        }
    }

    const selectedCharacteristicOption = (characteristic) => {
        switch(characteristic) {
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
                <Configurator />
            </div>
        </main>
    )
}

{/* <Accordion 
                    expanded={expanded === 'panel1'} 
                    onChange={handleAccordionChange('panel1')}
                    style={{margin: '0px'}}
                >
                    <AccordionSummary>
                        <Typography>Shape of the table top</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='flex w-full gap-[3%] flex-row'>
                    <div 
                            onClick={() => setSelectedTabletopShape('straight')}
                            className={`w-[30%] flex py-1 px-1 flex-col justify-between items-center bg-[#00000007] rounded-lg h-20 border transition-all hover:bg-[#00000010] cursor-pointer ${selectedTabletopShape === 'straight' ? " border-[#bd8448]" : " border-transparent"}`}>
                            <div>
                                Image
                            </div>
                            <h3 className='text-xs'>Straight</h3>
                        </div>
                        <div 
                            onClick={() => setSelectedTabletopShape('rounded')}
                            className={`w-[30%] flex py-1 px-1 flex-col justify-between items-center bg-[#00000007] rounded-lg h-20 border transition-all hover:bg-[#00000010] cursor-pointer ${selectedTabletopShape === 'rounded' ? " border-[#bd8448]" : " border-transparent"}`}>
                            <div>
                                Image
                            </div>
                            <h3 className='text-xs'>Rounded</h3>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                    expanded={expanded === 'panel2'} 
                    onChange={handleAccordionChange('panel2')}
                    style={{margin: '0px'}}
                >
                    <AccordionSummary>
                        <Typography>Size of the table top</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='flex w-full gap-[3%] flex-row'>
                    <div 
                            onClick={() => setSelectedTabletopSize('120x70cm')}
                            className={`w-[30%] flex py-1 px-1 flex-col justify-center font-medium items-center bg-[#00000007] rounded-lg h-10 border transition-all hover:bg-[#00000010] cursor-pointer ${selectedTabletopSize === '120x70cm' ? " border-[#bd8448]" : " border-transparent"}`}>
                            <h3 className='text-xs'>120x70cm</h3>
                        </div>
                        <div 
                            onClick={() => setSelectedTabletopSize('130x70cm')}
                            className={`w-[30%] flex py-1 px-1 flex-col justify-center font-medium items-center bg-[#00000007] rounded-lg h-10 border transition-all hover:bg-[#00000010] cursor-pointer ${selectedTabletopSize === '130x70cm' ? " border-[#bd8448]" : " border-transparent"}`}>
                            <h3 className='text-xs'>130x70cm</h3>
                        </div>
                        <div 
                            onClick={() => setSelectedTabletopSize('130x80cm')}
                            className={`w-[30%] flex py-1 px-1 flex-col justify-center font-medium items-center bg-[#00000007] rounded-lg h-10 border transition-all hover:bg-[#00000010] cursor-pointer ${selectedTabletopSize === '130x80cm' ? " border-[#bd8448]" : " border-transparent"}`}>
                            <h3 className='text-xs'>130x80cm</h3>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                    expanded={expanded === 'panel3'} 
                    onChange={handleAccordionChange('panel3')}
                    style={{margin: '0px'}}
                >
                    <AccordionSummary>
                        <Typography>Material of the table top</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='flex w-full gap-[3%] flex-row'>
                    <div 
                            onClick={() => setSelectedTabletopShape('straight')}
                            className={`w-[30%] flex py-1 px-1 flex-col justify-between items-center bg-[#00000007] rounded-lg h-20 border transition-all hover:bg-[#00000010] cursor-pointer ${setSelectedTabletopShape === 'straight' ? " border-[#bd8448]" : " border-transparent"}`}>
                            <div>
                                Image
                            </div>
                            <h3 className='text-xs'>name of shape</h3>
                        </div>
                        <div 
                            onClick={() => setSelectedTabletopShape('rounded')}
                            className={`w-[30%] flex py-1 px-1 flex-col justify-between items-center bg-[#00000007] rounded-lg h-20 border transition-all hover:bg-[#00000010] cursor-pointer ${setSelectedTabletopShape === 'rounded' ? " border-[#bd8448]" : " border-transparent"}`}>
                            <div>
                                Image
                            </div>
                            <h3 className='text-xs'>text</h3>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                    expanded={expanded === 'panel4'} 
                    onChange={handleAccordionChange('panel4')}
                    style={{margin: '0px'}}
                >
                    <AccordionSummary>
                        <Typography>Legs type</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='flex w-full gap-[3%] flex-row'>
                    <div 
                            onClick={() => setSelectedTabletopShape('straight')}
                            className={`w-[30%] flex py-1 px-1 flex-col justify-between items-center bg-[#00000007] rounded-lg h-20 border transition-all hover:bg-[#00000010] cursor-pointer ${setSelectedTabletopShape === 'straight' ? " border-[#bd8448]" : " border-transparent"}`}>
                            <div>
                                Image
                            </div>
                            <h3 className='text-xs'>name of shape</h3>
                        </div>
                        <div 
                            onClick={() => setSelectedTabletopShape('rounded')}
                            className={`w-[30%] flex py-1 px-1 flex-col justify-between items-center bg-[#00000007] rounded-lg h-20 border transition-all hover:bg-[#00000010] cursor-pointer ${setSelectedTabletopShape === 'rounded' ? " border-[#bd8448]" : " border-transparent"}`}>
                            <div>
                                Image
                            </div>
                            <h3 className='text-xs'>text</h3>
                        </div>
                    </AccordionDetails>
                </Accordion> */}