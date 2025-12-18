import { createContext, useEffect, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState(() => {
        const getCartItemFromLocalStorage = localStorage.getItem("cart")
        return getCartItemFromLocalStorage ? JSON.parse(getCartItemFromLocalStorage) : []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItem))
    }, [cartItem])

    //add item to the cart
    const addToCart = (product, quantity) => {
        setCartItem(prevItem => {
            const checkExisting = cartItem.find(item => item.id === product.id)
            if (checkExisting) {
                return prevItem.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
            } else {
                return [...prevItem, {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity,
                    image: product.image
                }]
            }
        })
    }

    //remove item from cart
    const removeFromCart = (productId) => {
        setCartItem(prevItem => {
            return prevItem.filter(item => item.id !== productId)
        })
    }

    return <CartContext.Provider value={{ cartItem, addToCart, removeFromCart }}>{children}</CartContext.Provider>
}