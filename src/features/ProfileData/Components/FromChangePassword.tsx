import { Link } from "react-router";
import { ChangeTextByLanguage, Traslation } from "../../../Language/Language";
import { ProfileDataProps } from "../../../Types/ProfileData/ProfileData";
import useFormChangePassword from "../Hooks/useFormChangePassword";
import useConvertLanguage from "../../../Hooks/useConvertLanguage";
import clsx from "clsx";

const FormChangePassword = ({ TitleEN, TitleAR }: ProfileDataProps) => {
  const { register, HandleClickSave, handleSubmit } = useFormChangePassword();
  const { language } = useConvertLanguage();
  return (
    <>
      <div
        className={clsx(
          "pb-4 bg-white rounded-lg border-black border-solid shadow-xl border-[1px] h-fit max-sm:w-full",
          language === "English" ? "w-[60rem]" : "w-[60rem]"
        )}
      >
        <div className="bg-[rgb(0,112,205)] text-center text-white font-bold p-1 rounded-lg">
          <h1>{ChangeTextByLanguage(TitleEN, TitleAR)}</h1>
        </div>

        <form
          onSubmit={handleSubmit(HandleClickSave)}
          className="m-5 bg-white"
        >
          <p
            className={`flex ${Traslation.ConvertFLex} max-sm:flex-col my-2 gap-4 items-center  justify-between`}
          >
            <label
              htmlFor={"Password"}
              className={`font-bold flex gap-2 ${Traslation.ConvertFLex}`}
            >
              <span>{ChangeTextByLanguage("كلمه المرور", "Password")}</span>
              <span className="text-[red]">*</span>
            </label>

            <input
              type={"password"}
              className="w-96 px-3 max-sm:w-full h-10 bg-gray-200 mx-36 border-[#ddd] border-[1px] rounded-lg shadow-sm"
              {...register("Password", { required: "Password is required" })}
            />
          </p>

          <p
            className={`flex ${Traslation.ConvertFLex} max-sm:flex-col my-2 gap-4 items-center  justify-between`}
          >
            <label
              htmlFor={"newPassword"}
              className={`font-bold flex gap-2 ${Traslation.ConvertFLex}`}
            >
              <span>
                {ChangeTextByLanguage("كلمه المرور الجديده", "newPassword")}
              </span>
              <span className="text-[red]">*</span>
            </label>

            <input
              type={"password"}
              className="w-96 px-3 max-sm:w-full h-10 bg-gray-200 mx-36 border-[#ddd] border-[1px] rounded-lg shadow-sm"
              {...register("newPassword", {
                required: "mobilePhone is required",
              })}
            />
          </p>
          <p
            className={`flex ${
              language == "English" ? "flex-row-reverse" : "flex-row"
            } mx-96`}
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
};

export default FormChangePassword;
