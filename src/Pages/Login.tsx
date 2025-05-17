import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import FormLogin from "../features/Login/Components/FormLogin/FormLogin";
import clsk from "clsx";
import useOpenWindow from "../Hooks/useOpenWindow";

const Login = () => {
  const { Open } = useOpenWindow();

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#eee]">
        <div
          className={clsk(
            "rounded-xl bg-white w-96 p-10 relative transition-all duration-500",
            Open ? "opacity-100 scale-100" : "opacity-0 scale-50"
          )}
        >
          <div className="bg-blue-500 w-full rounded-tr-lg rounded-tl-lg absolute top-0 left-0">
            <h1 className="text-center text-white font-bold p-1">login</h1>
          </div>
          <FormLogin />
          <div className="w-full text-end my-2 hover:underline">
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
