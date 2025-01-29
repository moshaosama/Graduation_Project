import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      {location.pathname == "/login" ||
      location.pathname === "/signup" ? null : (
        <Footer />
      )}
    </>
  );
};

export default Layout;
