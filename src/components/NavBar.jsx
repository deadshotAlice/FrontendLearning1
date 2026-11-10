// import React from 'react'

import {NavLinks} from '../constants/index.js';
const NavBar = () => {
    return (
        <header>
            <nav>
            <img src='/logo.svg' alt='Apple Logo'/>
                <ul>
                    {NavLinks.map(({label})=>(
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>))
                    }
                </ul>
                <div className='button'>
                    <button><img src='/search.svg' alt='search'/></button>
                    <button><img src='/cart.svg' alt='cart'/></button>
                </div>
            </nav>

        </header>
    )
}
export default NavBar
