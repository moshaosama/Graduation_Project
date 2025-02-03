import { useState } from "react";
import FormSignUp from "../Form/FormSignUp";
import { Link } from "react-router-dom";

const InfoProfile = () => {
  const User = JSON.parse(window.localStorage.getItem("User")!);

  const [formState, setFormState] = useState({
    userName: "",
    mobilePhone: "",
    Email: "",
    birthDate: "",
    Password: "",
  });

  const formConfig = {
    FormInputs: [
      {
        Title: "userName",
        Type: "text",
        Placeholder: User.userName,
      },
      {
        Title: "mobilePhone",
        Type: "mobilePhone",
        Placeholder: User.mobilePhone,
      },
      {
        Title: "Email",
        Type: "Email",
        Placeholder: User.Email,
      },
      {
        Title: "birthDate",
        Type: "birthDate",
        Placeholder: User.birthDate,
      },
    ],
  };

  const ChangeFromState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-white pb-4 w-[50rem] rounded-lg">
      <div className="bg-[rgb(0,112,205)] text-center text-white font-bold p-1 rounded-lg">
        <h1>Manage Profile</h1>
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
      <div className="flex flex-row gap-3 mx-[16.5pc]">
        <div>
          <button className="rounded-lg text-white font-bold hover:bg-red-600 transition-all duration-300 bg-[red] w-28 p-1">
            Save
          </button>
        </div>
        <Link to={"/"}>
          <div>
            <button className="rounded-lg text-black  hover:bg-[rgb(143,143,143)] transition-all duration-300 bg-[rgb(245,245,245)] w-28 p-1">
              Cancel
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InfoProfile;
