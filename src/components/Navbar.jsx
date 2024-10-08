import { react, useState } from 'react'

import { close, logo, menu } from '../assets';
import { navlinks } from '../constants'

const Navbar = () => {
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={logo} alt="hoobank" className='w-[124px] h-[32px]' />
        </nav>
        // <div>Navbar</div>
    )
}

export default Navbar