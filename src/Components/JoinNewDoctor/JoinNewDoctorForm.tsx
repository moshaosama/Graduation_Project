import { FaLongArrowAltLeft } from "react-icons/fa";
import { container } from "../../Style";
import Inputs from "../Form/Inputs";
import { ChangeTextByLanguage } from "../../Language/Language";
import style from "./JoinNewDoctor.module.css";
import { Link } from "react-router-dom";
import useConvertLanguage from "../../Hooks/useConvertLanguage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { useEffect, useState } from "react";
import { fetchSpeciality } from "../../Store/Reducer/Speciality/SpecialityReducer";
import { fetchJoinAsDoctor } from "../../Store/Reducer/JoinAsDoctor/JoinAsDoctor";
// import useFetch from "../../Hooks/useFetch";
const JoinNewDoctorForm = () => {
  const { Input } = style;
  const { language } = useConvertLanguage();
  const state = useSelector((state: RootState) => state.Speciality);
  const Dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    Dispatch(fetchSpeciality());
  }, []);
  const [doctorData, setDoctorData] = useState({
    FirstName: "",
    LastName: "",
    Phone: "",
    Speciality: "",
    City: "Egypt",
    Email: "",
    Password: "",
  });
  // const data: any = useFetch(
  //   "https://countriesnow.space/api/v0.1/countries/population/cities",
  //   "GET"
  // );

  const handleChange = (
    el: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setDoctorData({ ...doctorData, [el.target.name]: el.target.value });
  };

  const handleClick = () => {
    Dispatch(fetchJoinAsDoctor(doctorData));
  };

  return (
    <>
      <div
        className={container}
        style={{
          justifyContent: "center",
        }}
      >
        <div className="border-[2px] border-[rgba(1,1,1,0.29)] rounded-xl my-14 shadow-2xl border-solid p-4">
          <div
            className={`flex items-center gap-5 ${
              language == "English" ? "justify-end" : "justify-start"
            } m-5`}
          >
            <Link to={"/"}>
              <FaLongArrowAltLeft className="text-[#1F3FC3] cursor-pointer" />
            </Link>
            <h1 className="text-2xl font-bold">
              {ChangeTextByLanguage(
                "أدخل معلوماتك الشخصية",
                "Enter your personal info"
              )}
            </h1>
          </div>
          <form action="" className="flex flex-col gap-3 mt-10">
            <div className="flex">
              <Inputs
                Label={ChangeTextByLanguage("ألاسم الاول", "FirstName")}
                placeHolder={ChangeTextByLanguage("ألاسم الاول", "FirstName")}
                ChangeEvent={handleChange}
                Type="text"
                Active={false}
              />
              <Inputs
                Label={ChangeTextByLanguage("ألاسم التاني", "LastName")}
                placeHolder={ChangeTextByLanguage("ألاسم التاني", "LastName")}
                ChangeEvent={handleChange}
                Type="text"
                Active={false}
              />
            </div>
            <div className="ml-4 flex flex-col gap-4">
              <input
                type="number"
                className={`${Input} max-sm:w-full shadow-sm`}
                placeholder="Mobile Number"
                name="Phone"
                onChange={handleChange}
              />
              <select
                className={`${Input}  w-full shadow-sm font-semibold text-[#414141]`}
                onChange={handleChange}
                name="Speciality"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {state?.data?.result?.map((option: any, index: number) => (
                  <option key={index} value={option.Specialty_name}>
                    {option.Specialty_name}
                  </option>
                ))}
              </select>

              <input
                type="text"
                className={`${Input} max-sm:w-full shadow-sm`}
                placeholder="Email"
                name="Email"
                onChange={handleChange}
              />
              <input
                type="password"
                className={`${Input} max-sm:w-full shadow-sm`}
                placeholder="Password"
                name="Password"
                onChange={handleChange}
              />
            </div>
          </form>

          <div className="flex justify-center">
            <button
              className="bg-[#1F3FC3] p-2 mt-5 w-56 rounded-xl text-white font-semibold hover:bg-[#314491] transition-all duration-300"
              onClick={handleClick}
            >
              {ChangeTextByLanguage("أنشاء حساب", "Create Account")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinNewDoctorForm;
