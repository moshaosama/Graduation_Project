import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import useConvertLanguage from "../../Hooks/useConvertLanguage";
import { ChangeTextByLanguage } from "../../Language/Language";
import TitleForSection from "../TitleForSection/TitleForSection";
import TopDoctorsDetails from "../TopDoctorsDetails/TopDoctorsDetails";

const TopDoctors = () => {
  const { language } = useConvertLanguage();
  return (
    <>
      <div
        className={`${
          language == "English" ? "text-end" : "text-start"
        }  py-10 rounded`}
      >
        <div className="mx-80">
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
