import React from 'react'

const ImagePreloader = ({ml = true}) => {
    return (
        <div className={'lds-circle ' + `${ml ? " ml-[1rem] " : " "}`}>
            <div></div>
        </div>
    )
}

export default ImagePreloader