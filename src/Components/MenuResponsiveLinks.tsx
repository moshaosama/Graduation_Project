import { IoMdArrowDropright } from "react-icons/io";
import clsk from "clsx";
import { useOpenMenu } from "../Context/OpenMenuProvider";
import { Link, NavLink } from "react-router";
import { ChangeTextByLanguage } from "../Language/Language";
import useConvertLanguage from "../Hooks/useConvertLanguage";
import { User } from "../Types/Navbar";

const MenuResponsiveLinks = () => {
  const { OpenMenu, toggleMenu } = useOpenMenu();
  const { toggleLanguage } = useConvertLanguage();
  const Token = window.localStorage.getItem("Token");
  const User: User = JSON.parse(window.localStorage.getItem("User")!);
  return (
    <>
      <div
        className={clsk(
          "absolute top-0 right-0 h-full w-0 z-50 bg-blue-500 duration-500 transition-[width]",
          OpenMenu ? "w-80" : "w-0"
        )}
      >
        <div className="text-white m-5 flex items-center justify-between">
          <Link to={"/"} onClick={toggleMenu}>
            <div className="flex gap-2">
              <img
                src="/WhatsApp_Image_2025-02-26_at_15.32.48_0ec7bdab-removebg-preview.png"
                alt="Brand.png"
                className="w-8"
              />
              <h1 className="text-2xl font-semibold">MediPulse</h1>
            </div>
          </Link>
          <IoMdArrowDropright className="text-5xl" onClick={toggleMenu} />
        </div>

        {Token && (
          <Link to={"/profile/info"} onClick={toggleMenu}>
            <div className="border-2 p-2 border-solid mb-5 flex items-center gap-5">
              <div>
                <img
                  src={
                    User.photos?.[0]?.value
                      ? User.photos?.[0]?.value
                      : "download-removebg-preview.png"
                  }
                  alt="Person.png"
                  className="w-16 rounded-full object-fill"
                />
              </div>
              <div className="text-white">
                <h1 className="text-xl font-bold">
                  {User.userName || User.displayName}
                </h1>
                <p>{User.Email || User.emails?.[0]?.value}</p>
              </div>
            </div>
          </Link>
        )}

        <div className="flex flex-col gap-2" onClick={toggleMenu}>
          <NavLink to={"/"} className="p-5 font-bold">
            Home
          </NavLink>
          <NavLink to={"/service"} className="p-5 font-bold">
            Services
          </NavLink>
          {!Token ? (
            <NavLink to={"/login"} className="p-5 font-bold">
              Login
            </NavLink>
          ) : (
            <div
              className="p-5 font-bold"
              onClick={() => {
                window.localStorage.removeItem("Token");
                window.localStorage.removeItem("User");
              }}
            >
              Logout
            </div>
          )}
          {User ? null : (
            <NavLink to={"/joinnewdoctor"} className="p-5 font-bold">
              For_Doctors
            </NavLink>
          )}
          <NavLink to={"/contact"} className="p-5 font-bold">
            Contact
          </NavLink>
          <NavLink to={"/myappointments"} className="p-5 font-bold">
            My Appointments
          </NavLink>
        </div>
        <div className="absolute bottom-5 w-72 flex justify-between">
          <div
            className="mx-5 font-extrabold text-lg text-white"
            onClick={toggleLanguage}
          >
            <h1>{ChangeTextByLanguage("English", "عربي")}</h1>
          </div>
          <div className="text-xl -mx-5 text-white flex items-center gap-1">
            <img
              src="/Flag_of_the_United_Kingdom_(1-2).svg.png"
              alt="ENG.flag"
              className="w-9"
            />
            <h1>Egypt</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuResponsiveLinks;
