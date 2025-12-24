
import CartIcon from "./CartIcon";
import { NavLink } from "react-router-dom";
import WishListButton from "./WishListButton";
import { useAuth } from "../../context/AuthContext";

const Right = () => {

    const { isAuthenticated, user, openLoginModel } = useAuth()

    return (
        <div className='flex items-center justify-center gap-5'>
            <span className='flex gap-1 items-center justify-center cursor-pointer text-gray-700'>
                <NavLink to="/cart">
                    <CartIcon />
                </NavLink>
            </span>
            <NavLink to="/wishlist">
                <span className='flex gap-1 items-center justify-center cursor-pointer'>
                    <WishListButton />
                </span>
            </NavLink>
            {
                isAuthenticated ? (
                    <div>
                        <span>Welcome</span>
                        <span>{user.name.charAt(0).toUpperCase() || "User"}</span>
                        <span>{user.name.split(' ')[0]}</span>
                    </div>
                ) : (
                    <span className='flex gap-3 items-center justify-center cursor-pointer font-sans'>
                        <NavLink to="/login">
                            <span className="text-[14px] cursor-pointer hover:text-orange-600" onClick={openLoginModel}>Login</span>
                        </NavLink>
                        <NavLink to="/register">
                            <span className="text-[14px] cursor-pointer hover:text-orange-600">Register</span>
                        </NavLink>
                    </span>
                )
            }

        </div>
    )
}

export default Right