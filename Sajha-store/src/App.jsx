import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import About from "./components/pages/About";
import SearchResult from "./components/pages/SearchResult";

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
      }
    ]
  }
  ])

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
