import useConvertLanguage from "../../Hooks/useConvertLanguage";
import { ChangeTextByLanguage } from "../../Language/Language";
import ImageRender from "../ImageRender";
import TitleForSection from "../TitleForSection/TitleForSection";

const ChatBot = () => {
  const { language } = useConvertLanguage();

  window.addEventListener("scroll", function () {
    const ChatGbtSec = document.getElementById("ChatGbtSec");
    if (window.scrollY >= 800) {
      ChatGbtSec?.style.setProperty("gap", "0px");
      ChatGbtSec?.style.setProperty("opacity", "100%");
    }
  });

  return (
    <>
      <div
        className={`bg-blue-700 ${
          language == "English" ? "flex-row-reverse" : "flex-row"
        } w-full flex justify-center rounded py-10 my-4 items-center gap-10`}
      >
        <ImageRender
          src="src\assets\WhatsApp_Image_2025-02-26_at_22.44.55_0078e028-removebg-preview.png"
          alt="ChatIcon.png"
          width="20"
        />
        <h1 className="text-5xl font-bold text-white">
          {ChangeTextByLanguage(
            "تحقق من صحتك بشكل أكثر ذكاءً",
            "Check your health smarter"
          )}
        </h1>
      </div>

      <div
        className={`w-full my-10 mx-5 flex ${
          language == "English" ? "flex-row-reverse" : "flex-row"
        } gap-96 transition-all duration-500 opacity-5`}
        id="ChatGbtSec"
      >
        <div>
          <TitleForSection
            Text={ChangeTextByLanguage("الذكاء الاصطناعي الذكي", "Smart AI")}
          />
          <div
            className={`m-10 flex ${
              language == "English" ? "flex-row-reverse" : "flex-row"
            } items-center gap-10`}
          >
            <ImageRender
              src="src\assets\WhatsApp_Image_2025-02-26_at_22.59.18_b28e4f7c-removebg-preview.png"
              alt="ChatBgtIcon.png"
              width="36"
            />
            <button className="py-4 w-96 rounded-xl text-white bg-gradient-to-r from-[#184C99] to-black text-3xl font-semibold">
              Ask....
            </button>
          </div>
        </div>
        <div>
          <ImageRender
            src="src\assets\WhatsApp_Image_2025-02-26_at_23.05.16_522ef8e0-removebg-preview.png"
            alt="DoctorIcon.png"
            width="96"
          />
        </div>
      </div>
    </>
  );
};

export default ChatBot;
