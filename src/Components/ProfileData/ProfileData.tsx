import { Link } from "react-router-dom";
import { ProfileDataProps } from "../../Types/ProfileData/ProfileData";
import Inputs from "../Form/Inputs";
import { ChangeTextByLanguage } from "../../Language/Language";
import { memo, useState } from "react";
import useConvertLanguage from "../../Hooks/useConvertLanguage";

const ProfileData = memo(
  ({
    TitleEN,
    TitleAR,
    Lists,
    handleChange,
    handleClickSave,
  }: ProfileDataProps) => {
    const { language } = useConvertLanguage();
    const [Loading] = useState(false);
    return (
      <>
        <div className="bg-white border-[1px] shadow-xl border-solid border-black h-fit pb-4 w-[50rem] max-sm:w-full rounded-lg">
          <div className="bg-[rgb(0,112,205)] text-center text-white font-bold p-1 rounded-lg">
            <h1>{ChangeTextByLanguage(TitleEN, TitleAR)}</h1>
          </div>
          <div>
            <form action="" className="mx-10">
              {Lists.map((el: any) => {
                return (
                  <Inputs
                    Type={el.Type}
                    Label={el.Label}
                    placeHolder={el.Placeholder}
                    ChangeEvent={handleChange}
                  />
                );
              })}
            </form>
          </div>
          <div
            className={`flex ${
              language == "English" ? "flex-row-reverse" : "flex-row"
            } gap-3 my-4 mx-[17.5pc]  max-sm:mx-10`}
          >
            <div>
              <button
                className="rounded-lg text-white font-bold bg-[#5669FF] hover:bg-[#4e59ac] transition-all duration-300  w-28 p-1"
                onClick={handleClickSave}
              >
                {ChangeTextByLanguage("حفظ", Loading ? "Loading..." : "Save")}
              </button>
            </div>
            <Link to={"/"}>
              <div>
                <button className="rounded-lg text-black  hover:bg-[rgb(143,143,143)] transition-all duration-300 bg-[rgb(245,245,245)] w-28 p-1">
                  {ChangeTextByLanguage("ألغاء", "Cancel")}
                </button>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
);

export default ProfileData;
