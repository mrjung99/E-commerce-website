import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";

const MessagePopup = ({ message }) => {
    const [toggleCross, setToggleCross] = useState(true)

    const toggleCrossbutton = (e) => {
        e.preventDefault()
        setToggleCross(!toggleCross)
    }
    return (
        toggleCross && (<div className=' fixed right-5 top-2 z-80 flex items-center gap-3 h-8 px-3 py-2 font-sans
         bg-orange-600 text-white text-lg shadow-lg animate-bounce-twice'>
            <p className='m-0'>{message}</p>
            <RxCross1 onClick={toggleCrossbutton} className='text-gray-800 cursor-pointer hover:text-gray-900' />
        </div>)

    )
}

export default MessagePopup