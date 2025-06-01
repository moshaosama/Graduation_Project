import { useCallback } from "react";

import ButtonForm from "../../../../Components/Form/ButtonForm";
import { Bounce, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useNotifytoastify from "../../../../Hooks/useNotifytoastify";

const FormLogin = () => {
  const Navigation = useNavigate();
  const { notifyError } = useNotifytoastify();

  const {
    register,
    formState: { errors, isLoading },
    handleSubmit,
  } = useForm();

  const handleSubmitForm = useCallback(
    (data: any) => {
      fetch("https://graduationprojectserver-production.up.railway.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          return res.json();
        })
        .then(async (data) => {
          if (data.statusbar === "error") {
            notifyError(data.message);
          } else {
            await window.localStorage.setItem("Token", data?.Token);
            await window.localStorage.setItem(
              "User",
              JSON.stringify(data?.result)
            );
            Navigation("/");
          }
        });
    },

    [Navigation]
  );

  return (
    <>
      <div className="my-7">
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="max-sm:-mx-6"
        >
          <p className="flex flex-col">
            <label htmlFor="Email" className="font-bold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="Email"
              className="my-2 rounded-lg p-2 border-[2px] border-black"
              {...register("Email", { required: "Email is required" })}
            />
          </p>
          <p className="font-bold text-red-500">
            {errors.Email?.message as string}
          </p>

          <p className="flex flex-col">
            <label htmlFor="Password" className="font-bold">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="Password"
              className="my-2 rounded-lg p-2 border-[2px] border-black"
              {...register("Password", { required: "Password is required" })}
            />
          </p>
          <p className="font-bold text-red-500">
            {errors.Password?.message as string}
          </p>

          <div className="flex justify-center max-sm:-mx-6 max-sm:mt-4">
            <ButtonForm
              Width="full"
              Value={isLoading ? "Loading..." : "Login"}
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
          </div>
        </form>
      </div>
    </>
  );
};

export default FormLogin;
