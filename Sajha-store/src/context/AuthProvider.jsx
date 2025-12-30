import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const savedUser = localStorage.getItem("user-data");
        const savedToken = localStorage.getItem("user-token");

        if (savedToken && savedUser) {
          setUser(JSON.parse(savedUser));
        } else {
          localStorage.removeItem("user-data");
          localStorage.removeItem("user-token");
        }
      } catch (error) {
        console.error("Auth error", error);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  /*====================login method=========================*/
  const login = async (email, password) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const users = JSON.parse(localStorage.getItem("users-data")) || [];
      console.log("users length", users.length);

      if (users.length === 0) {
        const newuser = {
          id: Date.now(),
          firstname: "demo",
          lastname: "user",
          email: "demo@gmail.com",
          phone: "908080800",
          password: "demo123",
          country: "demo",
          zipcode: "999",
          city: "demo",
          state: "demo",
          street: "demo",
          createdAt: new Date().toISOString(),
          cart: [],
          wishlist: [],
          orders: [],
        };

        users.push(newuser);
        localStorage.setItem("users-data", JSON.stringify(users));
      }

      const founduser = users.find((user) => user.email === email);

      if (!founduser) {
        console.log("user not found");
        return { success: false, message: "User not found" };
      }

      if (founduser.password !== password) {
        console.log("passwrod invalid");

        return { success: false, message: "Invalid password" };
      }

      const { password: _, ...userWithoutPassword } = founduser;
      const token = `mock_jwt_${new Date()}_${founduser.id}`;

      localStorage.setItem("user-data", JSON.stringify(userWithoutPassword));
      localStorage.setItem("user-token", token);
      setUser(userWithoutPassword);

      return {
        success: true,
        user: userWithoutPassword,
        message: "Logged in Successfully",
      };
    } catch (error) {
      console.log(error);
      return { success: false, message: "Invalid login" };
    }
  };

  /*===============register==========*/
  const register = async (userData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const users = JSON.parse(localStorage.getItem("users-data")) || [];
      const existUser = users.find((user) => user.email === userData.email);

      if (existUser) {
        return { success: false, message: "Email already exists, try again!!" };
      }

      const newUser = {
        id: Date.now(),
        ...userData,
        role: "user",
        createdAt: new Date().toISOString(),
        cart: [],
        wishlist: [],
        orders: [],
      };
      users.push(newUser);
      localStorage.setItem("users-data", JSON.stringify(users));

      const { password: _, ...userWithoutPass } = newUser;
      const token = `mock_jwt${new Date()}_${newUser.id}`;

      localStorage.setItem("user-data", JSON.stringify(userWithoutPass));
      localStorage.setItem("user-token", token);
      setUser(userWithoutPass);
      return {
        success: true,
        user: userWithoutPass,
        message: "Account created successfully",
      };
    } catch (error) {
      console.log(error);
      return { success: false, message: "Registration fail" };
    }
  };

  /*=======================logout==========================*/
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user-data");
    localStorage.removeItem("user-token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
