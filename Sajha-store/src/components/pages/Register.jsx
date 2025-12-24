import React, { useState } from 'react'
import { FaEyeSlash, FaEye, FaGoogle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Register = () => {
    const [togglePassword, setTogglePassword] = useState(false)

    const handleShowHidePassword = (e) => {
        e.preventDefault()
        setTogglePassword(!togglePassword)
    }

    return (
        <div className='px-4 py-2 md:px-6 md:py-4'>
            <div className='bg-white shadow-[0_0_1px_rgba(0,0,0,0.5)] w-full max-w-6xl mx-auto mb-8 px-4 md:px-8 py-4 md:py-6 rounded'>
                <h1 className='text-xl md:text-2xl text-gray-800 mb-4 text-center md:text-left'>Create your Account</h1>

                <form className='flex flex-col space-y-3'>
                    {/* Main form grid with equal columns */}
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8'>

                        {/* Personal Information - Equal width */}
                        <div className='lg:col-span-5 space-y-2 md:space-y-3'>
                            <h2 className='text-orange-500 text-sm md:text-lg font-medium'>Personal Information</h2>

                            {/* First & Last Name */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className='flex flex-col'>
                                    <label htmlFor="firstname" className='font-sans text-sm text-gray-800 mb-1'>First Name:</label>
                                    <input type="text" name='firstname' id='firstname' placeholder='First name'
                                        className='px-3 py-2.5 font-sans text-sm border border-gray-400 rounded outline-0 
                                        focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all duration-200' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="lastname" className='font-sans text-sm text-gray-800 mb-1'>Last Name:</label>
                                    <input type="text" name='lastname' id='lastname' placeholder='Last name'
                                        className='px-3 py-2.5 font-sans text-sm border border-gray-400 rounded outline-0 
                                        focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all duration-200' />
                                </div>
                            </div>

                            {/* Email */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                                <div className='flex flex-col'>
                                    <label htmlFor="email" className='font-sans text-sm text-gray-800 mb-1'>Email:</label>
                                    <input type="email" name='email' id='email' placeholder='Email address'
                                        className='px-3 py-2.5 font-sans text-sm border border-gray-400 rounded outline-0 
                                    focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all duration-200' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="phone" className='font-sans text-sm text-gray-800 mb-1'>Phone:</label>
                                    <input type="phone" name='phone' id='phone' placeholder='Phone'
                                        className='px-3 py-2.5 font-sans text-sm border border-gray-400 rounded outline-0 
                                    focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all duration-200' />
                                </div>
                            </div>

                            {/* Password Fields */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className='flex flex-col'>
                                    <label htmlFor="password" className='font-sans text-gray-800 text-sm mb-1'>Password:</label>
                                    <div className='relative'>
                                        <input type={togglePassword ? "text" : "password"}
                                            placeholder='Password'
                                            name='password'
                                            id='password'
                                            className='w-full px-3 py-2.5 font-sans text-sm border border-gray-400 rounded outline-0 
                                            focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all duration-200 pr-10' />
                                        <button
                                            type='button'
                                            onClick={handleShowHidePassword}
                                            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 
                                            focus:outline-none'
                                            aria-label={togglePassword ? "Hide password" : "Show password"}>
                                            {togglePassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <label htmlFor="repassword" className='font-sans text-gray-800 text-sm mb-1'>Confirm Password:</label>
                                    <div className='relative'>
                                        <input type={togglePassword ? "text" : "password"}
                                            placeholder='Confirm password'
                                            name='repassword'
                                            id='repassword'
                                            className='w-full px-3 py-2.5 font-sans text-sm border border-gray-400 rounded outline-0 
                                            focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all duration-200 pr-10' />
                                        <button
                                            type='button'
                                            onClick={handleShowHidePassword}
                                            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 
                                            focus:outline-none'
                                            aria-label={togglePassword ? "Hide password" : "Show password"}>
                                            {togglePassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Vertical Divider - Hidden on mobile, shown on large screens */}
                        <div className='hidden lg:block lg:col-span-1 relative'>
                            <div className='absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300'></div>
                        </div>

                        {/* Shipping Information - Equal width */}
                        <div className='lg:col-span-5 space-y-2 md:space-y-3    '>
                            <h2 className='text-orange-500 text-sm md:text-lg font-medium'>Shipping Information</h2>

                            {/* Country, State, City */}
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                <div className='flex flex-col'>
                                    <label htmlFor="country" className='font-sans text-sm text-gray-800 mb-1'>Country:</label>
                                    <input type="text" name='country' id='country' placeholder='Country'
                                        className='px-3 py-2.5 font-sans text-sm border border-gray-400 rounded outline-0 
                                        focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all duration-200' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="state" className='font-sans text-sm text-gray-800 mb-1'>State:</label>
                                    <input type="text" name='state' id='state' placeholder='State/Province'
                                        className='px-3 py-2.5 font-sans text-sm border border-gray-400 rounded outline-0 
                                        focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all duration-200' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="zipcode" className='font-sans text-sm text-gray-800 mb-1'>Zip Code:</label>
                                    <input type="text" name='zipcode' id='zipcode' placeholder='Zip/Postal code'
                                        className='px-3 py-2.5 font-sans text-sm border border-gray-400 rounded outline-0 
                                        focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all duration-200' />
                                </div>
                            </div>

                            {/* Zip Code & Street */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className='flex flex-col'>
                                    <label htmlFor="city" className='font-sans text-sm text-gray-800 mb-1'>City:</label>
                                    <input type="text" name='city' id='city' placeholder='City'
                                        className='px-3 py-2.5 font-sans text-sm border border-gray-400 rounded outline-0 
                                        focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all duration-200' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="street" className='font-sans text-sm text-gray-800 mb-1'>Street Address:</label>
                                    <input type="text" name='street' id='street' placeholder='Street address'
                                        className='px-3 py-2.5 font-sans text-sm border border-gray-400 rounded outline-0 
                                        focus:border-orange-500 focus:ring-1 focus:ring-orange-200 transition-all duration-200' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Terms & Conditions */}
                    <div className='flex items-center mt-2'>
                        <input type="checkbox" name='terms' id="terms" className='h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded cursor-pointer' />
                        <label htmlFor="terms" className='ml-2 text-sm font-sans text-gray-700'>
                            I agree to all the <span className='text-orange-600 hover:text-orange-700'>Terms & Conditions</span>
                        </label>
                    </div>

                    {/* Register Button */}
                    <div className='text-center pt-4'>
                        <button
                            type='submit'
                            className='w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded 
                            transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 
                        focus:ring-orange-500 focus:ring-offset-2 cursor-pointer'>
                            Create Account
                        </button>
                    </div>
                </form>

                {/* Login Link */}
                <div className='mt-6 text-center'>
                    <span className='font-sans text-sm text-gray-700'>
                        Already have an account?{' '}
                        <NavLink to="/login" className='text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300'>
                            Login here
                        </NavLink>
                    </span>
                </div>

                {/* Divider */}
                <div className="flex items-center my-8">
                    <div className="grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500 text-sm font-medium">Or</span>
                    <div className="grow border-t border-gray-300"></div>
                </div>

                {/* Google Signup */}
                <div className='flex justify-center'>
                    <button
                        type='button'
                        className='flex items-center justify-center gap-3 font-sans text-sm px-6 py-3 rounded cursor-pointer
                        bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 transition-all duration-300 ease 
                        shadow-sm hover:shadow w-full md:w-auto'>
                        <FaGoogle className='text-red-500' />
                        Sign up with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register