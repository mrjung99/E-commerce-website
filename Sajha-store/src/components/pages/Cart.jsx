// components/pages/CartPage.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiPlus, FiMinus, FiArrowLeft, FiShoppingCart } from 'react-icons/fi';
import { MdDelete } from "react-icons/md";
import { useCart } from '../../context/CartContext';

const Cart = () => {
    const {
        cartItem,
        removeFromCart,
        updateQuantity,
        getTotalCartPrice,
        clearCart
    } = useCart();

    const totalPrice = getTotalCartPrice().toFixed(2);
    const shipping = 0; // Free shipping
    const tax = (totalPrice * 0.13).toFixed(2); // 13% tax
    const grandTotal = (parseFloat(totalPrice) + parseFloat(tax) + shipping).toFixed(2);

    if (cartItem.length === 0) {
        return (
            <div className="min-h-[85vh] flex flex-col items-center justify-center p-4">
                <FiShoppingCart className="text-8xl text-gray-300 mb-6" />
                <h1 className="text-xl font-bold text-gray-700 mb-4">Your cart is empty</h1>
                <p className="text-gray-500 mb-8 text-sm text-center max-w-md">
                    Looks like you haven't added any products to your cart yet.
                </p>
                <NavLink
                    to="/product"
                    className="px-8 py-3 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 flex items-center gap-2"
                >
                    <FiArrowLeft />
                    Start Shopping
                </NavLink>
            </div>
        );
    }

    return (
        <div className='min-h-screen w-11/12 mx-auto '>
            <div className='container max-w6xl mx-auto'>
                <div className='mt-4'>
                    <h1 className='text-2xl text-gray-800 '>Your Shopping Cart</h1>
                    <p className='text-[15px] text-gray-700 leading-7 font-sans font-light'>You have <span className='text-orange-500 font-medium'>
                        {cartItem.length}</span> Item{cartItem.length > 1 ? "'s" : ""} in your cart</p>
                </div>
                <div className='py-3 flex gap-8'>
                    <div className='lg:w-2/3 '>
                        <div className='rounded-lg shadow'>
                            <div className='p-3 border-b border-gray-400 text-[15px] text-gray-800 bg-gray-100'>
                                <div className='grid grid-cols-12 gap-4 font-sans'>
                                    <div className='col-span-5 '>Product</div>
                                    <div className='col-span-2 text-center'>Quantity</div>
                                    <div className='col-span-2 text-center'>Price</div>
                                    <div className='col-span-2 text-center'>Total</div>
                                </div>
                            </div>

                            <div className='divide-y divide-gray-300'>
                                {
                                    cartItem.map(item => (
                                        <div key={item.id} className='grid grid-cols-12'>
                                            <div className='col-span-5 flex items-center gap-4 p-2'>
                                                <img src={item.image} alt={item.name} className='w-10 h-10 rounded-lg object-cover' />
                                                <p className='text-[14px] font-sans font-light text-gray-900'>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
                                            </div>

                                            <div className='col-span-2 flex items-center justify-center gap-3'>
                                                <button className={`cursor-pointer ${item.quantity === 1 ? "bg-gray-100" : "bg-gray-200"}`}
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    disabled={item.quantity === 1}
                                                >
                                                    <FiMinus />
                                                </button>
                                                <span className='text-[13px] text-gray-800 font-sans font-light'>{item.quantity}</span>
                                                <button className='cursor-pointer bg-gray-200'
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    <FiPlus />
                                                </button>
                                            </div>

                                            <div className='col-span-2 flex items-center justify-center gap-3'>
                                                <p className='text-[14px]  font-sans font-light'>Rs. {item.price}</p>
                                            </div>

                                            <div className='col-span-2 flex items-center justify-center gap-3'>
                                                <p className='text-[14px] text-gray-800 font-sans font-light'>Rs. {item.price * item.quantity}</p>
                                            </div>

                                            <div className='col-span-1 flex items-center justify-center gap-3 text-red-600 '>
                                                <MdDelete size={20} className='hover:text-red-700 cursor-pointer' onClick={() => removeFromCart(item.id)} />
                                            </div>
                                        </div>)
                                    )
                                }
                            </div>
                            <div className='flex justify-between items-center p-4 mt-10'>
                                <NavLink to="/product">
                                    <p className='flex gap-1.5 items-center text-blue-500 
                                hover:text-blue-800 cursor-pointer transition-all duration-300 font-sans'>
                                        <FiArrowLeft /> Continue Shopping
                                    </p>
                                </NavLink>
                                <button className='border border-red-500 rounded text-red-500 text-sm
                                hover:bg-red-50 cursor-pointer px-3 py-1 transition-all duration-300 font-sans'
                                    onClick={() => clearCart()}
                                >
                                    Clear Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/3'>
                        <div className='shadow p-8 sticky top-20'>
                            <h2 className='text-2xl mb-6 text-gray-800'>Order Summary</h2>
                            <div className='space-y-3 font-sans font-light'>
                                <div className='flex justify-between'>
                                    <span className='text-gray-900'>Subtotal</span>
                                    <span className='text-gray-900'>Rs. {totalPrice}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-gray-900'>Shipping</span>
                                    <span className='text-green-600'>{shipping === 0 ? "FREE" : `Rs. ${shipping}`}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-gray-900'>Tax (13%)</span>
                                    <span className='text-gray-900'>Rs. {tax}</span>
                                </div>
                            </div>
                            <div className='border-t border-gray-500 my-6 font-sans font-light'>
                                <div className='flex justify-between pt-3'>
                                    <span className='text-gray-900 text-lg'>Grand Total</span>
                                    <span className=''><span className='text-orange-600 font-medium'>Rs. {grandTotal}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cart;