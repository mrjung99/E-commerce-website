import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import About from "./components/pages/About";
import SearchResult from "./components/pages/SearchResult";
import ProductDetails from "./components/pages/ProductDetails";
import { CartProvider } from "./context/CartProvider";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import Wishlist from "./components/pages/Wishlist";
import { WishListProvider } from "./context/WishListProvider";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import AuthProvider from "./context/AuthProvider";
import ProtectedAuth from "./components/auth/ProtectedAuth";
import Profile from "./components/pages/Profile";
import Orders from "./components/pages/Orders";
import MessageProvider from "./context/MessageProvider";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/search",
          element: <SearchResult />,
        },
        {
          path: "/productDetails/:id",
          element: <ProductDetails />,
        },
        {
          path: "/cart",
          element: (
            <ProtectedAuth>
              <Cart />
            </ProtectedAuth>
          ),
        },
        {
          path: "/checkout",
          element: (
            <ProtectedAuth>
              <Checkout />
            </ProtectedAuth>
          ),
        },
        {
          path: "/wishlist",
          element: (
            <ProtectedAuth>
              <Wishlist />
            </ProtectedAuth>
          ),
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/profile",
          element: (
            <ProtectedAuth>
              <Profile />
            </ProtectedAuth>
          ),
        },
        {
          path: "/orders",
          element: (
            <ProtectedAuth>
              <Orders />
            </ProtectedAuth>
          ),
        },
      ],
    },
  ]);

  return (
    <MessageProvider>
      <AuthProvider>
        <WishListProvider>
          <CartProvider>
            <RouterProvider router={router}></RouterProvider>
          </CartProvider>
        </WishListProvider>
      </AuthProvider>
    </MessageProvider>
  );
};

export default App;
