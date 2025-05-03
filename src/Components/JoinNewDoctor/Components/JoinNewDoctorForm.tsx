import { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import clsk from "clsx";

interface JoinNewDoctorFormProps {
  handleContinueWithEmail: () => void;
  handleContinueWithLogin?: () => void;
}

const JoinNewDoctorForm = ({
  handleContinueWithEmail,
  handleContinueWithLogin,
}: JoinNewDoctorFormProps) => {
  const [Open, setOpen] = useState(false);

  useEffect(() => {
    const OpenWindow = async () => {
      try {
        setOpen(true);
      } catch (err) {
        throw new Error(err as string);
      }
    };
    OpenWindow();
  }, [Open]);
  return (
    <>
      <div className="w-full h-full absolute top-0 left-0 bg-[#f0f0f0] flex justify-center items-center">
        <div
          className={clsk(
            "border-2 px-10 py-5 rounded-xl w-[40pc] max-sm:w-[24pc] transition-all duration-500 bg-white border-gray-500",
            Open ? "opacity-100 scale-100" : "opacity-0 scale-50"
          )}
        >
          <div className="flex flex-col items-center gap-10 justify-center mt-10">
            <button
              onClick={handleContinueWithEmail}
              className="flex items-center gap-3 hover:bg-[#f0f0f0] transition-all duration-200 border-gray-500 border-2 p-2 rounded-lg"
            >
              <MdOutlineEmail />
              <p>Continue with email</p>
            </button>
            <div className="flex gap-3 font-bold">
              <h1>Already have an account?</h1>
              <span
                onClick={handleContinueWithLogin}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinNewDoctorForm;
