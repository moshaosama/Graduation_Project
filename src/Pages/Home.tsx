import { useEffect } from "react";
import FindDoctorsWep from "../Components/findDoctorForm/findDoctorWep/findDoctorsWep";
import FindDectorResponsive from "../Components/findDoctorForm/findDoctorResponsive/findDectorResponsive";
import ChatBot from "../Components/NewServieces/ChatBot";
import FeatureDoctor from "../Components/NewServieces/FeatureDoctor";
import MedicineTracker from "../Components/NewServieces/MedicineTracker";
import HeaderText from "../Components/HeaderText/HeaderText";
import Header from "../Components/Header/Header";
import ExploreUs from "../Components/ExploreUs/ExploreUs";

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
        <Header />
        <HeaderText />
        <div className="max-sm:hidden">
          <FindDoctorsWep />
        </div>
        <div className="sm:hidden">
          <FindDectorResponsive />
        </div>
      </div>

      <div className="mx-80 my-[55pc] max-sm:mx-3">
        <ExploreUs />
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
