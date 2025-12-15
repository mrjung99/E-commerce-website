import React from 'react'
import TopBar from './TopBar'
import SearchBar from './SearchBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
    return (
        <div>

            <TopBar />
            <SearchBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout