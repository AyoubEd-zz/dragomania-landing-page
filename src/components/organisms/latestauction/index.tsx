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
                title='The Dragos'
                subtitle='Meet the antagonists'
                classes='text-center mb-10'
            />

            <Carousel showStatus={false} showArrows={true} className='mx-8'>
                <ListAuction />
                <ListAuctionTwo />
            </Carousel>

            <blockquote className="relative p-4 text-xl italic text-white quote">
                {/* <div className="stylistic-quote-mark" aria-hidden="true">
                    &ldquo;
                </div> */}
                <cite className="flex items-center">
                    <p className="mb-4 text-center">
                        Dragos are little fierce dragons living on the Solana Blockchain. There are different classes of Dragos that players can collect with varying body parts and appearances. Some rarer than others. Body parts will unlock abilities that vary across games.
                        <br/>
                        <br/>
                        Build up a collection to battle, breed, collect, raise and build kingdoms for your Dragos!
                    </p>
                </cite>
            </blockquote>
        </div>
    )
}

export default LatestAuction
