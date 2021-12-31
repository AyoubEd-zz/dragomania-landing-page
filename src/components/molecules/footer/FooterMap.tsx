import React from 'react'
import image from '../../utils/images/dragon-map.jpg'

const FooterMap = () => {
    return (
        <div>
            <img className='w-full h-40 rounded-lg' src={image} loading="lazy"/>
        </div>
    )
}

export default FooterMap
