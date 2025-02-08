import { Link } from "react-router-dom";
import { ProfileDataProps } from "../../Types/ProfileData/ProfileData";
import Inputs from "../Form/Inputs";
import { ChangeTextByLanguage } from "../../Language/Language";

const ProfileData = ({
  TitleEN,
  TitleAR,
  Lists,
  handleChange,
  handleClickSave,
}: ProfileDataProps) => {
  const Language = JSON.stringify(window.localStorage.getItem("Language"));
  return (
    <>
      <div className="bg-white h-fit pb-4 w-[50rem] max-sm:w-full rounded-lg">
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
            Language == '"English"'
              ? "flex-row  mx-[23.5pc]"
              : "flex-row-reverse mx-[23.5pc]"
          } gap-3 my-4  max-sm:mx-10`}
        >
          <div>
            <button
              className="rounded-lg text-white font-bold hover:bg-red-600 transition-all duration-300 bg-[red] w-28 p-1"
              onClick={handleClickSave}
            >
              {ChangeTextByLanguage("Save", "حفظ")}
            </button>
          </div>
          <Link to={"/"}>
            <div>
              <button className="rounded-lg text-black  hover:bg-[rgb(143,143,143)] transition-all duration-300 bg-[rgb(245,245,245)] w-28 p-1">
                {ChangeTextByLanguage("Cancel", "ألغاء")}
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileData;
