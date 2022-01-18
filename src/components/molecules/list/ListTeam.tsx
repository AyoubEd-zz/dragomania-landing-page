import React from 'react'
import CardTeam from '../../atoms/card/CardTeam'
import anas from '../../utils/images/team/drago3.jpeg'
import alex from '../../utils/images/team/drago1.jpeg'
import ayoub from '../../utils/images/team/drago6.jpeg'
import emilien from '../../utils/images/team/drago2.jpeg'
import abdo from '../../utils/images/team/drago4.jpeg'
import gui from '../../utils/images/team/drago5.jpeg'

const ListAuction : React.FC = () => {
    return (
        <div className='flex flex-row flex-wrap'>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardTeam
                        author="anassxxx"
                        authorVerified={true}
                        title="CEO"
                        bidPrice={0.00234}
                        image={anas}
                        date="Anass is a graduate of the prestigious Sorbonne uni, finance major, chad gamer"
                        expired={1639152000}
                        link="https://www.linkedin.com/in/anass-fanaki-412440b2/"
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardTeam
                        author="alexyyy"
                        authorVerified={true}
                        title="CFO"
                        bidPrice={0.00234}
                        image={alex}
                        date="Alex also a graduated from Sorbonne uni, top of his class, pro investment banker"
                        expired={1639152000}
                        link=""
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardTeam
                        author="ayoubeddd"
                        authorVerified={true}
                        title="CTO"
                        bidPrice={0.00234}
                        image={ayoub}
                        date="Ayoub is a Georgia Tech MS student, crypto enthusiast, eng through and through"
                        expired={1639152000}
                        link=""
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardTeam
                        author="Emilien"
                        authorVerified={true}
                        title="Creative and Art Director"
                        bidPrice={0.00234}
                        image={emilien}
                        date="Former Lead Artist at Ankama(Dofus), Character design professor, artist at heart"
                        expired={1639152000}
                        link=""
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardTeam
                        author="Guillaume"
                        authorVerified={true}
                        title="Creative and Art Director"
                        bidPrice={0.00234}
                        image={gui}
                        date="Ayoub is a Georgia Tech MS student, crypto enthusiast, eng through and through"
                        expired={1639152000}
                        link=""
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardTeam
                        author="Abdelaziz"
                        authorVerified={true}
                        title="Sofware Engineer, AI Expert"
                        bidPrice={0.00234}
                        image={abdo}
                        date="Former Lead Artist at Ankama(Dofus), Character design professor, artist at heart"
                        expired={1639152000}
                        link=""
                    />
                </div>
        </div>
    )
}

export default ListAuction
