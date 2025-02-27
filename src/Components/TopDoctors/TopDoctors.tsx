import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import useConvertLanguage from "../../Hooks/useConvertLanguage";
import { ChangeTextByLanguage } from "../../Language/Language";
import TitleForSection from "../TitleForSection/TitleForSection";

const TopDoctorsDetails = () => {
  return (
    <div className="bg-white py-10 px-2 flex flex-col gap-4 items-center rounded shadow-2xl">
      <img
        src="src\assets\WhatsApp_Image_2025-02-27_at_01.00.00_8ea27a5f-removebg-preview.png"
        alt="Person.png"
        className="w-36"
      />
      <h1 className="text-md font-bold">Dr. Hisham Bahaa Eldin</h1>
      <p className="text-sm font-semibold">
        Cardiology and Vascular Disease (Heart)
      </p>
      <div>
        <p>Location</p>
      </div>
    </div>
  );
};

const TopDoctors = () => {
  const { language } = useConvertLanguage();
  return (
    <>
      <div
        className={`${
          language == "English" ? "text-end" : "text-start"
        }  py-10 rounded`}
      >
        <div className="mx-5">
          <TitleForSection
            Text={ChangeTextByLanguage("أفضل الأطباء", "Top Doctors")}
          />
        </div>

        <div className="my-14 flex bg-[#184c9917] py-3 justify-between items-center">
          <div className="bg-[#184c993a] w-10 h-24 py-20 px-12 rounded-r-full relative cursor-pointer">
            <div className="bg-[#184C99] w-16 h-24 absolute flex justify-center items-center left-0 top-7 rounded-r-full">
              <MdKeyboardArrowLeft className="text-3xl text-white" />
            </div>
          </div>

          <div className="flex items-center gap-10">
            <TopDoctorsDetails />
            <TopDoctorsDetails />
            <TopDoctorsDetails />
          </div>

          <div className="bg-[#184c993a] w-10 h-24 py-20 px-12 rounded-l-full relative cursor-pointer">
            <div className="bg-[#184C99] w-16 h-24 absolute flex justify-center items-center right-0 top-7 rounded-l-full">
              <MdKeyboardArrowRight className="text-3xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopDoctors;
