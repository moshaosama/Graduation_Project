import useConvertLanguage from "../../Hooks/useConvertLanguage";
import { ChangeTextByLanguage } from "../../Language/Language";
import TitleForSection from "../TitleForSection/TitleForSection";
import TopDoctorsDetails from "./TopDoctorsDetails/TopDoctorsDetails";

const TopDoctors = () => {
  const { language } = useConvertLanguage();
  return (
    <>
      <div
        className={`${
          language == "English" ? "text-end" : "text-start"
        }  py-10  rounded`}
      >
        <div className="mx-80 max-sm:mx-5">
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
