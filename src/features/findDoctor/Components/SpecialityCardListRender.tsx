import { useState } from "react";
import { FaStethoscope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import SpecialityCard from "../../../Components/Card/SpecialityCard";
import ChooseDropDown from "../../../Components/ChooseDropdown/ChooseDropDown";
import useChooseDoctor from "../../../Hooks/useChooseDoctor";
import useConvertLanguage from "../../../Hooks/useConvertLanguage";
import useDropDownState from "../../../Hooks/useDropDownState";
import { ChangeTextByLanguage, Traslation } from "../../../Language/Language";
import { fetchAllDoctor } from "../../../Store/Reducer/AllDoctor/AllDoctor";
import { fetchArea } from "../../../Store/Reducer/Area/AreaReducer";
import { fetchDoctor } from "../../../Store/Reducer/Doctor/DoctorReducer";
import { fetchLocation } from "../../../Store/Reducer/Location/LocationReducer";
import { fetchSpeciality } from "../../../Store/Reducer/Speciality/SpecialityReducer";
import { AppDispatch } from "../../../Store/Store";
import { useGetDoctorByName } from "../Hook/useGetDoctorByName";

const SpecialityCardListRender = () => {
  const { DropDownState, setDropDownState } = useDropDownState();
  const { choooseDoctor, setChoooseDoctor } = useChooseDoctor();
  const { register, handleSubmit, onSubmit } = useGetDoctorByName();
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
          ChangeTextByLanguage("أختار التخصص", "Choose a specialty") &&
        choooseDoctor.City === ChangeTextByLanguage("القاهره", "Choose City") &&
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
              lengthZero={el.Title === "Choose a specialty" ? true : false}
            />
          );
        })}
        <div className="max-h-[80px] max-2xl:h-[74px] max-2xl:w-52 border-2 border-solid border-gray-300">
          <form
            action=""
            className={`flex ${Traslation.ConvertFLex} flex flex-col gap-4 p-2`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <label
              className={`text-sm ${
                language == "English" ? "text-start" : "text-end"
              } font-semibold text-[#868686]`}
              htmlFor="personName"
            >
              {ChangeTextByLanguage("أو اكتب اسم", "Or search by name")}
            </label>

            <FaPersonBreastfeeding className="text-2xl text-[#0a84ff7a]" />
            <input
              type="text"
              id="personName"
              className="-mt-10 focus:border-none max-2xl:w-20"
              {...register("Name")}
            />
          </form>
        </div>
        <div
          className={`h-[4.6pc] max-2xlg:w-32 border border-solid ${
            language == "English" ? "rounded-l-xl" : "rounded-r-xl"
          } bg-blue-700 cursor-pointer hover:bg-blue-950 transition-all duration-500  border-[#9b9b9b] flex items-center justify-center w-96`}
          onClick={handleClickSave}
        >
          <div className={`flex ${Traslation.ConvertFLex} items-center gap-3`}>
            <CiSearch className="text-3xl font-bold text-white" />
            <h1 className="font-semibold text-white">
              {isLoading ? "Loading..." : ChangeTextByLanguage("بحث", "Search")}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialityCardListRender;
