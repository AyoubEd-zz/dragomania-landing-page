import React from 'react'
import CardAuction from '../../atoms/card/CardAuction'
import fire from '../../utils/images/nft/fire.gif'
import electricity from '../../utils/images/nft/electricity.gif'
import plant from '../../utils/images/nft/plant.gif'
import sound from '../../utils/images/nft/sound.gif'

const ListAuction : React.FC = () => {
    return (
        <div className='flex flex-row flex-wrap'>
                <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-3/12 p-3'>
                    <CardAuction
                        author="gachalifes"
                        authorVerified={true}
                        title="Abstract of life"
                        bidPrice={0.00234}
                        image={electricity}
                        date="15 october 2021"
                        expired={1639152000}
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-3/12 p-3'>
                    <CardAuction
                        author="gachalifes"
                        authorVerified={true}
                        title="Abstract of life"
                        bidPrice={0.00234}
                        image={fire}
                        date="15 october 2021"
                        expired={1639152000}
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-3/12 p-3'>
                    <CardAuction
                        author="gachalifes"
                        authorVerified={true}
                        title="Abstract of life"
                        bidPrice={0.00234}
                        image={sound}
                        date="15 october 2021"
                        expired={1639152000}
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-3/12 p-3'>
                    <CardAuction
                        author="gachalifes"
                        authorVerified={true}
                        title="Abstract of life"
                        bidPrice={0.00234}
                        image={plant}
                        date="15 october 2021"
                        expired={1639152000}
                    />
                </div>
        </div>
    )
}

export default ListAuction
