import React, { useState } from 'react'
import { FaEyeSlash, FaEye, FaGoogle } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const [togglePassword, setTogglePassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from || "/"

    const handleLogin = (e) => {
        e.preventDefault()
        login(email, password)
        navigate(from, { replace: true })
    }

    const handleShowHidePassword = (e) => {
        e.preventDefault()
        setTogglePassword(!togglePassword)
    }

    return (
        <div className='min-h-[82vh] max-w-4/12 mx-auto py-10 flex items-center justify-center'>
            <div className='bg-white shadow-[0_0_2px_rgba(0,0,0,0.3)] py-8 px-10 w-full'>
                <h1 className='text-2xl text-gray-800 font-medium  text-center font-sans'>Login to your Account</h1>
                <div className='mt-8 space-y-4'>
                    <form action="" className='space-y-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='text-gray-700 text-sm'>Email:</label>
                            <input type="email" placeholder='Email...' name='email' id='email'
                                className='bg-gray-100 px-3 py-2 font-sans text-sm border
                             border-orange-600 focus:shadow-[inset_0_0_4px_rgba(249,115,22,0.4)]
                              rounded outline-0'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="password" className='text-gray-700 text-sm'>Password:</label>
                            <div className='relative'>
                                <input type="password" placeholder='Password...' name='password'
                                    id='password' className='w-full bg-gray-100 px-3 py-2 font-sans 
                                text-sm border border-orange-600 focus:shadow-[inset_0_0_4px_rgba(249,115,22,0.4)] 
                                rounded outline-0'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <button className='absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-700 hover:text-gray-800 cursor-pointer'
                                    onClick={handleShowHidePassword}>
                                    {togglePassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <div className='flex gap-15 items-center justify-between text-sm'>
                            <div className='text-gray-700 font-sans flex items-center gap-1'>
                                <input type="checkbox" className='cursor-pointer' />
                                <span>Remember me</span>
                            </div>
                            <span className='text-blue-500 hover:text-blue-600 font-sans cursor-pointer transition-all duration-300 ease'>Forgot Password?</span>
                        </div>
                        <button className='bg-orange-600 hover:bg-orange-500 text-gray-100 
                        font-sans py-1 px-4 rounded cursor-pointer mt-2 w-full transition-all 
                        duration-300 ease'
                            onClick={handleLogin}
                        >
                            Log In
                        </button>
                    </form>
                    <div className='font-sans text-sm text-gray-700'>
                        <span>Don't have account? <NavLink to="/register"><span className='text-blue-500 hover:text-blue-600 font-sans cursor-pointer transition-all duration-300 ease'>Signup</span></NavLink></span>
                    </div>
                </div>
                <div className="flex items-center my-6">
                    <div className="grow border-t border-gray-400"></div>
                    <span className="mx-4 text-gray-700 text-sm font-medium uppercase">
                        Or
                    </span>
                    <div className="grow border-t border-gray-400"></div>
                </div>
                <div className='flex justify-center'>
                    <button className='flex items-center gap-2 font-sans text-sm px-3 py-1 rounded cursor-pointer
                    bg-orange-600 hover:bg-orange-500 text-gray-100 transition-all duration-300 ease'><FaGoogle />Log in with Goggle</button>
                </div>
            </div>
        </div>
    )
}

export default Login