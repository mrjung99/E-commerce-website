import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import CartIcon from "./CartIcon";
import { NavLink } from "react-router-dom";

const Right = () => {
    return (
        <div className='flex items-center justify-center gap-5'>
            <span className='flex gap-1 items-center justify-center cursor-pointer'>
                <CartIcon /><span className='text-[11px]'></span>
            </span>
            <NavLink to="/wishlist">
                <span className='flex gap-1 items-center justify-center cursor-pointer'>
                    <FaRegHeart size={21} className="text-gray-800" /><span className='text-[11px]'></span>
                </span>
            </NavLink>
            <span className='flex gap-1 items-center justify-center cursor-pointer'>
                <VscAccount size={21} className="text-gray-800" /><span className='text-[11px]'></span>
            </span>
        </div>
    )
}

export default Right