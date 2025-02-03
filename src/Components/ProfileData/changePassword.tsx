import { Link } from "react-router-dom";

const ChangePassword = () => {
  const Language = JSON.stringify(window.localStorage.getItem("Language"));

  function ChangeTextByLanguage(Text: string, newText: string) {
    if (Language == '"English"') {
      return Text;
    } else {
      return newText;
    }
  }
  return (
    <div className="bg-white pb-4 w-[50rem] max-sm:w-full rounded-lg">
      <div className="bg-[rgb(0,112,205)] text-center text-white font-bold p-1 rounded-lg">
        <h1>{ChangeTextByLanguage("Change Passwrd", "تغيير كلمه المرور")}</h1>
      </div>
      <div>
        <form action="" className="mx-10">
          <p
            className={`flex ${
              Language == '"English"' ? "flex" : "flex-row-reverse"
            } max-sm:flex-col max-sm:items-start  justify-between items-center`}
          >
            <label
              className={`font-bold ${
                Language == '"English"' ? "flex" : "flex-row-reverse"
              } flex gap-1`}
            >
              {ChangeTextByLanguage("Password", "كلمه المرور ")}{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className={`my-2 ${
                Language == '"English"' ? "text-start" : "text-end"
              } w-96 max-sm:w-full rounded-lg p-1 border-[2px] border-black`}
            />
          </p>
          <p
            className={`flex ${
              Language == '"English"' ? "flex" : "flex-row-reverse"
            } max-sm:flex-col max-sm:items-start  justify-between items-center`}
          >
            <label
              className={`font-bold ${
                Language == '"English"' ? "flex" : "flex-row-reverse"
              } flex gap-1`}
            >
              {ChangeTextByLanguage("New Password", "كلمه المرور الجديده")}{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className={`my-2 ${
                Language == '"English"' ? "text-start" : "text-end"
              } w-96 max-sm:w-full rounded-lg p-1 border-[2px] border-black`}
            />
          </p>
        </form>
      </div>
      <div
        className={`flex ${
          Language == '"English"'
            ? "flex-row  mx-[16.5pc]"
            : "flex-row-reverse mx-[23.5pc]"
        } gap-3 my-4  max-sm:mx-10`}
      >
        <div>
          <button className="rounded-lg text-white font-bold hover:bg-red-600 transition-all duration-300 bg-[red] w-28 p-1">
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
  );
};

export default ChangePassword;
