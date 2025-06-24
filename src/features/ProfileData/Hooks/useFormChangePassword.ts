import { useForm } from "react-hook-form";
import useGetUser from "../../../Hooks/useGetUser";
import useNotifytoastify from "../../../Hooks/useNotifytoastify";
import { useNavigate } from "react-router";

const useFormChangePassword = () => {
  const { User } = useGetUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Password: "",
      newPassword: "",
    },
  });
  const { notifyError } = useNotifytoastify();
  const Navigation = useNavigate();
  const HandleClickSave = (data: any) => {
    fetch(
      `https://graduationprojectserver-production.up.railway.app/changepassword/${User?.Email}`,
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
        if (data?.statusbar == "error") {
          notifyError(data.message);
        } else {
          window.localStorage.removeItem("Token");
          Navigation("/login");
        }
      });
  };

  return { register, handleSubmit, errors, HandleClickSave };
};

export default useFormChangePassword;
