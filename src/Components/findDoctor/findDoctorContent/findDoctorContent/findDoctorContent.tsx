import { CiSearch } from "react-icons/ci";
import { FaStethoscope } from "react-icons/fa";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";

const FindDoctorContent = () => {
  const SpecialityCardList = [
    {
      id: 1,
      Label: "Select a specialty",
      Title: "Choose specialty",
      Element: <FaStethoscope className="text-md" />,
    },
    {
      id: 2,
      Label: "In this city",
      Title: "Choose city",
      Element: <IoLocationSharp className="text-md" />,
    },
    {
      id: 3,
      Label: "In this area",
      Title: "Choose area",
      Element: <IoLocationSharp className="text-md" />,
    },
    {
      id: 4,
      Label: "My insurance is",
      Title: "Choose insurance",
      Element: <IoLocationSharp className="text-md" />,
    },
  ];
  return (
    <>
      <div className="flex my-3">
        {SpecialityCardList.map((el) => {
          return (
            <>
              <div
                className={`bg-white ${
                  el.id === 1 ? "rounded-l-xl" : ""
                }  w-52 py-1 px-3 border-[#ddd] border-[1px] shadow-md flex items-center justify-between hover:bg-[#0a84ff7a] cursor-pointer transition-all duration-300`}
              >
                <div className="flex flex-col gap-1">
                  <p className="text-[#808080] text-sm font-semibold">
                    {el.Label}
                  </p>
                  <div className="flex items-center  gap-2 text-[#0a84ff7a]">
                    {el.Element}
                    <h1 className="text-md">{el.Title}</h1>
                  </div>
                </div>
                <div>
                  <MdArrowDropDown className="text-3xl text-[#808080]" />
                </div>
              </div>
            </>
          );
        })}
        <div className=" bg-white">
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
        <div className="h-20  bg-red-600 border-[#9b9b9b] rounded-r-xl flex items-center justify-center w-52">
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
