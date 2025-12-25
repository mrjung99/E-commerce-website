
import CartIcon from "./CartIcon";
import { NavLink } from "react-router-dom";
import WishListButton from "./WishListButton";
import { useAuth } from "../../context/AuthContext";
import { FaRegUser } from "react-icons/fa";

const Right = () => {

    const { isAuthenticated, user, openLoginModel } = useAuth()
    console.log(user);
    const profile = "data:image/jpeg;base64,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"

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
                    <div className="flex items-center justify-center gap-1 font-sans p-2 -m-2 group relative">
                        <div className="flex flex-col text-center leading-3 ">
                            <span className="text-[11px] font-thin">Welcome</span>
                            <span className="text-[12px] font-medium text-orange-600">
                                {user?.name?.charAt(0).toUpperCase() || 'User'}
                                <span>{(user.name.split(' ')[0]).slice(1) + user.name[0].slice(1) || "user"}</span>
                            </span>
                        </div>

                        <div className="">
                            {
                                user.profile ? <img
                                    src={profile}
                                    alt={user?.name}
                                    className="w-8 h-8 rounded-full object-cover cursor-pointer"
                                /> : <FaRegUser size={25} className="text-gray-700 rounded-full border border-gay-700 p-0.5 cursor-pointer" />
                            }
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 invisible 
                        group-hover:opacity-100 group-hover:visible transition-opacity z-50 px-3 py-2 rounded 
                        whitespace-nowrap bg-white shadow-md">
                            <div className="flex flex-col rounded w-full text-left">
                                <p className="rounded text-left hover:bg-gray-100 w-full">logOut</p>
                                <p className="rounded w-full text-left">order</p>
                                <p className="rounded w-full text-left">profile</p>
                            </div>
                        </div>

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