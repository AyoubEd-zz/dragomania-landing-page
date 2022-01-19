import React from 'react'
import NavItem from '../../atoms/navitem'
import { INavBrand } from '../../utils/types'

const NavBrand : React.FC<INavBrand> = ({isActive}) => {
    return (
        <div className='flex-grow-0 flex-shrink pr-4'>
            {/* <h2 className='text-gradient-primary text-4xl'>{props.title}</h2> */}
            <ul className={`flex flex-col lg:flex-row flex-nowrap justify-end absolute left-0 right-0 mt-5 lg:mt-0 mx-4 lg:mx-0 rounded-md lg:relative bg-navy-ascent lg:bg-color-none p-5 lg:p-0 ${isActive ? 'menu-toggle-active' : 'menu-toggle-nonactive'}`}>
                <NavItem
                    to='#'
                    text='Home'
                />

                <NavItem
                    to='#game'
                    text='Game'
                />

                <NavItem
                    to='#solana'
                    text='Solana'
                />

                <NavItem
                    to='#auction'
                    text='Dragos'
                />

                <NavItem
                    to='#earn'
                    text='Earn'
                />

                <NavItem
                    to='#story'
                    text='Story'
                />

                <NavItem
                    to='#roadmap'
                    text='Roadmap'
                />

                <NavItem
                    to='#team'
                    text='Team'
                />

                <NavItem
                    to='#faq'
                    text='FAQ'
                />

                <NavItem
                    to='#'
                    text='Whitepaper'
                />
            </ul>
        </div>
    )
}

export default NavBrand
