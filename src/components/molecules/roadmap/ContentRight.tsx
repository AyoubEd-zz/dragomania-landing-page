import React from 'react'
import image from '../../utils/images/AirDecoupe.png'

const ContentRight : React.FC = () => {
    return (
        <div className='flex-grow-0 flex-shrink w-full xl:w-6/12 px-4 mb-16 xl:mb-0'>
            <div className='relative'>
                <img src={image} alt="featured" className='w-full' style={{transform: 'scaleX(-1)'}}/>
            </div>
        </div>
    )
}

export default ContentRight

