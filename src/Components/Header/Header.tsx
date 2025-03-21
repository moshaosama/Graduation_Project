import { lazy } from "react";

const NavbarDetails = lazy(
  () => import("../Navbar/NavbarDetails/NavbarDetails")
);
const Header = () => {
  return (
    <>
      <div className="absolute -top-24 right-0 bg-[#1F3FC3] w-[45pc] h-[40pc] rounded-b-3xl">
        <div className="flex items-center justify-between mx-10 p-4">
          {/* ///////////////////////////////////// */}
          <NavbarDetails textColor="white" />
        </div>
        <img
          src="WhatsApp_Image_2025-02-25_at_00.57.24_f19a0d40-removebg-preview.png"
          alt="Image.png"
          className="absolute bottom-0"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Header;
