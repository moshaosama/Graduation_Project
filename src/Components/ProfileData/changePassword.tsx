import { useState } from "react";
import ProfileData from "./ProfileData";
import { ChangeTextByLanguage } from "../../Language/Language";
import { useNavigate } from "react-router";
import useNotifytoastify from "../../Hooks/useNotifytoastify";
import { Bounce, ToastContainer } from "react-toastify";

const ChangePassword = () => {
  const User = JSON.parse(window.localStorage.getItem("User")!);
  const Navigation = useNavigate();
  const { notifyError } = useNotifytoastify();

  const [changeInput, setChangeInput] = useState({
    Password: "",
    newPassword: "",
  });

  const formConfig = [
    {
      Label: ChangeTextByLanguage("كلمه المرور", "Password"),
      Type: "password",
      placeHolder: "Enter a Password",
    },
    {
      Label: ChangeTextByLanguage("كلمه المرور الجديده", "newPassword"),
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
      .then((data) => {
        if (data?.statusbar == "error") {
          notifyError(data.message);
        } else {
          window.localStorage.removeItem("Token");
          Navigation("/login");
        }
      });
  };

  return (
    <>
      <ProfileData
        TitleEN="تغيير كلمه المرور"
        TitleAR="Change Password"
        Lists={formConfig}
        handleChange={handleChangeInput}
        handleClickSave={HandleClickSave}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
};

export default ChangePassword;
