import { CiSearch } from "react-icons/ci";
import { FaStethoscope } from "react-icons/fa";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

import SpecialityCard from "../../../Card/SpecialityCard";
import { useState } from "react";
import ChooseDropDown from "../../../ChooseDropdown/ChooseDropDown";
import { fetchSpeciality } from "../../../../Store/Reducer/Speciality/SpecialityReducer";
import { ChangeTextByLanguage } from "../../../../Language/Language";
import { fetchLocation } from "../../../../Store/Reducer/Location/LocationReducer";
import { fetchArea } from "../../../../Store/Reducer/Area/AreaReducer";

const FindDoctorContent = () => {
  const [DropDownState, setDropDownState] = useState({
    Speciality: false,
    Location: false,
    Area: false,
  });

  const [data, setData] = useState({
    Speciality: ChangeTextByLanguage("Choose specialty", "أختار التخصص"),
    City: ChangeTextByLanguage("Choose city", "القاهره"),
    Area: ChangeTextByLanguage("Choose area", "اختار المنطقه"),
  });

  const handleSpecialityState = () => {
    setDropDownState({
      ...DropDownState,
      Speciality: !DropDownState.Speciality,
    });
  };

  const handleLocationState = () => {
    setDropDownState({
      ...DropDownState,
      Location: !DropDownState.Location,
    });
  };

  const handleAreaState = () => {
    setDropDownState({
      ...DropDownState,
      Area: !DropDownState.Area,
    });
  };

  const SpecialityCardList = [
    {
      id: 1,
      Label: "Select a specialty",
      Title: "Choose specialty",
      Element: <FaStethoscope className="text-md" />,
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
      id: 2,
      Label: "In this city",
      Title: "Choose city",
      Element: <IoLocationSharp className="text-md" />,
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
      id: 3,
      Label: "In this area",
      Title: "Choose area",
      Element: <IoLocationSharp className="text-md" />,
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
    {
      id: 4,
      Label: "My insurance is",
      Title: "Choose insurance",
      Element: <IoLocationSharp className="text-md" />,
      onClick: fetchSpeciality,
      DropDown: DropDownState.Speciality ? <></> : <h1></h1>,
    },
  ];
  return (
    <>
      <div className="flex my-3">
        {SpecialityCardList.map((el) => {
          return (
            <>
              <div className={`bg-white h-fit`}>
                <SpecialityCard
                  Title={el.Title}
                  Label={el.Label}
                  Element={el.Element}
                  onCLick={el.onClick}
                  DropDown={el.DropDown}
                  Width="52"
                />
              </div>
            </>
          );
        })}
        <div className=" bg-white border max-h-[74px] border-[#9b9b9b]">
          <form action="" className="p-2 flex flex-col gap-2">
            <label
              className="text-sm font-semibold text-[#868686]"
              htmlFor="personName"
            >
              Or search by name
            </label>
            <div className="flex items-center gap-1">
              <FaPersonBreastfeeding className="text-md text-[#0a84ff7a]" />
              <input
                type="text"
                id="personName"
                className="focus:border-none "
                placeholder="Doctor name or hospital"
              />
            </div>
          </form>
        </div>
        <div className="h-[4.6pc]  bg-red-600 border-[#9b9b9b] rounded-r-xl flex items-center justify-center w-52">
          <div className="flex items-center gap-5">
            <CiSearch className="text-white text-3xl font-bold" />
            <h1 className="text-white font-semibold">Search</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindDoctorContent;
