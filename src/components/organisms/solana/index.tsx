import React from 'react'
import ContentLeft from '../../molecules/solana/ContentLeft'
import ContentRight from '../../molecules/solana/ContentRight'
import image from '../../utils/images/powered-by-solana.png'

const Solana: React.FC = () => {
    return (
        <div className='container py-10 mx-auto flex flex-col flex-nowrap items-center'>
            <img src={image} alt="drago solana" className="w-80" />
            <div className='container mx-auto flex flex-col xl:flex-row flex-nowrap items-center'>
                <ContentLeft />
                <ContentRight />
            </div>
        </div>
    )
}

export default Solana
