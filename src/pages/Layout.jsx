import React from 'react'
import { Outlet } from "react-router-dom";
import Nav from '../components/Nav';


function Layout() {
    return (
        <div className='min-h-screen relative bg-[#EBFFF6]'>
            <Outlet />

            <Nav />
        </div>
    )
}

export default Layout