import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import useConvertLanguage from "../../Hooks/useConvertLanguage";
import { ChangeTextByLanguage } from "../../Language/Language";
import TitleForSection from "../TitleForSection/TitleForSection";
import TopDoctorsDetails from "./TopDoctorsDetails/TopDoctorsDetails";
import { useState } from "react";

const TopDoctors = () => {
  const { language } = useConvertLanguage();
  return (
    <>
      <div
        className={`${
          language == "English" ? "text-end" : "text-start"
        }  py-10  rounded`}
      >
        <div className="mx-80">
          <TitleForSection
            Text={ChangeTextByLanguage("أفضل الأطباء", "Top Doctors")}
          />
        </div>

        <TopDoctorsDetails />
      </div>
    </>
  );
};

export default TopDoctors;
