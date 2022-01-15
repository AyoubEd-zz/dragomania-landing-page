import React from 'react'
import ContentLeft from '../../molecules/concept/ContentLeft'
import ContentRight from '../../molecules/concept/ContentRight'

const Concept: React.FC = () => {
    return (
        <div className='container py-10 mx-auto flex flex-col flex-nowrap items-center'>
            <div className='container mx-auto flex flex-col xl:flex-row flex-nowrap items-center'>
                <ContentLeft />
                <ContentRight />
            </div>
        </div>
    )
}

export default Concept
