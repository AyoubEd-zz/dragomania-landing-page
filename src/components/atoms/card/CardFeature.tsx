import React from 'react'
import { ICardFeature } from '../../utils/types'

const CardFeature : React.FC<ICardFeature> = ({ icon, title }) => {
    return (
        <div className='relative bg-navy-ascent p-3 rounded-lg text-center border_cyan' style={{height: '100%'}}>
            {/* <img src={icon} alt="feature" className=' w-14 mx-auto' /> */}
            <h6 className='text-lg text-white mt-1 break-words' style={{fontWeight: 'bold'}}>{icon}</h6>
            <h6 className='text-3xl text-pink mt-4 break-words' style={{bottom: 0, fontSize: '27px'}}>{title}</h6>
        </div>
    )
}

export default CardFeature
