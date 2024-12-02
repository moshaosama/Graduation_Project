import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Contact from "./Pages/contact";
import Footer from "./Components/Footer";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname == "/login" ||
      location.pathname === "/signup" ? null : (
        <Navbar />
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
}

export default App;
