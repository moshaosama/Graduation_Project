import { FaStethoscope } from "react-icons/fa";
import { CgFolderAdd } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { useEffect, useMemo, useState } from "react";
import "../../../App.css";
import SpecialityCard from "../../Card/SpecialityCard";
import { ChangeTextByLanguage, Traslation } from "../../../Language/Language";
import ChooseDropDown from "../../ChooseDropdown/ChooseDropDown";
import { fetchLocation } from "../../../Store/Reducer/Location/LocationReducer";
import { fetchSpeciality } from "../../../Store/Reducer/Speciality/SpecialityReducer";
import { fetchArea } from "../../../Store/Reducer/Area/AreaReducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";
import { fetchDoctor } from "../../../Store/Reducer/Doctor/DoctorReducer";
import { useNavigate } from "react-router-dom";

const FindDoctorsWep = () => {
  const Language = useMemo(
    () => JSON.stringify(window.localStorage.getItem("Language")!),
    []
  );
  const [isLoading, setLoading] = useState(false);
  const Navigator = useNavigate();

  const [data, setData] = useState({
    Speciality: ChangeTextByLanguage("أختار التخصص", "Choose specialty"),
    City: ChangeTextByLanguage("القاهره", "Choose city"),
    Area: ChangeTextByLanguage("اختار المنطقه", "Choose area"),
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleClickSave = async () => {
    setLoading(true);
    await new Promise((resolver) => setTimeout(resolver, 1000));
    setLoading(false);
    dispatch(fetchDoctor(data));
    Navigator("/doctors");
  };

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

  const handleLocationState = () => {
    setDropDownState({
      ...DropDownState,
      Location: !DropDownState.Location,
    });
    window.scrollTo({ top: 510, behavior: "smooth" });
  };

  const handleAreaState = () => {
    setDropDownState({
      ...DropDownState,
      Area: !DropDownState.Area,
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

  const SpecialityCardList = [
    {
      Label: ChangeTextByLanguage("أنا ابحث عن دكتور", "Select a specialty"),
      Title: data.Speciality,
      Element: <FaStethoscope className="text-xl" />,
      onClick: handleSpecialityState,
      DropDown: DropDownState.Speciality ? (
        <ChooseDropDown
          Row="Specialty_name"
          stateData="Speciality"
          fetchData={fetchSpeciality}
          handleClick={(el: string) => {
            setData({ ...data, Speciality: el }),
              setDropDownState({ ...DropDownState, Speciality: false });
          }}
        />
      ) : (
        <h1></h1>
      ),
    },
    {
      Label: ChangeTextByLanguage("في محافظه", "In this city"),
      Title: data.City,
      Element: <IoLocationSharp className="text-xl" />,
      onClick: handleLocationState,
      DropDown: DropDownState.Location ? (
        <ChooseDropDown
          Row="Location"
          stateData="Location"
          fetchData={fetchLocation}
          handleClick={(el: string) => {
            setData({ ...data, City: el }),
              setDropDownState({ ...DropDownState, Location: false });
          }}
        />
      ) : (
        <h1></h1>
      ),
    },
    {
      Label: ChangeTextByLanguage("في منطقه", "In this area"),
      Title: data.Area,
      Element: <IoLocationSharp className="text-xl" />,
      onClick: handleAreaState,
      DropDown: DropDownState.Area ? (
        <ChooseDropDown
          Row="Clinic"
          stateData="Area"
          fetchData={fetchArea}
          handleClick={(el: string) => {
            setData({ ...data, Area: el }),
              setDropDownState({ ...DropDownState, Area: false });
          }}
        />
      ) : (
        <h1></h1>
      ),
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
              <div
                className={`rounded-xl ${Traslation.ConvertFLex} flex  items-center`}
              >
                {SpecialityCardList.map((el) => {
                  return (
                    <SpecialityCard
                      key={el.Title}
                      onCLick={el.onClick}
                      Title={el.Title}
                      Label={el.Label}
                      Element={el.Element}
                      DropDown={el.DropDown}
                      Width="72"
                    />
                  );
                })}
                <div className="border max-h-[74px] border-[#9b9b9b]">
                  <form action="" className="p-2 flex flex-col  gap-4">
                    <label
                      className={`text-sm ${
                        Language == '"English"' ? "text-start" : "text-end"
                      } font-semibold text-[#868686]`}
                      htmlFor="personName"
                    >
                      {ChangeTextByLanguage("أو اكتب اسم", "Or search by name")}
                    </label>
                    <div className={`flex ${Traslation.ConvertFLex} gap-2`}>
                      <FaPersonBreastfeeding className="text-2xl text-[#0a84ff7a]" />
                      <input
                        type="text"
                        id="personName"
                        className="focus:border-none"
                      />
                    </div>
                  </form>
                </div>
                <div
                  className={`h-[4.6pc] border border-solid ${
                    Language == '"English"' ? "rounded-l-xl" : "rounded-r-xl"
                  } bg-blue-700 cursor-pointer hover:bg-blue-950 transition-all duration-500  border-[#9b9b9b] flex items-center justify-center w-96`}
                  onClick={handleClickSave}
                >
                  <div
                    className={`flex ${Traslation.ConvertFLex} items-center gap-3`}
                  >
                    <CiSearch className="text-white text-3xl font-bold" />
                    <h1 className="text-white font-semibold">
                      {isLoading
                        ? "Loading..."
                        : ChangeTextByLanguage("بحث", "Search")}
                    </h1>
                  </div>
                </div>
              </div>
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
            src="src\assets\WhatsApp_Image_2025-02-26_at_19.26.09_761871f5-removebg-preview.png"
            alt="Form.png"
            style={{ width: "125pc", height: "25pc" }}
          />
        </div>
      </div>
    </>
  );
};

export default FindDoctorsWep;
