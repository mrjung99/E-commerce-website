import React from 'react'
import { NavLink } from "react-router-dom"

const TopBar = () => {
    return (
        <div className='flex gap-5 p-2'>
            <ul className='flex gap-3 text-[12px]'>
                <NavLink to="/about">
                    <li>About us</li>
                </NavLink>
                <li>My account</li>
                <li>Order Tracking</li>
            </ul>
        </div>
    )
}

export default TopBar