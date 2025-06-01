import { lazy, useRef } from "react";
import useTransition from "../../../../Hooks/useTransition";

const NavbarDetails = lazy(
  () => import("../../../../Components/Navbar/NavbarDetails/NavbarDetails")
);

const initialStyles = {
  right: "0",
  opacity: "0",
};

const Styles = {
  right: "10pc",
  opacity: "1",
};
const Header = () => {
  const ImageDoctor = useRef(null);
  useTransition(ImageDoctor, initialStyles, Styles);
  return (
    <>
      <div className="absolute -top-24 right-0 bg-[#1F3FC3] w-[40pc] max-2xl:w-[37pc] h-[40pc] rounded-b-3xl max-sm:hidden">
        <div className="flex items-center justify-between p-4 mx-10">
          <NavbarDetails textColor="white" />
        </div>
        <img
          src="WhatsApp_Image_2025-02-25_at_00.57.24_f19a0d40-removebg-preview.png"
          alt="Image.png"
          className="absolute bottom-0 transition-all duration-1000"
          loading="lazy"
          ref={ImageDoctor}
        />
      </div>
    </>
  );
};

export default Header;
