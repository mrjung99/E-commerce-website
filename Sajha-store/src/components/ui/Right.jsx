
import CartIcon from "./CartIcon";
import { NavLink } from "react-router-dom";
import WishListButton from "./WishListButton";

const Right = () => {
    return (
        <div className='flex items-center justify-center gap-5'>
            <span className='flex gap-1 items-center justify-center cursor-pointer text-gray-700'>
                <CartIcon /><span className='text-[11px]'></span>
            </span>
            <NavLink to="/wishlist">
                <span className='flex gap-1 items-center justify-center cursor-pointer'>
                    <WishListButton />
                </span>
            </NavLink>
            <span className='flex gap-3 items-center justify-center cursor-pointer font-sans'>
                <NavLink to="/login">
                    <span className="text-[14px] cursor-pointer hover:text-orange-600">Login</span>
                </NavLink>

                <NavLink to="/register">
                    <span className="text-[14px] cursor-pointer hover:text-orange-600">Register</span>
                </NavLink>
            </span>
        </div>
    )
}

export default Right