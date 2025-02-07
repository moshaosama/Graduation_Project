import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Layout = () => {
  const location = useLocation();
  const [Language, setLanguage] = useState(
    window.localStorage.getItem("Language") || "English"
  );
  const handleClick = () => {
    const newLanguag = Language === "English" ? "Arabic" : "English";
    setLanguage(newLanguag);
    window.localStorage.setItem("Language", newLanguag);
  };
  return (
    <>
      {location.pathname == "/login" ||
      location.pathname === "/signup" ? null : (
        <Navbar setFun={handleClick} />
      )}
      <Outlet />
      {location.pathname == "/login" ||
      location.pathname === "/signup" ? null : (
        <Footer />
      )}
    </>
  );
};

export default Layout;
