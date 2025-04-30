const DownloadApp = () => {
  return (
    <>
      <div className="bg-white max-sm:mx-[10px] mt-20 p-8 max-sm:p-1 max-sm:block flex justify-center rounded-lg">
        <div className="bg-blue-700 w-[80pc] max-sm:w-[24pc]  rounded-xl p-10 flex justify-between">
          <div className="text-white flex flex-col w-96  gap-10">
            <h1 className="text-3xl font-bold">
              Download Medipulse Application
            </h1>
            <p className="font-semibold text-md">
              Search, compare and book doctor consultations with ease. Track
              your medicine &make sure you feel alright
            </p>
            <button className="w-fit rounded-full">
              <img
                src="WhatsApp Image 2025-02-27 at 17.42.34_ca5194f6.jpg"
                alt="googleMobile.png"
                className="w-40"
                loading="lazy"
              />
            </button>
          </div>
          <div>
            <img
              src="Medical-Record-App-removebg-preview.png"
              alt="Mobild.png"
              className="w-96"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
