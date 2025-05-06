import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { memo, useEffect } from "react";
import FormSignUp from "../Components/FormSignUp/FormSignUp";
import useOpenWindow from "../Hooks/useOpenWindow";
import clsx from "clsx";

const SignUp = () => {
  const { Open } = useOpenWindow();
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
        className={clsx(
          "rounded-xl bg-white w-[40pc] max-sm:w-[25pc] p-10 relative max-sm:my-5 transition-all duration-500",
          Open ? "opacity-100 scale-100" : "opacity-0 scale-50"
        )}
      >
        <div className="bg-blue-500 w-full rounded-tr-lg rounded-tl-lg absolute top-0 left-0">
          <h1 className="text-center text-white font-bold p-1">Sign Up</h1>
        </div>
        <FormSignUp />
        <div
          className="flex items-center justify-center gap-2"
          onClick={async () => {
            try {
              window.location.href = "http://localhost:3000/auth/google";
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
