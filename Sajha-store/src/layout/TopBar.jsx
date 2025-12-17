import React from 'react'
import { NavLink } from "react-router-dom"

const TopBar = () => {
    return (
        <div className='flex gap-5 py-2 px-3'>
            <ul className='flex gap-3 text-[10px] text-gray-600'>
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