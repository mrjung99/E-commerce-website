import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MessagePopup from "../components/ui/MessagePopup";

const Layout = () => {
  return (
    <div>
      <MessagePopup />
      <TopBar />
      <SearchBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
