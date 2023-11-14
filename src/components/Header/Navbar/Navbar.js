import React from 'react'

function Navbar() {
    const data = (
        <div className="navbar">
            <input type="text" placeholder="Search.."></input>
            <a>Log in</a>
            <a>Sign up</a>
        </div>
    )

    return data;
}

export default Navbar