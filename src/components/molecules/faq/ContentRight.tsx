import React from 'react'
import image from '../../utils/images/plant-drago.png'

const ContentLeft : React.FC = () => {
    return (
        <div className='flex-grow-0 flex-shrink w-full xl:w-6/12 px-4 mb-16 xl:mb-0'>
            <div className='relative'>
                <img src={image} alt="featured" className='w-full' />
            </div>
        </div>
    )
}

export default ContentLeft
