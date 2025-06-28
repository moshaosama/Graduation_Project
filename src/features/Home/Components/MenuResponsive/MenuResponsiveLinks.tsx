import { FaX } from "react-icons/fa6";
import { useOpenMenu } from "../../../../Context/OpenMenuProvider";
import clsx from "clsx";
import { Link, NavLink } from "react-router";
import useGetDoctor from "../../../Profile/Hook/useGetDoctor";
import useConvertLanguage from "../../../../Hooks/useConvertLanguage";
import { ChangeTextByLanguage } from "../../../../Language/Language";

const MenuResponsiveLinks = () => {
  const { OpenMenu, toggleMenu } = useOpenMenu();
  const Token = window.localStorage.getItem("Token");
  const { User } = useGetDoctor();
  const { toggleLanguage } = useConvertLanguage();
  return (
    <>
      <div
        className={clsx(
          "overflow-hidden fixed top-0 right-0 z-50 h-full bg-blue-300 transition-all duration-700",
          OpenMenu ? "p-5 w-full opacity-100" : "w-0"
        )}
      >
        <div className="flex justify-between">
          <div onClick={toggleMenu}>
            <FaX size={30} />
          </div>
          <div>
            <img
              src="/WhatsApp_Image_2025-02-26_at_15.32.48_0ec7bdab-removebg-preview.png"
              alt="Brand.png"
              className="w-8"
            />
          </div>
        </div>

        {Token && User && (
          <Link
            to={User?.Status === "Doctor" ? "/profile-doctor" : "/profile/info"}
            onClick={toggleMenu}
          >
            <div className="flex gap-5 items-center p-2 mt-10 mb-5 border-2 border-solid">
              <div>
                <img
                  src={
                    User?.photos?.[0]?.value || "download-removebg-preview.png"
                  }
                  alt="Person.png"
                  className="object-fill w-16 rounded-full"
                />
              </div>
              <div className="text-white">
                <h1 className="text-xl font-bold">
                  {User?.Status === "Doctor"
                    ? `Dr/ ${User?.userName || "No Name"}`
                    : User?.userName || User?.displayName || "No Name"}
                </h1>
                <p>{User?.Email || User?.emails?.[0]?.value || "No Email"}</p>
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

          {User ? null : (
            <NavLink to={"/joinnewdoctor"} className="p-5 font-bold">
              For_Doctors
            </NavLink>
          )}
          <NavLink to={"/contact"} className="p-5 font-bold">
            Contact
          </NavLink>
          {Token ? (
            <NavLink to={"/myappointments"} className="p-5 font-bold">
              My Appointments
            </NavLink>
          ) : null}
        </div>
        <div className="mt-5">
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
        </div>

        <div className="flex absolute bottom-5 justify-between w-80">
          <div
            className="mx-5 text-lg font-extrabold text-white"
            onClick={toggleLanguage}
          >
            <h1 className="text-black">
              {ChangeTextByLanguage("English", "عربي")}
            </h1>
          </div>
          <div className="flex gap-1 items-center -mx-5 text-xl text-black">
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
