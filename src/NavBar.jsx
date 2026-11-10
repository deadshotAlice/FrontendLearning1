import React from 'react'

const NavBar = () => {
    return (
        <header>
            <nav>
            <img src='/public/logo.svg' alt='Apple Logo'/>
                <ul>
                    {[
                        {label: 'Store'},
                        {label: 'Apple'},
                        {label: 'Mac'},
                        {label: 'Linux'},

                    ].map(({label})=>(
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>))
                    }
                </ul>
                <div class='button'>
                    <button><img src='/public/search.svg' alt='search'/></button>
                    <button><img src='/public/cart.svg' alt='cart'/></button>
                </div>
            </nav>

        </header>
    )
}
export default NavBar
