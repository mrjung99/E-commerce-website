import { createContext, useContext } from "react";

export const AuthContext = createContext()


export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("Authcontext must use under authprovider")
    }

    return context
}