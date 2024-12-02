import { useState } from "react";
import { FaBars } from "react-icons/fa";
import OffCanvas from "./offCanvas/offCanvas";
import { Link } from "react-router";

const Navbar = () => {
  const [Active, setActive] = useState<boolean>(false);
  return (
    <>
      <div
        className={`py-5 sm:bg-blue-500 ${
          Active ? "bg-[rgba(0,0,0,0.5)] " : "bg-blue-500"
        }`}
      >
        <div className="flex items-center justify-between mx-24 max-sm:justify-between max-sm:mx-5">
          <div>
            <h1 className="font-bold text-3xl">Brand Name</h1>
          </div>
          <div className="flex items-center gap-3 max-sm:hidden">
            <button className="border border-white text-white p-2 rounded-xl hover:bg-white hover:text-blue-500 transition-all duration-300">
              <Link to={"/signup"}>sign up</Link>
            </button>
            <Link
              to={"/login"}
              className="hover:underline cursor-pointer text-white"
            >
              login
            </Link>
            <p className="text-white">|</p>
            <Link
              to={"/contactus"}
              className="hover:underline cursor-pointer text-white"
            >
              Contact us
            </Link>
            <p className="text-white">|</p>
            <p className="hover:underline cursor-pointer text-white">عربي</p>
            <p className="text-white">|</p>
            <p className="hover:underline cursor-pointer text-white">Egypt</p>
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
