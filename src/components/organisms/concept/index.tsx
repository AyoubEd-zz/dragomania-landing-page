import React from 'react'
import TitleSection from "../../molecules/TitleSection";
import ContentLeft from '../../molecules/concept/ContentLeft'
import ContentRight from '../../molecules/concept/ContentRight'

const Concept: React.FC = () => {
    return (
        <div className='container pb-10 mx-auto flex flex-col flex-nowrap items-center'>
            {/* <TitleSection title="How to Earn" subtitle="Concept" classes="mb-4" /> */}
            <br/>
            <br/>
            <div className='container mx-auto flex flex-col xl:flex-row flex-nowrap'>
                <ContentLeft />
                <ContentRight />
            </div>
        </div>
    )
}

export default Concept
