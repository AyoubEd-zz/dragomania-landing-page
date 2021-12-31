import React from 'react'
import ContentLeft from '../../molecules/story/ContentLeft'
import ContentRight from '../../molecules/story/ContentRight'

const Story : React.FC = () => {
    return (
        <div className='container mx-auto flex flex-col xl:flex-row flex-nowrap items-center'>
            <ContentLeft />
            <ContentRight />
        </div>
    )
}

export default Story
