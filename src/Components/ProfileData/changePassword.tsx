import { useState } from "react";
import ProfileData from "./ProfileData";
import { ChangeTextByLanguage } from "../../Language/Language";
import { useNavigate } from "react-router";

const ChangePassword = () => {
  const User = JSON.parse(window.localStorage.getItem("User")!);
  const Navigation = useNavigate();

  const [changeInput, setChangeInput] = useState({
    Password: "",
    newPassword: "",
  });

  const formConfig = [
    {
      Label: ChangeTextByLanguage("Password", "كلمه المرور"),
      Type: "password",
      placeHolder: "Enter a Password",
    },
    {
      Label: ChangeTextByLanguage("newPassword", "كلمه المرور الجديده"),
      Type: "password",
      placeHolder: "Enter a New_Password",
    },
  ];

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeInput({ ...changeInput, [e.target.name]: e.target.value });
  };

  const HandleClickSave = () => {
    fetch(`http://localhost:3000/changepassword/${User?.Email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changeInput),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        window.localStorage.removeItem("Token");
        Navigation("/login");
      });
  };

  return (
    <>
      <ProfileData
        TitleEN="Change Password"
        TitleAR="تغيير كلمه المرور"
        Lists={formConfig}
        handleChange={handleChangeInput}
        handleClickSave={HandleClickSave}
      />
    </>
  );
};

export default ChangePassword;
