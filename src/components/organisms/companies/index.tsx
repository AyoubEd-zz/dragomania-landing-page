import React from 'react'
import CardImage from '../../atoms/image/'
import TitleSection from '../../molecules/TitleSection'

import dofus from '../../utils/images/companies/dofus.png'
import EYlogo from '../../utils/images/companies/ey_logo.png'
import Google from '../../utils/images/companies/Google-logo.png'
import PricewaterhouseCoopers from '../../utils/images/companies/pwc.png'
import ankama from '../../utils/images/companies/ankama_white.png'
import Wakfu from '../../utils/images/companies/Wakfu_Logo.png'

const Companies : React.FC = () => {
    return (
        <div className='container mx-auto'>
            <TitleSection
                title='Our Team worked in these companies'
                subtitle=''
                classes='text-center mb-10  colorfull_text arrow_title'
            />

            <div className='flex flex-row flex-wrap  content-center'  style={{paddingTop:"50px"}} >
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardImage image={Google}/>
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardImage image={PricewaterhouseCoopers}/>
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardImage image={dofus}/>
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardImage image={Wakfu}/>
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardImage image={EYlogo}/>
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardImage image={ankama}/>
                </div>
            </div>

        </div>
    )
}

export default Companies
