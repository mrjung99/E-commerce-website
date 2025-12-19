import React from 'react'
import { NavLink } from "react-router-dom"

const TopBar = () => {
    return (
        <div className='flex gap-5 py-2 w-11/12 mx-auto font-sans'>
            <ul className='flex gap-3 text-[12px] text-gray-600'>
                <NavLink to="/about">
                    <li className='cursor-pointer hover:text-blue-400'>About us</li>
                </NavLink>
                <li className='cursor-pointer hover:text-blue-400'>My account</li>
                <li className='cursor-pointer hover:text-blue-400'>Order Tracking</li>
            </ul>
        </div>
    )
}

export default TopBar