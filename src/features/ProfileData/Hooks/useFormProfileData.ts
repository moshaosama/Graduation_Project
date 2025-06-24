import { useForm } from "react-hook-form";
import useGetUser from "../../../Hooks/useGetUser";
import { useCallback } from "react";
import useNotifytoastify from "../../../Hooks/useNotifytoastify";

const useFormProfileData = () => {
  const { User } = useGetUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: User.userName,
      mobilePhone: User.mobilePhone,
      Email: User.Email,
      birthDate: User.birthDate,
    },
  });
  const { notifySuccess } = useNotifytoastify();

  const HandleClickSave = useCallback((data: any) => {
    fetch(
      `https://graduationprojectserver-production.up.railway.app/changeprofile/${User?.Email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
  }, []);

  return { register, handleSubmit, errors, HandleClickSave };
};

export default useFormProfileData;
