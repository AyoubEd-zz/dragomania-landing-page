import React from 'react'
import ListTeam from '../../molecules/list/ListTeam'
import TitleSection from '../../molecules/TitleSection'

const Team : React.FC = () => {
    return (
        <div className='container mx-auto'>
            <TitleSection
                title='Team'
                subtitle='the image of diversified talent'
                classes='text-center mb-10'
            />

            <ListTeam />
        </div>
    )
}

export default Team
