import React from 'react'
import CardAuction from '../../atoms/card/CardAuction'
import plant from '../../utils/images/nft/plant.gif'
import sound from '../../utils/images/nft/sound.gif'
import water from '../../utils/images/nft/water.gif'
import steel from '../../utils/images/nft/steel.gif'
import waterIcon from '../../utils/images/elements/water.png'
import steelIcon from '../../utils/images/elements/steel.png'
import windIcon from '../../utils/images/elements/wind.png'
import natureIcon from '../../utils/images/elements/nature.png'

const ListAuctionTwo : React.FC = () => {
    return (
        <div className='flex flex-row flex-wrap'>
                <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-3/12 p-3'>
                    <CardAuction
                        author="gachalifes"
                        authorVerified={true}
                        title="Wind"
                        bidPrice={0.00234}
                        image={sound}
                        date="15 october 2021"
                        expired={1639152000}
                        icon={windIcon}
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-3/12 p-3'>
                    <CardAuction
                        author="gachalifes"
                        authorVerified={true}
                        title="Plant"
                        bidPrice={0.00234}
                        image={plant}
                        date="15 october 2021"
                        expired={1639152000}
                        icon={natureIcon}
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-3/12 p-3'>
                    <CardAuction
                        author="gachalifes"
                        authorVerified={true}
                        title="Water"
                        bidPrice={0.00234}
                        image={water}
                        date="15 october 2021"
                        expired={1639152000}
                        icon={waterIcon}
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-3/12 p-3'>
                    <CardAuction
                        author="gachalifes"
                        authorVerified={true}
                        title="Metal"
                        bidPrice={0.00234}
                        image={steel}
                        date="15 october 2021"
                        expired={1639152000}
                        icon={steelIcon}
                    />
                </div>
        </div>
    )
}

export default ListAuctionTwo