"use client"

import React, { useEffect } from 'react'
import { Configurator } from './Configurator'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import { initializeConfiguratorState } from '@/app/redux/features/configurator/configuratorSlice'
import { TabletopMesh } from './parts/TabletopMesh'
import { LegsMesh } from './parts/LegsMesh'

export const ConfiguratorWrapper = ({ items }) => {
    const storeInitialized = useAppSelector((state) => state.configurator.initialized)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!storeInitialized) {
            dispatch(initializeConfiguratorState({
                tabletopShapes: items[0].values,
                tabletopSizes: items[1].values,
                tabletopMaterials: items[2].values,
                legsTypes: items[3].values,
            }))
        }
    }, [items])

    const store = useAppSelector((state) => state.configurator)
    const selected = useAppSelector((state) => state.configurator.selected)

    if (storeInitialized) {
        return (
            <Configurator>
                {selected?.shape?.link &&
                    <TabletopMesh shape={selected.shape} />
                }
                {selected?.legsType?.link &&
                    <LegsMesh leg={selected.legsType} />
                }
            </Configurator>
        )
    }

}