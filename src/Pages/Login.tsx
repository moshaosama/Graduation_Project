import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import FormLogin from "../features/Login/Components/FormLogin/FormLogin";
import clsk from "clsx";
import useOpenWindow from "../Hooks/useOpenWindow";

const initalStyle = {
  opacity: "0",
  transform: "scale(1.5)",
};

const Login = () => {
  const { Open } = useOpenWindow();

  return (
    <>
      <div className="flex justify-center opacity-100 transition-all duration-1000 scale-100 items-center h-screen bg-[#eee]">
        <div
          className={clsk(
            "rounded-xl bg-white w-96 p-10 relative transition-all duration-500",
            Open ? "opacity-100 scale-100" : "opacity-0 scale-50"
          )}
        >
          <div className="absolute top-0 left-0 w-full bg-blue-500 rounded-tl-lg rounded-tr-lg">
            <h1 className="p-1 font-bold text-center text-white">login</h1>
          </div>
          <FormLogin />
          <div className="w-full my-2 text-end hover:underline">
            <Link to={""} className="text-blue-500">
              Forget your password?
            </Link>
          </div>
          <hr className="p-1" />

          <div className="flex justify-between my-3">
            <Link to={"/"} className="underline">
              <div className="flex items-center gap-2">
                <span>
                  <FaArrowLeft />
                </span>
                <span>Back</span>
              </div>
            </Link>
            <Link to={"/"}>
              <div className="flex items-center gap-2">
                <span className="font-bold">New User?</span>
                <span className="text-blue-500 hover:underline">
                  <Link to={"/signup"}>Sign Up</Link>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
