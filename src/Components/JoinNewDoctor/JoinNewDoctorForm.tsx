import { FaLongArrowAltLeft } from "react-icons/fa";
import { container } from "../../Style";
import Inputs from "../Form/Inputs";
import { ChangeTextByLanguage } from "../../Language/Language";
import style from "./JoinNewDoctor.module.css";
import SelectOption from "../Form/SelectOption";
import { Link } from "react-router-dom";
import useConvertLanguage from "../../Hooks/useConvertLanguage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { useEffect } from "react";
import { fetchSpeciality } from "../../Store/Reducer/Speciality/SpecialityReducer";
import useFetch from "../../Hooks/useFetch";
const JoinNewDoctorForm = () => {
  const { Input } = style;
  const { language } = useConvertLanguage();
  const data: any = useFetch(
    "https://countriesnow.space/api/v0.1/countries/population/cities",
    "GET"
  );

  const state = useSelector((state: RootState) => state.Speciality);
  const Dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    Dispatch(fetchSpeciality());
  }, []);

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
                ChangeEvent={() => {}}
                Value=""
                Type="text"
                Active={false}
              />
              <Inputs
                Label={ChangeTextByLanguage("ألاسم التاني", "LastName")}
                placeHolder={ChangeTextByLanguage("ألاسم التاني", "LastName")}
                ChangeEvent={() => {}}
                Value=""
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
              />
              <SelectOption Options={state.data?.result?.slice(0, 10) ?? []} />
              <SelectOption Options={state.data?.result?.slice(0, 10) ?? []} />

              <input
                type="text"
                className={`${Input} max-sm:w-full shadow-sm`}
                placeholder="Email"
                name="Email"
              />
              <input
                type="password"
                className={`${Input} max-sm:w-full shadow-sm`}
                placeholder="Password"
                name="Password"
              />
            </div>
          </form>

          <div className="flex justify-center">
            <button className="bg-[#1F3FC3] p-2 mt-5 w-56 rounded-xl text-white font-semibold hover:bg-[#314491] transition-all duration-300">
              {ChangeTextByLanguage("أنشاء حساب", "Create Account")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinNewDoctorForm;
