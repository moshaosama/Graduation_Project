import SpecialityCard from "../Card/SpecialityCard";
import { FaStethoscope } from "react-icons/fa";
import { CgFolderAdd } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { useState } from "react";
import "../../App.css";

const FindDoctorsWep = () => {
  const Language = JSON.stringify(window.localStorage.getItem("Language")!);
  const [ActiveSpecialityCard, setActiveSpecialityCard] =
    useState<boolean>(true);
  const Elements = [
    {
      id: "1",
      headerText: ChangeTextByLanguage("Book a doctor", "احجز دكتور"),
      Text: ChangeTextByLanguage(
        "Examination or procedure",
        "الفحص أو الإجراء"
      ),
      Element: <CgFolderAdd className="text-4xl" />,
      onclick: () => setActiveSpecialityCard(true),
    },
    {
      id: "2",
      headerText: ChangeTextByLanguage("Telehealth", "مكالمة دكتور"),
      Text: ChangeTextByLanguage(
        "Call consultation with doctor",
        "المتابعة عبر مكالمة مع دكتور"
      ),
      Element: <FaStethoscope className="text-4xl" />,
      onclick: () => setActiveSpecialityCard(false),
    },
  ];

  const SpecialityCardList = [
    {
      Label: "Select a specialty",
      Title: "Choose specialty",
      Element: <FaStethoscope className="text-2xl" />,
    },
    {
      Label: "In this city",
      Title: "Choose city",
      Element: <IoLocationSharp className="text-2xl" />,
    },
    {
      Label: "In this area",
      Title: "Choose area",
      Element: <IoLocationSharp className="text-2xl" />,
    },
  ];

  function ChangeTextByLanguage(Text: string, newText: string) {
    if (Language == '"English"') {
      return Text;
    } else {
      return newText;
    }
  }
  const hancleClick = (id: string) => {
    const ELement = document.getElementById(id);
    const allElements = document.querySelectorAll(".Active");
    allElements.forEach((ele) => {
      ele.classList.remove("Active");
    });
    ELement?.classList.add("Active");
  };
  return (
    <>
      <div className="bg-white shadow-2xl w-[75pc] text-[rgb(116,116,112)] p-5 absolute top-80 left-80  rounded-2xl">
        <div
          className={`flex ${
            Language == '"English"' ? "flex-row" : "flex-row-reverse"
          }  items-center justify-center gap-60`}
        >
          {Elements.map((el) => {
            return (
              <>
                <div
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
              </>
            );
          })}
        </div>
        <hr className="bg-[#ddd] w-full my-4 h-1" />
        {ActiveSpecialityCard ? (
          <div className="rounded-xl flex items-center">
            {SpecialityCardList.map((el) => {
              return (
                <SpecialityCard
                  Title={el.Title}
                  Label={el.Label}
                  Element={el.Element}
                />
              );
            })}
            <div className="border border-[#9b9b9b]">
              <form action="" className="p-2 flex flex-col gap-4">
                <label
                  className="text-sm font-semibold text-[#868686]"
                  htmlFor="personName"
                >
                  Or search by name
                </label>
                <div className="flex gap-2">
                  <FaPersonBreastfeeding className="text-2xl text-[#0a84ff7a]" />
                  <input
                    type="text"
                    id="personName"
                    className="focus:border-none"
                  />
                </div>
              </form>
            </div>
            <div className="h-20 border border-solid bg-red-600 border-[#9b9b9b] rounded-r-xl flex items-center justify-center w-96">
              <div className="flex items-center gap-5">
                <CiSearch className="text-white text-3xl font-bold" />
                <h1 className="text-white font-semibold">Search</h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl flex justify-center items-center">
            <SpecialityCard
              Title={"Choose specialty"}
              Label={"Select a specialty"}
              Element={<FaStethoscope className="text-2xl" />}
            />
            <div className="h-20 border border-solid bg-red-600 border-[#9b9b9b] rounded-r-xl flex items-center justify-center w-40">
              <div className="flex items-center gap-5">
                <CiSearch className="text-white text-3xl font-bold" />
                <h1 className="text-white font-semibold">Search</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FindDoctorsWep;
