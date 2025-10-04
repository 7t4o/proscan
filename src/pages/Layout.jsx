import React from 'react'
import { Outlet, useLocation } from "react-router-dom";
import Nav from '../components/Nav';

function Layout() {
    const location = useLocation();

    const hiddenNavRoutes = ["/coach", "/details"];

    const hideNav = hiddenNavRoutes.includes(location.pathname);

    return (
        <div className='min-h-[812px] relative bg-[#EBFFF6]'>
            <Outlet />
            {!hideNav && <Nav />}
        </div>
    )
}

export default Layout;
