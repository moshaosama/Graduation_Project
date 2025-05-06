import ImageRender from "../ImageRender";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { ChangeTextByLanguage } from "../../Language/Language";
import { lazy, useCallback } from "react";
import { IoIosMenu } from "react-icons/io";
import MenuResponsiveLinks from "../MenuResponsiveLinks";
import { useOpenMenu } from "../../Context/OpenMenuProvider";

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
      to: "",
    },
    {
      title: ChangeTextByLanguage("اتصال", "Contact"),
      to: "/contact",
    },
  ];

  const ConditionNavbar = useCallback(() => {
    location.pathname === "/doctors" ||
    location.pathname === "/joinnewdoctor" ? null : (
      <div className="absolute z-50 top-0" id="ImageBlue">
        <ImageRender
          src="WhatsApp_Image_2025-02-26_at_15.18.19_4b4a77c1-removebg-preview.png"
          alt="Image.png"
          width="40"
        />
      </div>
    );
  }, []);

  return (
    <>
      {ConditionNavbar}
      <div
        className={`flex items-center ${
          location.pathname !== "/" ? " mb-7" : ""
        } max-sm:mx-0 max-sm:w-[24.5pc]`}
      >
        <div
          className={` ${location.pathname !== "/" ? "w-96" : ""}`}
          style={{ margin: "1pc 55pc 2pc 10pc" }}
        >
          <div className="flex items-center gap-56 max-sm:gap-48">
            <Link to={"/"}>
              <div className={LogoBrand}>
                <ImageRender
                  src="/WhatsApp_Image_2025-02-26_at_15.32.48_0ec7bdab-removebg-preview.png"
                  alt="Logo.png"
                  width="10"
                />
                <h1 className={TextLogo}>MediPulse</h1>
              </div>
            </Link>
            <div className="sm:hidden">
              <IoIosMenu className="text-3xl" onClick={toggleMenu} />
              {OpenMenu ? <MenuResponsiveLinks /> : null}
            </div>
            <div className="flex gap-10 max-sm:hidden">
              {LinksPages.map(
                (el: { title: string; to: string }, index: number) => {
                  return (
                    <Link to={el.to} key={index}>
                      <p className="hover:underline cursor-pointer text-gray-600 font-semibold">
                        {el.title}
                      </p>
                    </Link>
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
