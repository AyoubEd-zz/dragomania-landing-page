import React from 'react'
import ContentLeft from '../../molecules/collection/ContentLeft'
import ContentRight from '../../molecules/collection/ContentRight'

const Collection = () => {
    return (
        <div className='container mx-auto flex flex-col xl:flex-row flex-nowrap items-center'>
            <ContentLeft />
            <ContentRight />
        </div>
    )
}

export default Collection
