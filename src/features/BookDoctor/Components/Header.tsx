import DetailsDoctor from "./DetailsDoctor";

const Header = () => {
  return (
    <>
      <div className="mb-14 -mt-6 relative">
        <img
          src="WhatsApp_Image_2025-02-26_at_15.50.41_23f1ec82-removebg-preview (1).png"
          alt="Header.png"
          className="w-full h-[60vh] object-fill"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#87a3ceb0] opacity-50"></div>
        <DetailsDoctor />
      </div>
    </>
  );
};

export default Header;
