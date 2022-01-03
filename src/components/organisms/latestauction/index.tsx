import React from 'react'
import ListAuction from '../../molecules/list/ListAuction'
import TitleSection from '../../molecules/TitleSection'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const LatestAuction : React.FC = () => {
    return (
        <div className='container mx-auto'>
            <TitleSection
                title='Six different clans'
                subtitle='Be First Bid'
                classes='text-center mb-10'
            />

            <Carousel showStatus={false}>
                <ListAuction />
                <ListAuction />
            </Carousel>
        </div>
    )
}

export default LatestAuction
