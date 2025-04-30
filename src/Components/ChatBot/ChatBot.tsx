import { lazy, Suspense } from "react";
import useConvertLanguage from "../../Hooks/useConvertLanguage";
import { ChangeTextByLanguage } from "../../Language/Language";

const TitleForSection = lazy(
  () => import("../TitleForSection/TitleForSection")
);
const ImageRender = lazy(() => import("../ImageRender"));

const ChatBot = () => {
  const { language } = useConvertLanguage();

  window.addEventListener("scroll", function () {
    const ChatGbtSec = document.getElementById("ChatGbtSec");
    if (window.scrollY >= 800) {
      ChatGbtSec?.style.setProperty("gap", "17pc");
      ChatGbtSec?.style.setProperty("opacity", "100%");
    }
  });

  return (
    <>
      <div
        className={`bg-blue-700 ${
          language == "English" ? "flex-row-reverse" : "flex-row"
        }  flex justify-center py-10 max-sm:px-5  mt-6 items-center gap-10 max-sm:w-[24.5pc]`}
      >
        <Suspense fallback={"Loading..."}>
          <ImageRender
            src="WhatsApp_Image_2025-02-26_at_22.44.55_0078e028-removebg-preview.png"
            alt="ChatIcon.png"
            width="16"
          />
        </Suspense>
        <h1 className="text-5xl font-bold text-white max-sm:text-3xl">
          {ChangeTextByLanguage(
            "تحقق من صحتك بشكل أكثر ذكاءً",
            "Check your health smarter"
          )}
        </h1>
      </div>

      <div className="bg-white p-10">
        <div
          className={`w-full  flex ${
            language == "English" ? "flex-row-reverse" : "flex-row"
          } justify-center gap-[0pc] transition-all duration-500 opacity-5`}
          id="ChatGbtSec"
        >
          <div>
            <Suspense fallback={"Loading..."}>
              <TitleForSection
                Text={ChangeTextByLanguage(
                  "الذكاء الاصطناعي الذكي",
                  "Smart AI"
                )}
              />
            </Suspense>
            <div
              className={`m-10 flex ${
                language == "English" ? "flex-row-reverse" : "flex-row"
              } items-center gap-10 max-sm:gap-16`}
            >
              <Suspense fallback={"Loading..."}>
                <ImageRender
                  src="WhatsApp_Image_2025-02-26_at_22.59.18_b28e4f7c-removebg-preview.png"
                  alt="ChatBgtIcon.png"
                  width="36"
                />
              </Suspense>
              <button className="py-4 max-sm:w-56 w-96 rounded-xl text-white bg-gradient-to-r from-[#184C99] to-black text-3xl font-semibold">
                Ask....
              </button>
            </div>
          </div>
          <div className="max-sm:hidden">
            <Suspense fallback={"Loading..."}>
              <ImageRender
                src="WhatsApp_Image_2025-02-26_at_23.05.16_522ef8e0-removebg-preview.png"
                alt="DoctorIcon.png"
                width="96"
              />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
