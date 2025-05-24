import ImageRender from "../ImageRender";
import style from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { ChangeTextByLanguage } from "../../Language/Language";
import { lazy } from "react";
import { IoIosMenu } from "react-icons/io";
import MenuResponsiveLinks from "../../features/Home/Components/MenuResponsive/MenuResponsiveLinks";
import { useOpenMenu } from "../../Context/OpenMenuProvider";
import clsx from "clsx";

const NavbarDetails = lazy(() => import("./NavbarDetails/NavbarDetails"));

const Navbar = () => {
  const { LogoBrand, TextLogo } = style;
  const { OpenMenu, toggleMenu } = useOpenMenu();
  const Token = localStorage.getItem("Token");
  const LinksPages = [
    {
      title: ChangeTextByLanguage("الرئيسيه", "Home"),
      to: "/",
    },
    {
      title: ChangeTextByLanguage("خدمات", "Services"),
      to: "/services",
    },
    {
      title: ChangeTextByLanguage("اتصال", "Contact"),
      to: "/contact",
    },
    {
      title: ChangeTextByLanguage("اتصال", "Medicine Library"),
      to: "/medicine-library",
    },
  ];

  const ConditionNavbar = () => {
    if (
      location.pathname === "/doctors" ||
      location.pathname === "/joinnewdoctor" ||
      location.pathname === "/profile-doctor" ||
      location.pathname === "/chatbot"
    ) {
      return null;
    }
    return (
      <div className="absolute z-50 top-0 max-sm:hidden" id="ImageBlue">
        <img
          src="WhatsApp_Image_2025-02-26_at_15.18.19_4b4a77c1-removebg-preview.png"
          alt="Header.png"
          className="w-32 h-full"
        />
      </div>
    );
  };

  return (
    <>
      {ConditionNavbar()}
      <div
        id="Navbar"
        className={clsx(
          "flex items-center max-sm:mx-0 max-sm:w-[24.5pc]",
          location.pathname !== "/" ? " mb-7 pt-[1pc] h-[5.7pc] shadow-xl" : ""
        )}
      >
        <div
          className={` ${location.pathname !== "/" ? "w-96" : ""}`}
          style={{ margin: "1pc 55pc 2pc 10pc" }}
        >
          <div className="flex items-center gap-24 max-sm:gap-48 ">
            <Link to={"/"}>
              <div className={clsx(LogoBrand, "max-2xl:w-[25px]")}>
                <ImageRender
                  src="/WhatsApp_Image_2025-02-26_at_15.32.48_0ec7bdab-removebg-preview.png"
                  alt="Logo.png"
                  width="10"
                />
                <h1 className={clsx(TextLogo, "max-2xl:text-[5px]")}>
                  MediPulse
                </h1>
              </div>
            </Link>
            <div className="sm:hidden">
              <IoIosMenu className="text-3xl" onClick={toggleMenu} />
              {OpenMenu ? <MenuResponsiveLinks /> : null}
            </div>
            <div
              className={clsx(
                "flex gap-9 max-2xl:mx-20 max-sm:hidden",
                Token ? "max-2xl:gap-10" : "max-2xl:gap-5"
              )}
            >
              {LinksPages.map(
                (el: { title: string; to: string }, index: number) => {
                  return (
                    <NavLink
                      to={el.to}
                      key={index}
                      className={clsx("active:bg-blue-500 max-2xl:text-[15px]")}
                    >
                      <p
                        className={clsx(
                          "hover:underline cursor-pointer text-gray-600 font-semibold",
                          el.title === "Medicine Library" ? "w-[8pc]" : ""
                        )}
                      >
                        {el.title}
                      </p>
                    </NavLink>
                  );
                }
              )}
              {!Token ? (
                <Link to={"/joinnewdoctor"}>
                  <p className="hover:underline cursor-pointer text-gray-600 font-semibold">
                    For_Doctors
                  </p>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
        <div className="w-full mb-5">
          {location.pathname !== "/" ? (
            <NavbarDetails textColor="black" />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
