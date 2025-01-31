import { useEffect } from "react";
import FindDoctorsWep from "../Components/findDoctor/findDoctorWep/findDoctorsWep";
import FindDectorResponsive from "../Components/findDoctor/findDoctorResponsive/findDectorResponsive";

function Home() {
  useEffect(() => {
    const HeaderText = document.getElementById("HeaderText");
    if (HeaderText) {
      HeaderText.style.setProperty("top", "0");
      HeaderText.style.setProperty("opacity", "100");
    }
  }, []);
  return (
    <>
      <div className="relative">
        <div className="max-sm:hidden">
          <img
            src="https://www.accruent.com/hubfs/Healthcare-Hero.webp"
            alt="ImageHome.png"
            className="h-[47pc] opacity-75  transition-all duration-1000 w-full object-cover"
          />
        </div>
        <div className="bg-white max-sm:px-3 max-sm:py-6 flex flex-col gap-5 ">
          <div
            className="absolute max-sm:relative sm:my-24 top-10 opacity-15 transition-all duration-1000 left-80 max-sm:left-0 flex flex-col gap-3 text-black"
            id="HeaderText"
          >
            <h1 className="text-4xl font-bold max-sm:text-lg max-sm:text-[#757575] max-sm:w-40 ">
              Better Healthcare for a Better Life
            </h1>
            <p className="text-2xl font-semibold max-sm:hidden">
              Book online or call16676
            </p>
          </div>
          <div className="max-sm:hidden">
            <FindDoctorsWep />
          </div>
          <div className="sm:hidden">
            <FindDectorResponsive />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
