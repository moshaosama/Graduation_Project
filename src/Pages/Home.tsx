import { useEffect } from "react";
import FindDoctorsWep from "../Components/findDoctorForm/findDoctorWep/findDoctorsWep";
import FindDectorResponsive from "../Components/findDoctorForm/findDoctorResponsive/findDectorResponsive";
import ChatBot from "../Components/ChatBot/ChatBot";
import HeaderText from "../Components/HeaderText/HeaderText";
import Header from "../Components/Header/Header";
import ExploreUs from "../Components/ExploreUs/ExploreUs";
import TopDoctors from "../Components/TopDoctors/TopDoctors";
import OurService from "../Components/OurServices/OurService";
import WhyUs from "../Components/WhyUs/WhyUs";
import DownloadApp from "../Components/DownloadApp/DownloadApp";

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

      <div className="mx-80 mt-[55pc] max-sm:mx-3">
        <ExploreUs />

        <ChatBot />
        <TopDoctors />
        <OurService />
        <WhyUs />
        <DownloadApp />
      </div>
    </>
  );
}

export default Home;
