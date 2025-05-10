const HeaderAboutUs = () => {
  return (
    <div className="-my-10 mb-32 relative">
      <div className="absolute top-0 left-0 w-full flex flex-col gap-5 justify-center items-center h-full bg-[#c9c9c929]">
        <h1 className="text-6xl text-[#00194F] font-bold">About US</h1>
        <p className="text-[#00194F] text-xl font-bold">Home / About Us</p>
      </div>
      <img
        src="Rectangle 17860@2x.png"
        alt="ImageHeader.png"
        className="w-full h-[600px] object-fill"
      />
    </div>
  );
};

export default HeaderAboutUs;
