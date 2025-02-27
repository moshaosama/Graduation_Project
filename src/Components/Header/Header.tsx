import { Link } from "react-router";
import { ChangeTextByLanguage } from "../../Language/Language";
import { User } from "../../Types/Navbar";
import ImageRender from "../ImageRender";
import useConvertLanguage from "../../Hooks/useConvertLanguage";
import { IoMdArrowDropdown } from "react-icons/io";
import { useMemo } from "react";

const Header = () => {
  const Token = window.localStorage.getItem("Token");
  const User: User = useMemo(
    () => JSON.parse(window.localStorage.getItem("User")!),
    []
  );
  const Flags = useMemo(
    () => ({
      EnFlaf: `src/assets/download.png`,
      ArFlag: `src/assets/Flag_of_the_United_Kingdom_(1-2).svg.png`,
    }),
    []
  );

  const FlagSrc = useMemo(
    () => ChangeTextByLanguage(Flags.ArFlag, Flags.EnFlaf),
    [Flags]
  );

  const ConvertLogin = useMemo(
    () => ChangeTextByLanguage("تسجيل دخول", "Login"),
    []
  );
  const ConvertSignUp = useMemo(
    () => ChangeTextByLanguage("تسجيل دخول", "Login"),
    []
  );
  const ConvertLang = useMemo(
    () => ChangeTextByLanguage("English", "عربي"),
    []
  );

  const { toggleLanguage } = useConvertLanguage();

  return (
    <>
      <div className="absolute -top-24 right-0 bg-blue-700 w-[45pc] h-[40pc] rounded-b-3xl">
        <div className="flex items-center justify-between mx-10 p-4">
          {Token ? (
            <button className="bg-white hover:bg-[#b1b1b1] transition-all duration-500 p-2 w-40 rounded-xl flex justify-around items-center">
              <h1 className="font-bold">{User?.userName}</h1>
              <IoMdArrowDropdown />
            </button>
          ) : (
            <div className="flex items-center gap-10">
              <Link to={"/login"}>
                <p className="cursor-pointer text-[#23A6F0] font-bold">
                  {ConvertLogin}
                </p>
              </Link>
              <Link to={"/signup"}>
                <button className="bg-[#23A6F0] w-32 hover:bg-[#3790c4] rounded transition-all duration-400 p-3 text-white">
                  {ConvertSignUp}
                </button>
              </Link>
            </div>
          )}

          {/* ///////////////////////////////////// */}

          <div className="flex items-center gap-2" onClick={toggleLanguage}>
            <ImageRender src={FlagSrc} alt="Flags.png" width="10" />
            <p
              className="hover:underline cursor-pointer text-white font-bold"
              style={{ fontFamily: "Crimson Text" }}
            >
              {ConvertLang}
            </p>
          </div>
        </div>
        <img
          src="src\assets\WhatsApp_Image_2025-02-25_at_00.57.24_f19a0d40-removebg-preview.png"
          alt="Image.png"
          className="absolute bottom-0"
        />
      </div>
    </>
  );
};

export default Header;
