import { MdKeyboardArrowRight } from "react-icons/md";
import ImageRender from "../ImageRender";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { useEffect } from "react";
import { fetchSpeciality } from "../../Store/Reducer/Speciality/SpecialityReducer";
import { ChangeTextByLanguage } from "../../Language/Language";
import TitleForSection from "../TitleForSection/TitleForSection";
import useConvertLanguage from "../../Hooks/useConvertLanguage";

const SpecialityForm = ({ image }: { image: string }) => {
  return (
    <>
      <div className="bg-[#184C99] w-32 h-32 flex justify-center items-center rounded-full">
        <ImageRender src={image} alt="icon.png" width="16" />
      </div>
    </>
  );
};

const ExploreUs = () => {
  const state = useSelector((state: RootState) => state.Speciality);
  const dispatch = useDispatch<AppDispatch>();
  const { language } = useConvertLanguage();

  useEffect(() => {
    dispatch(fetchSpeciality());
  }, []);

  window.addEventListener("scroll", () => {
    const SpecialityForm = document.getElementById("SpecialityForm");
    if (window.scrollY >= 300) {
      if (SpecialityForm) {
        SpecialityForm.style.setProperty("gap", "20px");
        SpecialityForm.style.setProperty("opacity", "100%");
      }
    }
  });

  return (
    <>
      <div className="flex flex-col  gap-5">
        <TitleForSection
          Text={ChangeTextByLanguage("استكشفنا", "Explore US")}
        />
        <div
          className={`flex items-center ${
            language == "English" ? "justify-end" : " "
          }  gap-10 text-xl font-semibold text-[#184C99]`}
        >
          <p>{ChangeTextByLanguage("التخصصات", "Specialties")}</p>
          <p>{ChangeTextByLanguage("الأعلى تقييما", "Top rated")}</p>
        </div>
        <div
          className="flex justify-between gap-60 transition-all duration-500 opacity-5 items-center"
          id="SpecialityForm"
        >
          {state.data?.result
            ?.slice(0, 5)
            .map((el: { Specialty_name: string }, index: number) => {
              return (
                <div key={index} className="text-center cursor-pointer">
                  <SpecialityForm image="src\assets\WhatsApp_Image_2025-02-26_at_20.07.23_a843170e-removebg-preview.png" />
                  <p className="my-2 text-[#184C99] font-bold">
                    {el.Specialty_name}
                  </p>
                </div>
              );
            })}
        </div>

        <div
          className={`flex items-center ${
            language == "English" ? "justify-end" : ""
          } hover:underline w-full`}
        >
          <p className="text-[#184C99] w-fit cursor-pointer ">
            {ChangeTextByLanguage("عرض جميع التخصصات", "View all specialties")}
          </p>
          <p>
            <MdKeyboardArrowRight className="text-xl text-[#184C99]" />
          </p>
        </div>
      </div>
    </>
  );
};

export default ExploreUs;
