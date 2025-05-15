import DetailsDoctor from "./DetailsDoctor";

const Header = () => {
  return (
    <>
      <div className="mb-14 -mt-6 relative">
        <img
          src="https://media.istockphoto.com/id/1264666749/photo/doctor.jpg?s=612x612&w=0&k=20&c=uAVTjDFT3YNbEVXkxRSwwH9uPa47n5FWxVZ8gI2w0KU="
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
