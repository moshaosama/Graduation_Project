import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router";

const OffCanvas = React.lazy(() => import("./offCanvas/offCanvas"));

const Navbar = () => {
  const [Active, setActive] = useState<boolean>(false);
  return (
    <>
      <div
        className={`py-5 shadow-2xl sm:bg-[#007fff4a] ${
          Active ? "bg-[rgba(0,0,0,0.5)]" : "bg-[#007fff4a]"
        }`}
      >
        <div className="flex items-center justify-between mx-24 max-sm:justify-between max-sm:mx-5">
          <Link to={"/"}>
            <div className="flex items-center gap-3 cursor-pointer">
              <img src="Vector.png" alt="" className="w-10" />
              <h1
                className="font-bold text-3xl font-Arbutus Slab text-blue-700"
                style={{ fontFamily: "Arbutus Slab" }}
              >
                MediPulse
              </h1>
            </div>
          </Link>
          <div className="flex items-center gap-5 max-sm:hidden">
            <Link
              to={"/contactus"}
              className="hover:underline cursor-pointer text-black font-bold"
              style={{ fontFamily: "Crimson Text" }}
            >
              Contact us
            </Link>

            <p
              className="hover:underline cursor-pointer text-black font-bold"
              style={{ fontFamily: "Crimson Text" }}
            >
              عربي
            </p>

            <p
              className="hover:underline cursor-pointer text-black font-bold"
              style={{ fontFamily: "Crimson Text" }}
            >
              Egypt
            </p>
          </div>

          <div className="flex items-center gap-5 max-sm:hidden">
            <Link
              to={"/login"}
              className="hover:underline cursor-pointer text-black font-bold "
            >
              login
            </Link>
            <button className="bg-blue-700  text-white font-bold p-2 rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
              <Link to={"/signup"}>sign up</Link>
            </button>
          </div>

          <div className="sm:hidden" onClick={() => setActive(!Active)}>
            <FaBars className="text-white" />
          </div>
        </div>
      </div>

      <div>
        <OffCanvas Active={Active} setActive={setActive} />
      </div>
    </>
  );
};

export default Navbar;
