import React from 'react'
import Navbar from './Navbar'
import logo from '../resources/logo.png'

function Header() {
    const data = (
        <header>
           <img className='logo' src={logo} alt="logo"></img>
           <Navbar />
        </header>
    )

    return data;
}

export default Header