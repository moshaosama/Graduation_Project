import { ProfileDataProps } from "../../../Types/ProfileData/ProfileData";
import { ChangeTextByLanguage, Traslation } from "../../../Language/Language";
import { memo } from "react";
import useFormProfileData from "../Hooks/useFormProfileData";
import useConvertLanguage from "../../../Hooks/useConvertLanguage";
import { Link } from "react-router";

const ProfileData = memo(({ TitleEN, TitleAR }: ProfileDataProps) => {
  const { register, handleSubmit, HandleClickSave } = useFormProfileData();
  const { language } = useConvertLanguage();
  return (
    <>
      <div className="bg-white border-[1px] shadow-xl border-solid border-black h-fit pb-4 w-[50rem] max-sm:w-full rounded-lg">
        <div className="bg-[rgb(0,112,205)] text-center text-white font-bold p-1 rounded-lg">
          <h1>{ChangeTextByLanguage(TitleEN, TitleAR)}</h1>
        </div>

        <form
          onSubmit={handleSubmit(HandleClickSave)}
          className="grid m-5 bg-white grid-col-1"
        >
          <p
            className={`flex ${Traslation.ConvertFLex} max-sm:flex-col my-2 gap-4 items-center  justify-between`}
          >
            <label
              htmlFor={"userName"}
              className={`font-bold flex gap-2 ${Traslation.ConvertFLex}`}
            >
              <span>userName</span>
              <span className="text-[red]">*</span>
            </label>

            <input
              type={"text"}
              className="w-96 px-3 max-sm:w-full h-10 bg-gray-200 mx-36 border-[#ddd] border-[1px] rounded-lg shadow-sm"
              {...register("userName", { required: "userName is required" })}
            />
          </p>

          <p
            className={`flex ${Traslation.ConvertFLex} max-sm:flex-col my-2 gap-4 items-center  justify-between`}
          >
            <label
              htmlFor={"mobilePhone"}
              className={`font-bold flex gap-2 ${Traslation.ConvertFLex}`}
            >
              <span>mobilePhone</span>
              <span className="text-[red]">*</span>
            </label>

            <input
              type={"text"}
              className="w-96 px-3 max-sm:w-full h-10 bg-gray-200 mx-36 border-[#ddd] border-[1px] rounded-lg shadow-sm"
              {...register("mobilePhone", {
                required: "mobilePhone is required",
              })}
            />
          </p>

          <p
            className={`flex ${Traslation.ConvertFLex} max-sm:flex-col my-2 gap-4 items-center  justify-between`}
          >
            <label
              htmlFor={"Email"}
              className={`font-bold flex gap-2 ${Traslation.ConvertFLex}`}
            >
              <span>Email</span>
              <span className="text-[red]">*</span>
            </label>

            <input
              type={"text"}
              className="w-96 px-3 max-sm:w-full h-10 bg-gray-200 mx-36 border-[#ddd] border-[1px] rounded-lg shadow-sm"
              {...register("Email", {
                required: "Email is required",
              })}
            />
          </p>
          <p
            className={`flex ${Traslation.ConvertFLex} max-sm:flex-col my-2 gap-4 items-center  justify-between`}
          >
            <label
              htmlFor={"birthDate"}
              className={`font-bold flex gap-2 ${Traslation.ConvertFLex}`}
            >
              <span>birthDate</span>
              <span className="text-[red]">*</span>
            </label>

            <input
              type={"text"}
              className="w-96 px-3 max-sm:w-full h-10 bg-gray-200 mx-36 border-[#ddd] border-[1px] rounded-lg shadow-sm"
              {...register("birthDate", {
                required: "birthDate is required",
              })}
            />
          </p>

          <p
            className={`flex ${
              language == "English" ? "flex-row-reverse" : "flex-row"
            } gap-3 my-4 mx-[19pc]  max-sm:mx-10`}
          >
            <div>
              <button className="rounded-lg text-white font-bold bg-[#5669FF] hover:bg-[#4e59ac] transition-all duration-300  w-28 p-1">
                {ChangeTextByLanguage("حفظ", "Save")}
              </button>
            </div>
            <Link to={"/"}>
              <div>
                <button className="rounded-lg text-black  hover:bg-[rgb(143,143,143)] transition-all duration-300 bg-[rgb(245,245,245)] w-28 p-1">
                  {ChangeTextByLanguage("ألغاء", "Cancel")}
                </button>
              </div>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
});

export default ProfileData;
