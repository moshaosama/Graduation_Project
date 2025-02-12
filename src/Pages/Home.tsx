import { useEffect } from "react";

import { ChangeTextByLanguage, Traslation } from "../Language/Language";
import FindDoctorsWep from "../Components/findDoctorForm/findDoctorWep/findDoctorsWep";
import FindDectorResponsive from "../Components/findDoctorForm/findDoctorResponsive/findDectorResponsive";
import ChatBot from "../Components/NewServieces/ChatBot";
import FeatureDoctor from "../Components/NewServieces/FeatureDoctor";
import MedicineTracker from "../Components/NewServieces/MedicineTracker";

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
        <div className="bg-white max-sm:px-3 max-sm:py-6 flex flex-col gap-5">
          <div
            className="absolute top-10 w-[80pc] max-sm:w-0  max-sm:relative sm:my-10  opacity-15 transition-all duration-1000 left-80 max-sm:left-0 flex  flex-col gap-3 text-black"
            id="HeaderText"
          >
            <h1
              className={`text-3xl text-gray-700 ${Traslation.ConvertTextAlign} font-bold max-sm:text-lg max-sm:text-[#757575] max-sm:w-40 `}
            >
              {ChangeTextByLanguage(
                "Better Healthcare for a Better Life",
                "رعاية صحية لحياة أفضل ليك"
              )}
            </h1>
            <p
              className={`text-xl text-gray-700 ${Traslation.ConvertTextAlign} font-semibold max-sm:hidden`}
            >
              {ChangeTextByLanguage(
                "Book online or call16676",
                `احجز أونلاين أو كلم ١٦٦٧٦`
              )}
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

      <div className="mx-80 my-10 max-sm:mx-3">
        <h1 className="text-3xl text-gray-600 font-bold">
          New services for better healthcare
        </h1>
        <ChatBot />
        <FeatureDoctor />
        <MedicineTracker />
      </div>
    </>
  );
}

export default Home;
