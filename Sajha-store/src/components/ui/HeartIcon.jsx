import React from 'react'
import { FiHeart } from "react-icons/fi";
import { useWishList } from '../../context/WishListContext';

const HeartIcon = ({ item }) => {
    const { toggleWishList, isInWishList } = useWishList()
    const isInList = isInWishList(item.id)

    const handleHeartClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        console.log("Clicked heart");

        toggleWishList(item)
    }

    return (
        <div>
            <button className={`${isInList ? "text-red-500 hover:text-gray-300" : "text-gray-300 hover:text-red-500"}`} title={isInList ? "Remove from wishlist" : "Add to wishlist"}>
                <FiHeart size={25} className='fill-current cursor-pointer' onClick={handleHeartClick} />
            </button>
        </div>
    )
}

export default HeartIcon