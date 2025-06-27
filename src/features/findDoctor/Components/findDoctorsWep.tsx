import { FaStethoscope } from "react-icons/fa";
import { CgFolderAdd } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import useTransition from "../../../Hooks/useTransition";
import "../../../App.css";
import SpecialityCard from "../../../Components/Card/SpecialityCard";
import { ChangeTextByLanguage, Traslation } from "../../../Language/Language";
import ChooseDropDown from "../../../Components/ChooseDropdown/ChooseDropDown";

import { fetchSpeciality } from "../../../Store/Reducer/Speciality/SpecialityReducer";
import SpecialityCardListRender from "./SpecialityCardListRender";

import useGetLanguage from "../../../Hooks/useGetLanguage";
import { useGetDoctorsData } from "../Hook/useGetDoctorsData";

const FindDoctorsWep = () => {
  const { Language } = useGetLanguage();
  const {
    FilterSpeciality,
    Styles,
    initialStyle,
    setData,
    data,
    hancleClick,
    handleClickSave,
    handleSpecialityState,
    DropDownState,
    setDropDownState,
  } = useGetDoctorsData();
  useTransition(FilterSpeciality, initialStyle, Styles);

  const [ActiveSpecialityCard, setActiveSpecialityCard] =
    useState<boolean>(true);

  const Elements = [
    {
      id: "1",
      headerText: ChangeTextByLanguage("احجز دكتور", "Book a doctor"),
      Text: ChangeTextByLanguage(
        "الفحص أو الإجراء",
        "Examination or procedure"
      ),
      Element: <CgFolderAdd className="text-3xl" />,
      onclick: () => setActiveSpecialityCard(true),
    },
    {
      id: "2",
      headerText: ChangeTextByLanguage("مكالمة دكتور", "Telehealth"),
      Text: ChangeTextByLanguage(
        "المتابعة عبر مكالمة مع دكتور",
        "Call consultation with doctor"
      ),
      Element: <FaStethoscope className="text-3xl" />,
      onclick: () => setActiveSpecialityCard(false),
    },
  ];

  return (
    <>
      <div>
        <div
          ref={FilterSpeciality}
          className="bg-white max-2xl:w-[67pc] max-2xl:left-40 shadow-2xl w-[80pc] transition-all duration-1000  text-[rgb(116,116,112)] p-5 z-50 absolute  left-80  rounded-2xl"
        >
          <div
            className={`flex ${
              Language == '"English"' ? "flex-row" : "flex-row-reverse"
            }  items-center justify-center gap-60`}
          >
            {Elements.map((el) => {
              return (
                <div
                  key={el.id}
                  id={el.id}
                  className={`${el.id == "1" ? "Active" : null}`}
                  onClick={el.onclick}
                >
                  <div
                    className={`flex ${
                      Language == '"English"' ? "flex-row" : "flex-row-reverse"
                    } items-center gap-5 cursor-pointer  hover:text-[#0a84ff7a] transition-all duration-300`}
                    onClick={() => hancleClick(el.id)}
                  >
                    <div>{el.Element}</div>
                    <div className="text-xl" key={el.id}>
                      <h1
                        className={`font-bold ${
                          Language == '"English"' ? "text-start" : "text-end"
                        }`}
                      >
                        {el.headerText}
                      </h1>
                      <p className="text-sm font-bold">{el.Text}</p>
                    </div>
                  </div>
                  <hr className="bg-[#ddd]" />
                </div>
              );
            })}
          </div>
          <hr className="bg-[#ddd] w-full my-4 h-1" />
          {ActiveSpecialityCard ? (
            <>
              <SpecialityCardListRender />
            </>
          ) : (
            <div
              className={`rounded-xl flex ${Traslation.ConvertFLex} justify-center items-center mx-[26pc]`}
            >
              <SpecialityCard
                Title={data.Speciality}
                Label={"Select a specialty"}
                Width="72"
                lengthZero={true}
                Element={<FaStethoscope className="text-2xl" />}
                onCLick={handleSpecialityState}
                DropDown={
                  DropDownState.Speciality ? (
                    <ChooseDropDown
                      Row="Specialty_name"
                      stateData="Speciality"
                      fetchData={fetchSpeciality}
                      handleClick={(el: string) => {
                        setData({ ...data, Speciality: el }),
                          setDropDownState({
                            ...DropDownState,
                            Speciality: false,
                          });
                      }}
                    />
                  ) : (
                    <h1></h1>
                  )
                }
              />
              <div
                className={`h-[4.9pc] border border-solid ${
                  Language == "English" ? "rounded-l-xl" : "rounded-r-xl"
                } bg-blue-700 cursor-pointer hover:bg-blue-950 transition-all duration-500  border-[#9b9b9b] flex items-center justify-center w-96`}
                onClick={handleClickSave}
              >
                <div className="flex gap-5 items-center">
                  <CiSearch className="text-3xl font-bold text-white" />
                  <h1 className="font-semibold text-white">Search</h1>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="top-[20pc] relative">
          <div className="absolute right-0 bottom-24 w-10 h-40 bg-[#1e3fc1]"></div>
          <div>
            <img
              src="WhatsApp_Image_2025-02-26_at_19.26.09_761871f5-removebg-preview.png"
              alt="Form.png"
              loading="lazy"
              className="max-2xl:w-[125pc] w-[136pc] h-[25pc] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FindDoctorsWep;
