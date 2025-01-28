import React from "react";
import { useState } from "react";
import { Link } from "react-router";

const OffCanvas = React.lazy(() => import("./offCanvas/offCanvas"));

interface NavbarProps {
  setFun: () => void;
}

const Navbar = ({ setFun }: NavbarProps) => {
  const [Active, setActive] = useState<boolean>(false);
  const Language = JSON.stringify(window.localStorage.getItem("Language"));

  function ChangeTextByLanguage(Text: string, newText: string) {
    if (Language == '"English"') {
      return Text;
    } else {
      return newText;
    }
  }

  return (
    <>
      <div
        className={`py-2 shadow-4xl  sm:bg-[#007fff4a] ${
          Active ? "bg-[rgba(0,0,0,0.5)]" : "bg-[#007fff4a]"
        }`}
      >
        <div className="flex items-center justify-between mx-24 max-sm:justify-between max-sm:mx-5">
          <Link to={"/"}>
            <div className="flex items-center gap-3 cursor-pointer">
              <img src="Vector.png" alt="" className="w-10" />
              <h1
                className=" text-3xl font-Arbutus Slab text-blue-700"
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
              {ChangeTextByLanguage("contact us", "اتصل بنا")}
            </Link>

            <p
              className="hover:underline cursor-pointer text-black font-bold"
              style={{ fontFamily: "Crimson Text" }}
              onClick={() => setFun()}
            >
              {ChangeTextByLanguage("عربي", "English")}
            </p>

            <h1>|</h1>

            <div className="flex items-center gap-5 max-sm:hidden">
              <Link
                to={"/login"}
                className="hover:underline cursor-pointer text-black font-bold "
              >
                {ChangeTextByLanguage("login", "دخول")}
              </Link>
              <button className="bg-blue-400  text-white font-bold p-2 rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                <Link to={"/signup"}>
                  {ChangeTextByLanguage("sign up", "انضم الان")}
                </Link>
              </button>
            </div>
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
