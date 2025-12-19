import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

// const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState(() => {
        const savedCart = localStorage.getItem("cart")
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItem))
    }, [cartItem])

    //!add item to the cart
    const addToCart = (product, quantity) => {
        setCartItem(prevItem => {
            const checkExisting = prevItem.find(item => item.id === product.id)
            if (checkExisting) {
                return prevItem.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
            } else {
                return [...prevItem, {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity,
                    image: product.photo
                }]
            }
        })
    }

    //!remove item from cart
    const removeFromCart = (productId) => {
        setCartItem(prevItem => {
            return prevItem.filter(item => item.id !== productId)
        })
    }

    //!check if the item existing in cart
    const isInCart = (productId) => {
        return cartItem.some(item => item.id === productId)
    }

    // clear cart
    const clearCart = () => {
        setCartItem([])
    }

    //! update quantity
    const updateQuantity = (productId, newQuantity) => {
        // if new quantity is less than 1 then remove the item from cart
        if (newQuantity < 1) {
            removeFromCart(productId)
            return
        }

        // if not replace the previous quantity with new quantity without affecting other property
        setCartItem(prevItem =>
            prevItem.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        )
    }

    //!get total price of all the product
    const getTotalCartPrice = () => {
        return cartItem.reduce((total, item) => total + (item.quantity * item.price), 0)
    }

    // get total item from cart
    const getTotalCartItem = () => {
        return cartItem.reduce((total, item) => total + item.quantity, 0)
    }
    return (
        <CartContext.Provider
            value={{
                cartItem,
                addToCart,
                removeFromCart,
                getTotalCartItem,
                getTotalCartPrice,
                updateQuantity,
                isInCart,
                clearCart
            }}>
            {children}
        </CartContext.Provider>
    )
}

