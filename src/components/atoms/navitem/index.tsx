import React from 'react'
import { INavItem } from '../../utils/types'

const NavItem : React.FC<INavItem> = (props) => {
    return (
        <li className='flex-grow lg:flex-grow-0 mr-0 lg:mr-7 my-3 lg:my-2'>
            <div className='text-white font-normal drop-shadow-2xl hover:text-pink duration-300' style={{textShadow: '0 0.5px 0 grey'}}>{props.text}</div>
        </li>
    )
}

export default NavItem
