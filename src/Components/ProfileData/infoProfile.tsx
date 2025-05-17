import { useCallback, useMemo, useState } from "react";
import ProfileData from "./ProfileData";
import { ChangeTextByLanguage } from "../../Language/Language";
import useNotifytoastify from "../../Hooks/useNotifytoastify";
import { ToastContainer, Bounce } from "react-toastify";

const InfoProfile = () => {
  const User = JSON.parse(window.localStorage.getItem("User") || "{}");

  const [formState, setFormState] = useState({
    userName: User?.userName,
    mobilePhone: User?.mobilePhone,
    Email: User?.Email,
    birthDate: User?.birthDate,
  });

  const { notifySuccess } = useNotifytoastify();

  const formConfig = useMemo(
    () => [
      {
        Label: ChangeTextByLanguage("ألاسم", "userName"),
        Type: "text",
        Placeholder: User.userName || "User?.displayName",
      },
      {
        Label: ChangeTextByLanguage("رقم الموبايل", "mobilePhone"),
        Type: "mobilePhone",
        Placeholder: User.mobilePhone || "Not Found",
      },
      {
        Label: ChangeTextByLanguage("البريد الالكتروني", "Email"),
        Type: "Email",
        Placeholder: User.Email || User?.emails?.[0]?.value,
      },
      {
        Label: ChangeTextByLanguage("تاريخ الميلاد", "birthDate"),
        Type: "birthDate",
        Placeholder: User.birthDate || "Not Found",
      },
    ],
    []
  );

  const ChangeFromState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const HandleClickSave = useCallback(() => {
    fetch(
      `https://graduationprojectserver-production.up.railway.app/changeprofile/${User?.Email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        window.localStorage.setItem("User", JSON.stringify(data?.result[0]));
      })
      .finally(() => {
        notifySuccess("User saved");
      });
  }, [formState]);

  return (
    <>
      <ProfileData
        TitleEN="ادارة الملف الشخصي "
        TitleAR="Manage Profile"
        Lists={formConfig}
        handleChange={ChangeFromState}
        handleClickSave={HandleClickSave}
        disabled={true}
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

export default InfoProfile;
