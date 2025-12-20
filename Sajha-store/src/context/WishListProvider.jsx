import { useEffect, useState } from "react"
import { WishListContext } from "./WishListContext"

export const WishListProvider = ({ children }) => {

    const [wishList, setWishList] = useState(() => {
        const saved = localStorage.getItem("wishList")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("wishList", JSON.stringify(wishList))
    }, [wishList])

    const isInWishList = (productId) => {
        return wishList.some(item => item.id === productId)
    }

    const addToWishList = (product) => {
        setWishList(prev => {
            const exists = isInWishList(product.id)
            if (exists) {
                return prev
            }

            return [...prev, {
                id: product.id,
                name: product.name,
                photo: product.photo,
                price: product.price,
                brand: product.brand,
                category: product.category
            }]
        })
    }

    const totalWishListItem = () => {
        return wishList.length
    }

    const removeFromWishList = (productId) => {
        setWishList(prev => prev.filter(item => item.id !== productId))
    }

    const toggleWishList = (product) => {
        if (isInWishList(product.id)) {
            removeFromWishList(product.id)
        } else {
            addToWishList(product)
        }
    }

    const clearWishList = () => {
        setWishList([])
    }

    return (
        <WishListContext.Provider
            value={{
                wishList,
                addToWishList,
                removeFromWishList,
                clearWishList,
                toggleWishList,
                totalWishListItem,
                isInWishList
            }}
        >
            {children}
        </WishListContext.Provider>
    )
}