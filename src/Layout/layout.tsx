import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar/Navbar";
import CopyRight from "../Components/CopyRight";

const Layout = () => {
  const location = useLocation().pathname;
  return (
    <>
      {location == "/login" ||
      location === "/signup" ||
      location === "/joinnewdoctor" ? null : (
        <Navbar />
      )}
      <Outlet />
      {location == "/login" ||
      location === "/signup" ||
      location === "/joinnewdoctor" ? null : (
        <>
          <Footer />
          <CopyRight />
        </>
      )}
    </>
  );
};

export default Layout;
