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
                <FiShoppingCart size={20} />
                {cartItem > 0 && (
                    <span className='absolute -top-3 -right-2 bg-orange-600 text-[10px] text-white rounded-full 
                        w-5 h-5 flex items-center justify-center'>
                        {cartItem}
                    </span>
                )}
            </NavLink>
        </div>
    )
}

export default CartIcon