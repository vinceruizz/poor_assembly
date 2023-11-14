import React from 'react'
import { useState } from 'react';
import SidenavButton from './SidenavButton/SidenavButton';

function Sidenav() {
    const data = (
        <div className="sidenav">
            <SidenavButton isDropdown={false} display="Home"/>
            <SidenavButton isDropdown={true} display="Bookmarks"/>
        </div>
    )

    return data;
}

export default Sidenav