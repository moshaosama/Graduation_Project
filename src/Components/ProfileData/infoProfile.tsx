import { useState } from "react";
import FormSignUp from "../Form/FormSignUp";
import { Link } from "react-router-dom";

const InfoProfile = () => {
  const User = JSON.parse(window.localStorage.getItem("User")!);
  const Language = JSON.stringify(window.localStorage.getItem("Language"));

  const [formState, setFormState] = useState({
    userName: User?.userName,
    mobilePhone: User?.mobilePhone,
    Email: User?.Email,
    birthDate: User?.birthDate,
  });

  function ChangeTextByLanguage(Text: string, newText: string) {
    if (Language == '"English"') {
      return Text;
    } else {
      return newText;
    }
  }

  const formConfig = {
    FormInputs: [
      {
        Title: ChangeTextByLanguage("userName", "ألاسم"),
        Type: "text",
        Placeholder: User.userName,
      },
      {
        Title: ChangeTextByLanguage("mobilePhone", "رقم الموبايل"),
        Type: "mobilePhone",
        Placeholder: User.mobilePhone,
      },
      {
        Title: ChangeTextByLanguage("Email", "البريد الالكتروني"),
        Type: "Email",
        Placeholder: User.Email,
      },
      {
        Title: ChangeTextByLanguage("birthDate", "تاريخ الميلاد"),
        Type: "birthDate",
        Placeholder: User.birthDate,
      },
    ],
  };

  const ChangeFromState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const HandleClickSave = () => {
    fetch(`http://localhost:3000/getprofile/${User?.Email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        window.localStorage.setItem("User", JSON.stringify(data?.result[0]));
        window.location.reload();
      });
  };

  return (
    <div className="bg-white pb-4 w-[50rem] max-sm:w-full rounded-lg">
      <div className="bg-[rgb(0,112,205)] text-center text-white font-bold p-1 rounded-lg">
        <h1>{ChangeTextByLanguage("Manage Profile", "ادارة الملف الشخصي")}</h1>
      </div>
      <div>
        <form action="" className="mx-10">
          {formConfig.FormInputs.map((el) => {
            return (
              <FormSignUp
                Name={el.Title}
                Placeholder={el.Placeholder}
                Type={el.Type}
                Title={el.Title}
                HandleChange={ChangeFromState}
                Margin="28"
              />
            );
          })}
        </form>
      </div>
      <div
        className={`flex ${
          Language == '"English"'
            ? "flex-row mx-[16.5pc]"
            : "flex-row-reverse mx-[23.5pc]"
        } gap-3  max-sm:mx-10`}
      >
        <div>
          <button
            className="rounded-lg text-white font-bold hover:bg-red-600 transition-all duration-300 bg-[red] w-28 p-1"
            onClick={HandleClickSave}
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
  );
};

export default InfoProfile;
