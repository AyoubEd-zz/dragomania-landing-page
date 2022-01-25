import React from 'react'
import CardTeam from '../../atoms/card/CardTeam'
import anas from '../../utils/images/team/drago1.jpg'
import alex from '../../utils/images/team/drago2.jpg'
import ayoub from '../../utils/images/team/drago3.jpg'
import gui from '../../utils/images/team/drago4.jpg'
import emilien from '../../utils/images/team/DragoJurassic.png'
import abdo from '../../utils/images/team/drago6.jpg'

const ListAuction : React.FC = () => {
    return (
        <div className='flex flex-row flex-wrap'>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardTeam
                        author="anassxxx"
                        authorVerified={true}
                        title="Founder, CEO"
                        bidPrice={0.00234}
                        image={anas}
                        date="Avid gamer. Finance Graduate Sorbonne Business School. Started his career in investment banking, and consulting. Anass is involved in all key decisions."
                        expired={1639152000}
                        link="https://www.linkedin.com/in/anass-fanaki-412440b2/"
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardTeam
                        author="alexyyy"
                        authorVerified={true}
                        title="Co-Founder, CFO"
                        bidPrice={0.00234}
                        image={alex}
                        date="Crypto enthusiast and graduated from the Sorbonne Business School. Previously worked in investment banking, Alex is the lead for operational projects including the launch of the NFT collection and the token."
                        expired={1639152000}
                        link=""
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardTeam
                        author="PtolemyXVI"
                        authorVerified={true}
                        title="Chief Technical Officer"
                        bidPrice={0.00234}
                        image={ayoub}
                        date="Software engineer at Google, MS Computer Science at Georgia Institute of Technology. Ayoub is involved in Web3 Development since 2017."
                        expired={1639152000}
                        link=""
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardTeam
                        author="Emilien"
                        authorVerified={true}
                        title="Creative & Art Director"
                        bidPrice={0.00234}
                        image={emilien}
                        date="Former Lead Artist and Character designer at Ankama, and other big Gaming companies. Over 10 years participating in the development of successful MMORPGs like Dofus, wakfu, and Raven. Emilien is an Arts and Character Design Professor at the prestigious French Gaming School Supinfogame-Rubika."
                        expired={1639152000}
                        link=""
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardTeam
                        author="Giho"
                        authorVerified={true}
                        title="Concept Artist & Game design"
                        bidPrice={0.00234}
                        image={gui}
                        date="Over ten years of experience at Ankama. Participated in the development of Dofus and Wakfu and other games. Combining his experiences at the game studio Ankama and his passion for NFT gaming."
                        expired={1639152000}
                        link=""
                    />
                </div>
                <div className='flex-grow-0 flex-shrink w-6/12 xl:w-2/12 p-3'>
                    <CardTeam
                        author="Anger"
                        authorVerified={true}
                        title="AI Expert"
                        bidPrice={0.00234}
                        image={abdo}
                        date="MS in Computer Science and PhD in Machine Learning. Anger has been involved in Blockchain space since 2017. Passionate about AI and Blockchain."
                        expired={1639152000}
                        link=""
                    />
                </div>
        </div>
    )
}

export default ListAuction
