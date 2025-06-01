import { MdOutlineEmail } from "react-icons/md";

interface JoinNewDoctorFormProps {
  handleContinueWithEmail: () => void;
  handleContinueWithLogin: () => void;
}

const JoinNewDoctorForm = ({
  handleContinueWithEmail,
  handleContinueWithLogin,
}: JoinNewDoctorFormProps) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 mt-10">
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
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Login
          </span>
        </div>
      </div>
    </>
  );
};

export default JoinNewDoctorForm;
