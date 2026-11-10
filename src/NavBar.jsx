import React from 'react'

const NavBar = () => {
    return (
        <header>
            <img src='/logo.svg' alt='Apple Logo'/>
                <ul>
                    {[
                        {label: 'Store'},
                        {label: 'Apple'},
                        {label: 'Mac'},
                        {label: 'Linux'},

                    ].map(({label})=>{
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>})
                    }
                </ul>
        </header>
    )
}
export default NavBar
