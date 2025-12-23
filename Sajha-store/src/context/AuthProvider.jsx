
import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const savedUser = localStorage.getItem("user-data")
                const savedToken = localStorage.getItem("user-token")

                if (savedToken && savedUser) {
                    setuser(JSON.parse(savedUser))
                }
            } catch (error) {
                console.error("Auth error", error);
            } finally {
                setLoading(false)
            }
        }
        checkAuth()
    }, [])

    const login = async (email, password) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 500))

            const users = JSON.parse(localStorage.getItem("users-data")) || []
            if (users.length === 0) {
                const newuser = {
                    email: "demo@gmail.com",
                    password: "demo123",
                    name: "demo user",
                    phone: "9879792742",
                    address: "demo address",
                    role: "user",
                    createdAt: new Date().toISOString(),
                    cart: [],
                    wishlist: [],
                    orders: []
                }

                users.push(newuser)
                localStorage.setItem("users-data", JSON.stringify(users))
            }

            const founduser = users.find(user => user.email === email)

            if (!founduser) {
                return { success: false, message: "User not found" }
            }

            if (!founduser.password !== password) {
                return { success: false, message: "Invalid password" }
            }

            const { password: _, ...userWithoutPassword } = users;
            const token = `mock_jwt_${new Date()}_${founduser.id}`

            setuser(userWithoutPassword)
            localStorage.setItem("user-data", JSON.stringify(userWithoutPassword))
            localStorage.setItem("user-token", token)

            return { success: true, user: userWithoutPassword }
        } catch (error) {
            console.log(error);
            return { success: false, message: "Invalid login" }
        }
    }


    const register = async (userData) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 500))

            const users = JSON.parse(localStorage.getItem("users-data")) || []
            const existUser = users.find(user => user.email === userData.email)

            if (existUser) {
                return { success: false, message: "Email already exists, try again!!" }
            }

            const newUser = {
                id: users.length + 1,
                ...userData,
                createdAt: new Date().toISOString(),
                cart: [],
                wishlist: [],
                orders: []
            }
            users.push(newUser)
            const { password: _, ...userWithoutPass } = users
            const token = `mock_jwt${new Date()}_${userData.id}`
            localStorage.setItem("user-data", JSON.stringify(userWithoutPass))
            localStorage.setItem("user-token", token)

            return { success: true, user: userWithoutPass, message: "Registration successful" }
        } catch (error) {
            console.log(error);
            return { success: false, message: "Registration fail" }
        }
    }

    const logout = () => {
        setuser(null)
        localStorage.removeItem("user-data")
        localStorage.removeItem("user-token")
        navigate("/")
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider