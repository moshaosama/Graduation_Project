import { ChangeEvent, useCallback, useMemo, useState } from "react";
import useConvertLanguage from "../../Hooks/useConvertLanguage";
import ButtonForm from "../Form/ButtonForm";

const FormSignUp = () => {
  const [formState, setFormState] = useState({
    userName: "",
    mobilePhone: "",
    Email: "",
    birthDate: "",
    Password: "",
  });

  const ChangeFromState = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const formConfig = useMemo(
    () => ({
      FormInputs: [
        {
          Title: "userName",
          Type: "text",
        },
        {
          Title: "mobilePhone",
          Type: "mobilePhone",
        },
        {
          Title: "Email",
          Type: "Email",
        },
        {
          Title: "birthDate",
          Type: "birthDate",
        },
        {
          Title: "Password",
          Type: "password",
        },
      ],
    }),
    []
  );

  const createUser = useCallback(() => {
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    }).then((res) => {
      return res.json();
    });
  }, [formState]);

  const { language } = useConvertLanguage();

  return (
    <div className="my-2">
      <form action="">
        {formConfig.FormInputs.map((el, index: number) => {
          return (
            <div key={index}>
              <p
                className={`flex ${
                  language == '"English"' ? "flex-row-reverse" : "flex"
                } max-sm:flex-col max-sm:items-start  justify-between items-center`}
              >
                <label
                  htmlFor=""
                  className={`font-bold ${
                    language == '"English"' ? "flex-row-reverse" : "flex"
                  } flex gap-1`}
                >
                  {el.Title} <span className="text-red-500">*</span>
                </label>

                <input
                  type={el.Type}
                  name={el.Title}
                  placeholder={el.Title}
                  className={`my-2  ${
                    language == '"English"' ? "text-end" : "text-start"
                  } w-96 max-sm:w-full rounded-lg p-1 border-[2px] border-black`}
                  onChange={ChangeFromState}
                />
              </p>
            </div>
          );
        })}
        <div className="flex max-sm:flex-col justify-between">
          <p>
            <label htmlFor="">Gender</label>
          </p>
          <p className="flex max-sm:mx-0 gap-10 mx-36">
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <br />
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
          </p>
        </div>

        <div className="text-center my-2">
          <p className="text-[10px]">
            By signing up you agree to our{" "}
            <a href="" className="text-blue-500 hover:underline ">
              Terms Of Use
            </a>
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <ButtonForm Value="Join Now" Width="72" handleClick={createUser} />
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
