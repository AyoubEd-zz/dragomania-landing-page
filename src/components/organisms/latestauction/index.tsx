import React from 'react'
import ListAuction from '../../molecules/list/ListAuction'
import TitleSection from '../../molecules/TitleSection'

import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import "../../utils/styles/carousel.css"

const LatestAuction : React.FC = () => {
    return (
        <div className='container mx-auto' >
            <TitleSection
                title='GENESIS DARGOS'
                subtitle='Meet the antagonists'
                classes='text-center mb-10 colorfull_text arrow_title'
            />

            <ListAuction />

            <blockquote className="relative p-4 text-xl italic text-white quote" >
                <cite className="flex items-center" id="earn" style={{paddingTop: '100px'}}>
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
