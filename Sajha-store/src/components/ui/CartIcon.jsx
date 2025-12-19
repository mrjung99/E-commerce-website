import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

const CartIcon = () => {
    const { getTotalCartItem } = useCart()
    const cartItem = getTotalCartItem()
    return (
        <div className='relative'>
            <NavLink to="/cart">
                <FiShoppingCart size={22} className="text-gray-800" />
                {cartItem > 0 && (
                    <span className='absolute -top-2 -right-2 bg-orange-600 text-[9px] outline
                    outline-gray-50 text-white font-sans font-thin rounded-full w-4 h-4 flex 
                        items-center justify-center'>
                        {cartItem}
                    </span>
                )}
            </NavLink>
        </div>
    )
}

export default CartIcon