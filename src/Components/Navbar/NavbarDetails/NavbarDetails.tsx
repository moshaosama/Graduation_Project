import { memo, useMemo, useState, useTransition } from "react";
import { ChangeTextByLanguage } from "../../../Language/Language";
import useConvertLanguage from "../../../Hooks/useConvertLanguage";
import ImageRender from "../../ImageRender";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router";
import DashBoardUser from "../../DashboardUser/DashBoardUser";
import { User } from "../../../Types/Navbar";

const NavbarDetails = memo(({ textColor }: { textColor: string }) => {
  const Token = window.localStorage.getItem("Token");
  const User: User = useMemo(
    () => JSON.parse(window.localStorage.getItem("User")!),
    []
  );
  const [, startTransition] = useTransition();
  const [ActiveDashboard, setActiveDashboard] = useState(false);
  const handleClickUser = () => {
    startTransition(() => {
      setActiveDashboard(!ActiveDashboard);
    });
  };

  const ConvertLogin = useMemo(
    () => ChangeTextByLanguage("تسجيل دخول", "Login"),
    []
  );
  const ConvertSignUp = useMemo(
    () => ChangeTextByLanguage("أنشاء حساب", "SignUp"),
    []
  );
  const ConvertLang = useMemo(
    () => ChangeTextByLanguage("English", "عربي"),
    []
  );
  const Flags = {
    EnFlaf: `/download.png`,
    ArFlag: `/Flag_of_the_United_Kingdom_(1-2).svg.png`,
  };

  const FlagSrc = ChangeTextByLanguage(Flags.ArFlag, Flags.EnFlaf);

  const { toggleLanguage } = useConvertLanguage();
  return (
    <>
      <div className="flex gap-10  max-sm:hidden">
        {Token ? (
          <div className="relative ">
            <button
              className="bg-gray-200   hover:bg-[#b1b1b1] transition-all duration-500 p-2 rounded-xl flex justify-around items-center"
              onClick={handleClickUser}
            >
              <h1 className="font-bold">
                {User?.Status === "Doctor"
                  ? `Dr / ${User?.userName}`
                  : User?.userName || User?.displayName}
              </h1>
              <IoMdArrowDropdown />
            </button>
            {ActiveDashboard ? <DashBoardUser /> : null}
          </div>
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
        <div
          className="flex items-center gap-2 max-sm:hidden"
          onClick={toggleLanguage}
        >
          <ImageRender src={FlagSrc} alt="Flags.png" width="10" />
          <p
            className={`hover:underline cursor-pointer text-${textColor} font-bold`}
            style={{ fontFamily: "Crimson Text" }}
          >
            {ConvertLang}
          </p>
        </div>
      </div>
    </>
  );
});

export default NavbarDetails;
