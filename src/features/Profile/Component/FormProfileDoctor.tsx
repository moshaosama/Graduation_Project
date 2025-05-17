import { Link } from "react-router-dom";
import useGetDoctor from "../Hook/useGetDoctor";

const FormProfileDoctor = () => {
  const { User, Doctor } = useGetDoctor();

  return (
    <div>
      <h1 className="text-3xl max-sm:text-center mx-auto font-bold text-[#184C99]">
        Manage Profile
      </h1>
      <form className="grid grid-cols-2 gap-4 mt-10 w-full max-sm:mx-4">
        <div className="col-span-2">
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md p-2 w-[40pc] max-sm:w-[24pc]"
            value={User.userName}
          />
        </div>
        <div className="col-span-2">
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md p-2 w-[40pc] max-sm:w-[24pc]"
            value={User.mobilePhone}
          />
        </div>
        <div className="col-span-2">
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md p-2 w-[40pc] max-sm:w-[24pc]"
            value={Doctor?.data?.result?.[0]?.Specialty_name || ""}
          />
        </div>
        <div className="col-span-2">
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md p-2 w-[40pc] max-sm:w-[24pc]"
            value={User.Email}
          />
        </div>
        <div className="col-span-2">
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md p-2 w-[40pc] max-sm:w-[24pc]"
            value={
              Doctor?.data?.result?.[0]?.ConsultationFee?.toString() ||
              "Please Enter Your Consultation Fee"
            }
          />
        </div>
        <div className="col-span-2">
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md p-2 w-[40pc] max-sm:w-[24pc]"
            value={
              Doctor?.data?.result?.[0]?.Clinic || "Please Enter Your Clinic"
            }
          />
        </div>
        <div className="col-span-2 flex gap-5">
          <button className="bg-red-500 text-white  py-2 rounded-md w-52 max-sm:w-32 hover:bg-red-600 transition-all duration-200">
            Save
          </button>
          <Link to={"/"}>
            <button className="bg-blue-500 text-white py-2 rounded-md w-52 max-sm:w-32 hover:bg-blue-600 transition-all duration-200">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormProfileDoctor;
