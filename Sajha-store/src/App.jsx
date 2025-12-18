import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import About from "./components/pages/About";
import SearchResult from "./components/pages/SearchResult";
import ProductDetails from "./components/pages/ProductDetails";
import { CartProvider } from "./context/CartProvider";

const App = () => {

  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/product',
        element: <Product />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: "/search",
        element: <SearchResult />
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />
      }
    ]
  }
  ])

  return (
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  );
};

export default App;
