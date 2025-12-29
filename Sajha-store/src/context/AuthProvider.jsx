import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { data } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const savedUser = localStorage.getItem("user-data");
        const savedToken = localStorage.getItem("user-token");

        if (savedToken && savedUser) {
          setUser(JSON.parse(savedUser));
          setIsAuthenticated(true);
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

  const login = async (email, password) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const users = JSON.parse(localStorage.getItem("users-data")) || [];
      console.log("users length", users.length);

      if (users.length === 0) {
        const newuser = {
          email: "demo@gmail.com",
          password: "demo123",
          name: "demo user",
          phone: "9879792742",
          address: "demo address",
          role: "user",
          profile: "",
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
      setuser(userWithoutPassword);
      setIsAuthenticated(true);

      console.log("isAuthenticated", isAuthenticated);
      return { success: true, user: userWithoutPassword };
    } catch (error) {
      console.log(error);
      return { success: false, message: "Invalid login" };
    }
  };

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
      setuser(userWithoutPass);
      setIsAuthenticated(true);
      return {
        success: true,
        user: userWithoutPass,
        message: "Registration successful",
      };
    } catch (error) {
      console.log(error);
      return { success: false, message: "Registration fail" };
    }
  };

  const logout = () => {
    setuser(null);
    localStorage.removeItem("user-data");
    localStorage.removeItem("user-token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, loading, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
