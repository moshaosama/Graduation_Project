import { memo, useEffect } from "react";
import FindDoctorsWep from "../features/findDoctor/Components/findDoctorsWep";

import HeaderText from "../features/Home/Components/HeaderText/HeaderText";
import Header from "../features/Home/Components/Header/Header";
import DownloadApp from "../features/Home/Components/DownloadApp/DownloadApp";
import JoinUs from "../Components/JoinUs/JoinUs";
import FindDectorResponsive from "../features/findDoctor/Components/findDoctorResponsive";
import ExploreUs from "../features/Home/Components/ExploreUs/ExploreUs";
import ChatBot from "../features/Home/Components/ChatBot/ChatBot";
import OurService from "../features/Home/Components/OurServices/OurService";
import TrendingItem from "../features/Home/Components/TredingItems/TrendingItem";
import WhyUs from "../features/Home/Components/WhyUs/WhyUs";
import TopDoctors from "../features/Home/Components/TopDoctors/TopDoctors";
import BobUpChatBot from "../features/PopUpChatBot/Components/BobUpChatBot";
import EndChatBot from "../Components/EndChatBot";
import { useCloseChatBotContext } from "../Context/CloseChatBot";

function Home() {
  useEffect(() => {
    const HeaderText = document.getElementById("HeaderText");
    if (HeaderText) {
      HeaderText.style.setProperty("top", "0");
      HeaderText.style.setProperty("opacity", "100");
    }
  }, []);
  const { isCloseChat } = useCloseChatBotContext();

  return (
    <>
      <div className="relative max-sm:w-[24.5pc]">
        <Header />
        <HeaderText />
        <div className="max-sm:hidden">
          <FindDoctorsWep />
        </div>
        <div className="sm:hidden">
          <FindDectorResponsive />
        </div>
      </div>
      <div className="mt-[55pc]">
        {/* //mx-80 */}
        <ExploreUs />
        <ChatBot />
        <TopDoctors />
        <TrendingItem />
        <OurService />
        <WhyUs />
        <DownloadApp />
        <JoinUs />
        <BobUpChatBot />
        {isCloseChat && <EndChatBot />}
      </div>
    </>
  );
}

export default memo(Home);
