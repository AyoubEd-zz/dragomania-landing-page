import React from 'react'
import CardTeam from '../../atoms/card/CardTeam'
import fire from '../../utils/images/nft/fire.gif'
import electricity from '../../utils/images/nft/electricity.gif'
import plant from '../../utils/images/nft/plant.gif'
import sound from '../../utils/images/nft/sound.gif'

const ListAuction : React.FC = () => {
    return (
        <div className='flex flex-row flex-wrap'>
                <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-3/12 p-3'>
                    <CardTeam
                        author="anassxxx"
                        authorVerified={true}
                        title="CEO"
                        bidPrice={0.00234}
                        image={electricity}
                        date="Anass is a graduate of the prestigious Sorbonne uni, finance major, chad gamer"
                        expired={1639152000}
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-3/12 p-3'>
                    <CardTeam
                        author="alexyyy"
                        authorVerified={true}
                        title="CFO"
                        bidPrice={0.00234}
                        image={fire}
                        date="Alex also a graduated from Sorbonne uni, top of his class, pro invetment banker"
                        expired={1639152000}
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-3/12 p-3'>
                    <CardTeam
                        author="ayoubeddd"
                        authorVerified={true}
                        title="CTO"
                        bidPrice={0.00234}
                        image={sound}
                        date="Ayoubed is a Georgia Tech MS student, crypto enthusiast, eng through and through"
                        expired={1639152000}
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-3/12 p-3'>
                    <CardTeam
                        author="Emilien"
                        authorVerified={true}
                        title="Creative and Art Director"
                        bidPrice={0.00234}
                        image={plant}
                        date="Former Lead Artist at Ankama(Dofus), Character design professor, artist at heart"
                        expired={1639152000}
                    />
                </div>
        </div>
    )
}

export default ListAuction
