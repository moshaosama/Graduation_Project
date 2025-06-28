import { MdKeyboardArrowRight } from "react-icons/md";
import ImageRender from "../../../../Components/ImageRender";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Store/Store";
import { useEffect } from "react";
import { fetchSpeciality } from "../../../../Store/Reducer/Speciality/SpecialityReducer";
import { ChangeTextByLanguage } from "../../../../Language/Language";
import TitleForSection from "../../../../Components/TitleForSection/TitleForSection";
import useConvertLanguage from "../../../../Hooks/useConvertLanguage";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchDoctor } from "../../../../Store/Reducer/Doctor/DoctorReducer";

const SpecialityForm = React.memo(({ image }: { image: string }) => {
  return (
    <>
      <div className="bg-[#184C99]  border-dashed border-[1px] transition-all duration-500 hover:border-[10px] border-white w-32 max-sm:w-20 h-32 max-sm:h-20 flex justify-center items-center rounded-full">
        <ImageRender src={image} alt="icon.png" width="16" />
      </div>
    </>
  );
});

const ExploreUs = () => {
  const state = useSelector((state: RootState) => state.Speciality);
  const dispatch = useDispatch<AppDispatch>();
  const { language } = useConvertLanguage();
  const Navigate = useNavigate();

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

  const handleClick = (data: any) => {
    dispatch(fetchDoctor(data));
    Navigate("/doctors");
  };

  return (
    <>
      <div className="mx-80 max-2xl:mx-40 max-sm:mx-5 max-sm:-mt-[50pc] flex flex-col  gap-5">
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
          className="flex max-sm:overflow-x-scroll max-sm:w-[24.4pc] justify-between gap-60 transition-all duration-500 opacity-5 items-center"
          id="SpecialityForm"
        >
          {state.data?.result
            ?.slice(0, 5)
            .map((el: { Specialty_name: string }, index: number) => {
              return (
                <div
                  key={index}
                  className="text-center cursor-pointer"
                  onClick={() => handleClick({ Speciality: el.Specialty_name })}
                >
                  <SpecialityForm image="WhatsApp_Image_2025-02-26_at_20.07.23_a843170e-removebg-preview.png" />
                  <p className="my-2 text-[#184C99] font-bold ">
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
          <Link to={"/specialty-directory"}>
            <p className="text-[#184C99] w-fit cursor-pointer ">
              {ChangeTextByLanguage(
                "عرض جميع التخصصات",
                "View all specialties"
              )}
            </p>
          </Link>
          <p>
            <MdKeyboardArrowRight className="text-xl text-[#184C99]" />
          </p>
        </div>
      </div>
    </>
  );
};

export default ExploreUs;
