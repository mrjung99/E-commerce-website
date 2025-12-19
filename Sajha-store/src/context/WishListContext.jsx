import { createContext, useContext } from "react";

export const WishListContext = createContext()

export const useWishList = () => {
    const context = useContext(WishListContext)

    if (!context) {
        throw new Error("useWishList must be use inside wishlist provider")
    }

    return context
}