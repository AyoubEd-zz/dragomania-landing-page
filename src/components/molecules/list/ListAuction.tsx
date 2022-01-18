import React from 'react'
import CardAuction from '../../atoms/card/CardAuction'
import fire from '../../utils/images/nft/fire.gif'
import electricity from '../../utils/images/nft/electricity.gif'
import plant from '../../utils/images/nft/plant.gif'
import sound from '../../utils/images/nft/sound.gif'
import fireIcon from '../../utils/images/elements/fire.png'
import waterIcon from '../../utils/images/elements/water.png'
import steelIcon from '../../utils/images/elements/steel.png'
import windIcon from '../../utils/images/elements/wind.png'
import natureIcon from '../../utils/images/elements/nature.png'
import electricIcon from '../../utils/images/elements/electric.png'

const ListAuction : React.FC = () => {
    return (
        <div className='flex flex-row flex-wrap'>
                <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-3/12 p-3'>
                    <CardAuction
                        author="gachalifes"
                        authorVerified={true}
                        title="Electric"
                        bidPrice={0.00234}
                        image={electricity}
                        date="15 october 2021"
                        expired={1639152000}
                        icon={electricIcon}
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-3/12 p-3'>
                    <CardAuction
                        author="gachalifes"
                        authorVerified={true}
                        title="Fire"
                        bidPrice={0.00234}
                        image={fire}
                        date="15 october 2021"
                        expired={1639152000}
                        icon={fireIcon}
                    />
                </div>
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
        </div>
    )
}

export default ListAuction
