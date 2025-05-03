import { useState } from "react";
import { FaStethoscope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import {
  ChangeTextByLanguage,
  Traslation,
} from "../../../../Language/Language";
import { fetchArea } from "../../../../Store/Reducer/Area/AreaReducer";
import { fetchLocation } from "../../../../Store/Reducer/Location/LocationReducer";
import { fetchSpeciality } from "../../../../Store/Reducer/Speciality/SpecialityReducer";
import ChooseDropDown from "../../../ChooseDropdown/ChooseDropDown";

import useChooseDoctor from "../../../../Hooks/useChooseDoctor";
import SpecialityCard from "../../../Card/SpecialityCard";
import { CiSearch } from "react-icons/ci";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../Store/Store";
import { fetchDoctor } from "../../../../Store/Reducer/Doctor/DoctorReducer";
import { useNavigate } from "react-router-dom";
import useConvertLanguage from "../../../../Hooks/useConvertLanguage";
import useDropDownState from "../../../../Hooks/useDropDownState";
import { fetchAllDoctor } from "../../../../Store/Reducer/AllDoctor/AllDoctor";

const SpecialityCardListRender = () => {
  const { DropDownState, setDropDownState } = useDropDownState();
  const { choooseDoctor, setChoooseDoctor } = useChooseDoctor();

  const { language } = useConvertLanguage();
  const [isLoading, setLoading] = useState(false);
  const Navigator = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

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

  const handleClickSave = async () => {
    try {
      setLoading(true);
      await new Promise((resolver) => setTimeout(resolver, 1000));
      setLoading(false);
      if (
        choooseDoctor.Speciality ===
          ChangeTextByLanguage("أختار التخصص", "Choose specialty") &&
        choooseDoctor.City === ChangeTextByLanguage("القاهره", "Choose city") &&
        choooseDoctor.Area ===
          ChangeTextByLanguage("اختار المنطقه", "Choose Facility")
      ) {
        dispatch(fetchAllDoctor());
      } else {
        dispatch(fetchDoctor(choooseDoctor));
      }
      Navigator("/doctors");
    } catch (err) {
      return err;
    }
  };

  const SpecialityCardList = [
    {
      Label: ChangeTextByLanguage("أنا ابحث عن دكتور", "Select a specialty"),
      Title: choooseDoctor.Speciality,
      Element: <FaStethoscope className="text-xl" />,
      onClick: handleSpecialityState,
      DropDown: DropDownState.Speciality ? (
        <ChooseDropDown
          Row="Specialty_name"
          stateData="Speciality"
          fetchData={fetchSpeciality}
          handleClick={(el: string) => {
            setChoooseDoctor({ ...choooseDoctor, Speciality: el }),
              setDropDownState({ ...DropDownState, Speciality: false });
          }}
        />
      ) : (
        <h1></h1>
      ),
    },
    {
      Label: ChangeTextByLanguage("في محافظه", "Select a  city"),
      Title: choooseDoctor.City,
      Element: <IoLocationSharp className="text-xl" />,
      onClick: handleLocationState,
      DropDown: DropDownState.Location ? (
        <ChooseDropDown
          Row="Location"
          stateData="Location"
          fetchData={fetchLocation}
          handleClick={(el: string) => {
            setChoooseDoctor({ ...choooseDoctor, City: el }),
              setDropDownState({ ...DropDownState, Location: false });
          }}
        />
      ) : (
        <h1></h1>
      ),
    },
    {
      Label: ChangeTextByLanguage("في منطقه", "Select a Facility"),
      Title: choooseDoctor.Area,
      Element: <IoLocationSharp className="text-xl" />,
      onClick: handleAreaState,
      DropDown: DropDownState.Area ? (
        <ChooseDropDown
          Row="Clinic"
          stateData="Area"
          fetchData={fetchArea}
          handleClick={(el: string) => {
            setChoooseDoctor({ ...choooseDoctor, Area: el }),
              setDropDownState({ ...DropDownState, Area: false });
          }}
        />
      ) : (
        <h1></h1>
      ),
    },
  ];

  return (
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
                language == "English" ? "text-start" : "text-end"
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
            language == "English" ? "rounded-l-xl" : "rounded-r-xl"
          } bg-blue-700 cursor-pointer hover:bg-blue-950 transition-all duration-500  border-[#9b9b9b] flex items-center justify-center w-96`}
          onClick={handleClickSave}
        >
          <div className={`flex ${Traslation.ConvertFLex} items-center gap-3`}>
            <CiSearch className="text-white text-3xl font-bold" />
            <h1 className="text-white font-semibold">
              {isLoading ? "Loading..." : ChangeTextByLanguage("بحث", "Search")}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialityCardListRender;
