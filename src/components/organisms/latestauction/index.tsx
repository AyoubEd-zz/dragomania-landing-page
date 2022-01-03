import React from 'react'
import ListAuction from '../../molecules/list/ListAuction'
import ListAuctionTwo from '../../molecules/list/ListAuction2'
import TitleSection from '../../molecules/TitleSection'

import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../../utils/styles/carousel.css"

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
                <ListAuctionTwo />
            </Carousel>
        </div>
    )
}

export default LatestAuction
