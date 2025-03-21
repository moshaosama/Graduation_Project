import { FaStethoscope } from "react-icons/fa";
import { CgFolderAdd } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { useEffect, useMemo, useState } from "react";
import "../../../App.css";
import SpecialityCard from "../../Card/SpecialityCard";
import { ChangeTextByLanguage, Traslation } from "../../../Language/Language";
import ChooseDropDown from "../../ChooseDropdown/ChooseDropDown";

import { fetchSpeciality } from "../../../Store/Reducer/Speciality/SpecialityReducer";

import SpecialityCardListRender from "./SpecialityCardListRender/SpecialityCardListRender";

const FindDoctorsWep = () => {
  const Language = useMemo(
    () => JSON.stringify(window.localStorage.getItem("Language")!),
    []
  );

  const [data, setData] = useState({
    Speciality: ChangeTextByLanguage("أختار التخصص", "Choose specialty"),
    City: ChangeTextByLanguage("القاهره", "Choose city"),
    Area: ChangeTextByLanguage("اختار المنطقه", "Choose area"),
  });

  const [DropDownState, setDropDownState] = useState({
    Speciality: false,
    Location: false,
    Area: false,
  });

  const handleSpecialityState = () => {
    setDropDownState({
      ...DropDownState,
      Speciality: !DropDownState.Speciality,
    });
    window.scrollTo({ top: 510, behavior: "smooth" });
  };

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

  const hancleClick = (id: string) => {
    const ELement = document.getElementById(id);
    const allElements = document.querySelectorAll(".Active");
    allElements.forEach((ele) => {
      ele.classList.remove("Active");
    });
    ELement?.classList.add("Active");
  };

  useEffect(() => {
    const findDoctorContainer = document.getElementById("findDoctorContainer");

    if (findDoctorContainer) {
      findDoctorContainer.style.setProperty("top", "26pc");
      findDoctorContainer.style.setProperty("opacity", "100%");
    }
  });

  return (
    <>
      <div>
        <div
          className="bg-white  shadow-2xl w-[80pc] transition-all duration-500 opacity-5 text-[rgb(116,116,112)] p-5 z-50 absolute top-[20pc] left-80  rounded-2xl"
          id="findDoctorContainer"
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
              className={`rounded-xl flex ${Traslation.ConvertFLex} justify-center items-center`}
            >
              <SpecialityCard
                Title={"Choose specialty"}
                Label={"Select a specialty"}
                Width="72"
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
                className={`h-[4.6pc] border border-solid bg-blue-700 cursor-pointer hover:bg-blue-950 ${
                  Language == '"English"' ? "rounded-r-xl" : "rounded-l-xl"
                } border-[#9b9b9b]  flex items-center justify-center w-40`}
              >
                <div className="flex items-center gap-5">
                  <CiSearch className="text-white text-3xl font-bold" />
                  <h1 className="text-white font-semibold">Search</h1>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="absolute top-[20pc]">
          <img
            src="WhatsApp_Image_2025-02-26_at_19.26.09_761871f5-removebg-preview.png"
            alt="Form.png"
            style={{ width: "125pc", height: "25pc" }}
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default FindDoctorsWep;
