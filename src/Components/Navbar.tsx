import React from "react";
import { useState } from "react";
import { Link } from "react-router";
import { NavbarProps, User } from "../Types/Navbar";
import { FaBars } from "react-icons/fa";
import { MdOutlineArrowDropDown, MdOutlinePerson2 } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { ChangeTextByLanguage } from "../Language/Language";

const OffCanvas = React.lazy(() => import("./offCanvas/offCanvas"));

const Navbar = ({ setFun }: NavbarProps) => {
  const [Active, setActive] = useState<boolean>(false);
  const [ActiveDashboard, setActiveDashboard] = useState<boolean>(false);
  const Token = window.localStorage.getItem("Token");
  const User: User = JSON.parse(window.localStorage.getItem("User")!);

  return (
    <>
      <div className="relative">
        <div
          className={`py-3 shadow-4xl  sm:bg-[#007fff4a] ${
            Active ? "bg-[rgba(0,0,0,0.5)]" : "bg-[#007fff4a]"
          }`}
        >
          <div className="flex items-center justify-between mx-80 max-sm:justify-between max-sm:mx-5">
            <Link to={"/"}>
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => setActiveDashboard(false)}
              >
                <img src="Vector.png" alt="" className="w-10" />
                <h1
                  className=" text-3xl font-Arbutus Slab text-blue-700"
                  style={{ fontFamily: "Arbutus Slab" }}
                >
                  MediPulse
                </h1>
              </div>
            </Link>
            <div className="sm:hidden" onClick={() => setActive(!Active)}>
              <FaBars className="text-blue-500 text-xl" />
            </div>
            <div className="flex items-center gap-3 max-sm:hidden">
              {Token ? (
                <>
                  <div
                    className="flex gap-3 items-center cursor-pointer"
                    onClick={() => setActiveDashboard(!ActiveDashboard)}
                  >
                    <h1 className="font-semibold">{User?.userName}</h1>
                    <MdOutlineArrowDropDown />
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-5 max-sm:hidden">
                  <Link to={"/signup"}>
                    <button className="border-[3px] border-solid   text-black font-bold p-2 rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                      {ChangeTextByLanguage("sign up", "انضم الان")}
                    </button>
                  </Link>

                  <Link
                    to={"/login"}
                    className="hover:underline cursor-pointer text-black font-bold "
                  >
                    {ChangeTextByLanguage("login", "دخول")}
                  </Link>
                </div>
              )}
              <h1>|</h1>
              <Link
                to={"/contact"}
                className="hover:underline cursor-pointer text-black font-bold"
                style={{ fontFamily: "Crimson Text" }}
              >
                {ChangeTextByLanguage("contact us", "اتصل بنا")}
              </Link>
              <h1>|</h1>
              <p
                className="hover:underline cursor-pointer text-black font-bold"
                style={{ fontFamily: "Crimson Text" }}
                onClick={() => setFun()}
              >
                {ChangeTextByLanguage("عربي", "English")}
              </p>
            </div>
          </div>
        </div>
        <div>
          <OffCanvas Active={Active} setActive={setActive} />
        </div>
        {ActiveDashboard ? (
          <div
            className={`absolute flex  transition-all duration-300 flex-col gap-1 right-96 top-14  rounded shadow-md shadow-black z-50 bg-white w-fit`}
          >
            <Link to={"/profile/info"}>
              <div
                onClick={() => setActiveDashboard(false)}
                className="flex gap-2 p-3 text-[#0a84ff7a] font-bold hover:bg-[#0a84ff7a] hover:text-black cursor-pointer transition-all duration-300"
              >
                <MdOutlinePerson2 className="text-xl" />
                <h1>My Profile</h1>
              </div>
            </Link>
            <div className="flex gap-2 p-3 text-[#0a84ff7a] font-bold hover:bg-[#0a84ff7a] hover:text-black cursor-pointer transition-all duration-300">
              <CiLogout className="text-xl" />
              <h1>My Appointments</h1>
            </div>
            <div className="flex gap-2 p-3 text-[#0a84ff7a] font-bold hover:bg-[#0a84ff7a] hover:text-black cursor-pointer transition-all duration-300">
              <CiLogout className="text-xl" />
              <h1>My Insurance</h1>
            </div>
            <Link to={""}>
              <div
                onClick={() => {
                  window.localStorage.removeItem("Token");
                  // window.location.reload();
                  setActiveDashboard(false);
                }}
                className="flex gap-2 p-3 text-[#0a84ff7a] font-bold hover:bg-[#0a84ff7a] hover:text-black cursor-pointer transition-all duration-300"
              >
                <CiLogout className="text-xl" />
                <h1>Logout</h1>
              </div>
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
