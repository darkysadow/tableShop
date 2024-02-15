"use client"

export function Configurator({children}) {

    return (
        <group dispose={null} position={[0,0,0]}>
            {children}
        </group>
    )
}