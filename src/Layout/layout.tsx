import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  const location = useLocation().pathname;
  return (
    <>
      {location == "/login" || location === "/signup" ? null : <Navbar />}
      <Outlet />
      {location == "/login" || location === "/signup" ? null : <Footer />}
    </>
  );
};

export default Layout;
