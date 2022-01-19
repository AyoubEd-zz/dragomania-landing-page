import React from 'react'
import ButtonOutline from '../../atoms/control/ButtonOutline'
import { INavButton } from '../../utils/types'
import { BsInstagram, BsTwitter, BsDiscord, BsMedium } from 'react-icons/bs'

const NavButton : React.FC<INavButton> = ({ btnClick }) => {
    return (
        <div className='flex-grow-0 flex-shrink hidden xl:block'>
            <ul className='flex flex-row flex-wrap-reverse mt-2'>
                <li className='flex-grow-0 flex-shrink mr-2'>
                    <a className='text-pink w-10 h-10 my-1 rounded-lg hover:bg-white duration-300 block relative' href="https://discord.gg/cKPHh6rBej">
                        <i className='absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'><BsDiscord /></i>
                    </a>
                </li>

                <li className='flex-grow-0 flex-shrink mr-2'>
                    <a className='text-pink w-10 h-10 my-1 rounded-lg hover:bg-white duration-300 block relative' href="https://twitter.com/DragoManiaGame">
                        <i className='absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'><BsTwitter /></i>
                    </a>
                </li>

                <li className='flex-grow-0 flex-shrink mr-2'>
                    <a className='text-pink w-10 h-10 my-1 rounded-lg hover:bg-white duration-300 block relative' href="https://medium.com/@DragoManiaGame">
                        <i className='absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'><BsMedium /></i>
                    </a>
                </li>
                <ButtonOutline text='Connect Wallet'/>
            </ul>
        </div>
    )
}

export default NavButton
