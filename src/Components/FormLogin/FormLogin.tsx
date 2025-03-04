import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router";
import ButtonForm from "../Form/ButtonForm";

const FormLogin = () => {
  const [formLogin, setFormLogin] = useState({
    Email: "",
    Password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const Navigation = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  };

  const handleClickFromLogin = useCallback(() => {
    setLoading(true);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formLogin),
    })
      .then((res) => {
        return res.json();
      })
      .then(async (data) => {
        if (data.statusbar === "error") {
          return;
        } else {
          await window.localStorage.setItem("Token", data?.Token);
          await window.localStorage.setItem(
            "User",
            JSON.stringify(data?.result)
          );
          Navigation("/");
          setLoading(false);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [formLogin, Navigation]);

  const FormLoginList = useMemo(
    () => [
      {
        Title: "Email",
        Type: "Email",
      },
      {
        Title: "Password",
        Type: "password",
      },
    ],
    []
  );

  return (
    <>
      <div className="my-7 ">
        <form action="">
          {FormLoginList.map((el, index: number) => (
            <p className="flex flex-col" key={index}>
              <label htmlFor={el.Title} className="font-bold">
                {el.Title} <span className="text-red-500">*</span>
              </label>
              <input
                type={el.Type}
                name={el.Title}
                id={el.Title}
                className="my-2 rounded-lg p-2 border-[2px] border-black"
                onChange={handleChange}
              />
            </p>
          ))}
        </form>
        <ButtonForm
          Width="full"
          Value={isLoading ? "Loading" : "Login"}
          handleClick={handleClickFromLogin}
        />
      </div>
    </>
  );
};

export default FormLogin;
