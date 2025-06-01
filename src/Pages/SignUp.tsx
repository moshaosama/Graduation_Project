import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { memo, useEffect, useRef } from "react";
import FormSignUp from "../features/SignUp/Components/FormSignUp/FormSignUp";
import useOpenWindow from "../Hooks/useOpenWindow";
import clsx from "clsx";
import useTransition from "../Hooks/useTransition";

const initalStyle = {
  opacity: "0",
  transform: "scale(0)",
};

const Styles = {
  opacity: "1",
  transform: "scale(1)",
};

const SignUp = () => {
  const { Open } = useOpenWindow();
  const SignUpForm = useRef(null);
  useTransition(SignUpForm, initalStyle, Styles);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const user = JSON.parse(decodeURIComponent(params.get("user")!));
  const Naviagte = useNavigate();

  useEffect(() => {
    if (user && user.accessToken) {
      window.localStorage.setItem("Token", user.accessToken);
      window.localStorage.setItem("User", JSON.stringify(user.profile));
      Naviagte("/");
    }
  }, [user, Naviagte]);

  return (
    <div className="flex justify-center items-center  h-screen bg-[#eee]">
      <div
        ref={SignUpForm}
        className={clsx(
          "rounded-xl bg-white w-[40pc] max-sm:w-[25pc] p-10 relative max-sm:my-5 transition-all duration-1000",
          Open ? "opacity-100 scale-100" : "opacity-0 scale-50"
        )}
      >
        <div className="absolute top-0 left-0 w-full bg-blue-500 rounded-tl-lg rounded-tr-lg">
          <h1 className="p-1 font-bold text-center text-white">Sign Up</h1>
        </div>
        <FormSignUp />
        <div
          className="flex items-center justify-center gap-2"
          onClick={async () => {
            try {
              window.location.href =
                "https://graduationprojectserver-production.up.railway.app/auth/google";
            } catch (error) {
              console.error("Authentication failed:", error);
            }
          }}
        >
          <div className=" flex items-center gap-2 px-5 py-2 mt-5 rounded-xl font-bold border-[1px] border-gray-500 w-fit cursor-pointer hover:bg-gray-300 transition-all duration-500">
            <FcGoogle className="text-2xl" />
            <p>Sign in with Google</p>
          </div>
        </div>

        <hr className="p-1 my-5" />
        <div className="text-center">
          <h4 className="text-gray-600 font-bold text-[12px]">
            Already Registered in BrandName ?{" "}
            <Link to={"/login"} className="text-blue-500 hover:underline">
              Login
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default memo(SignUp);
