import React from 'react'
import { IButton } from '../../utils/types'

const ButtonOutline : React.FC<IButton> = ({ onClick, text }) => {
    return (
        <button className='button button-outline hover:bg-white hover:color-pink' onClick={onClick}>
            {text}
        </button>
    )
}

export default ButtonOutline
