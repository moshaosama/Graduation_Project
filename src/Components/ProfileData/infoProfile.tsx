import { useState } from "react";
import ProfileData from "./ProfileData";
import { ChangeTextByLanguage } from "../../Language/Language";

const InfoProfile = () => {
  const User = JSON.parse(window.localStorage.getItem("User") || "{}");

  const [formState, setFormState] = useState({
    userName: User?.userName,
    mobilePhone: User?.mobilePhone,
    Email: User?.Email,
    birthDate: User?.birthDate,
  });

  const formConfig = [
    {
      Label: ChangeTextByLanguage("userName", "ألاسم"),
      Type: "text",
      Placeholder: User.userName,
    },
    {
      Label: ChangeTextByLanguage("mobilePhone", "رقم الموبايل"),
      Type: "mobilePhone",
      Placeholder: User.mobilePhone,
    },
    {
      Label: ChangeTextByLanguage("Email", "البريد الالكتروني"),
      Type: "Email",
      Placeholder: User.Email,
    },
    {
      Label: ChangeTextByLanguage("birthDate", "تاريخ الميلاد"),
      Type: "birthDate",
      Placeholder: User.birthDate,
    },
  ];

  const ChangeFromState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const HandleClickSave = () => {
    fetch(`http://localhost:3000/changeprofile/${User?.Email}`, {
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
    <>
      <ProfileData
        TitleEN="Manage Profile"
        TitleAR="ادارة الملف الشخصي"
        Lists={formConfig}
        handleChange={ChangeFromState}
        handleClickSave={HandleClickSave}
      />
    </>
  );
};

export default InfoProfile;
