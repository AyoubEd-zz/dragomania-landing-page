import React from 'react'
import { INavItem } from '../../utils/types'

const NavItem : React.FC<INavItem> = (props) => {
    return (
        <li className='flex-grow lg:flex-grow-0 mr-0 lg:mr-7 my-3 lg:my-2 hover-underline-animation'>
            <div className='text-pink font-bold hover:text-pink duration-300 py-1 px-2'>{props.text}</div>
        </li>
    )
}

export default NavItem
