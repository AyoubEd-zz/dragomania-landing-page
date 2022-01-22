import React from 'react'
import CardImage from '../../atoms/image/'
import TitleSection from '../../molecules/TitleSection'

import bloomberg_logo from '../../utils/images/companies/bloomberg_logo.png'
import bnpparibas from '../../utils/images/companies/bnp-white.png'
import CREDITAGRICOLECIB from '../../utils/images/companies/CREDITAGRICOLECIB.png'
import dofus from '../../utils/images/companies/dofus.png'
import EYlogo from '../../utils/images/companies/EY-logo.png'
import Google from '../../utils/images/companies/Google-logo.png'
import Natixis from '../../utils/images/companies/natixis.png'
import PricewaterhouseCoopers from '../../utils/images/companies/pwc.png'
import ankama from '../../utils/images/companies/ankama.png'
import Wakfu from '../../utils/images/companies/Wakfu_Logo.png'

const Companies : React.FC = () => {
    return (
        <div className='container mx-auto'>
            <TitleSection
                title='Our Team worked in these companies'
                subtitle=''
                classes='text-center mb-10  colorfull_text arrow_title'
            />

            <div className='flex flex-row flex-wrap  content-center'>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardImage image={bloomberg_logo}/>
                </div>
                
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardImage image={bnpparibas}/>
                </div>
                
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardImage image={Google}/>
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardImage image={CREDITAGRICOLECIB}/>
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardImage image={Natixis}/>
                </div>
            </div>
            
            <div className='flex flex-row flex-wrap  content-center'>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardImage image={dofus}/>
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardImage image={Wakfu}/>
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardImage image={PricewaterhouseCoopers}/>
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
