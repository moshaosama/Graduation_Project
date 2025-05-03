import { useForm } from "react-hook-form";
import { IoIosArrowForward } from "react-icons/io";

const PersonalInfo = () => {
  const {} = useForm();
  return (
    <form action="" className="grid grid-cols-2 mt-5 gap-4">
      <p className="flex flex-col col-span-1 gap-1">
        <label
          htmlFor="First Name"
          className="text-gray-700 text-lg mx-1 font-semibold"
        >
          FirstName
        </label>
        <input
          type="text"
          id="First Name"
          className="border-[1px] rounded-lg border-gray-500 p-2"
        />
      </p>
      <p className="flex flex-col col-span-1 gap-1">
        <label
          htmlFor="Last Name"
          className="text-gray-700 text-lg mx-1 font-semibold"
        >
          LastName
        </label>
        <input
          type="text"
          id="Last Name"
          className="border-[1px] rounded-lg border-gray-500 p-2"
        />
      </p>
      <p className="flex flex-col col-span-2 gap-1">
        <label
          htmlFor="Mobile Phone"
          className="text-gray-700 text-lg mx-1 font-semibold"
        >
          Mobile Phone
        </label>
        <input
          type="number"
          id="Mobile Phone"
          className="border-[1px] rounded-lg border-gray-500 p-2"
        />
      </p>
      <p className="flex flex-col col-span-2 gap-1">
        <label
          htmlFor="Speciality"
          className="text-gray-700 text-lg mx-1 font-semibold"
        >
          Speciality
        </label>
        <input
          type="text"
          id="Speciality"
          className="border-[1px] rounded-lg border-gray-500 p-2"
        />
      </p>
      <p className="flex flex-col col-span-2 gap-1">
        <label
          htmlFor="City"
          className="text-gray-700 text-lg mx-1 font-semibold"
        >
          City
        </label>
        <input
          type="text"
          id="City"
          className="border-[1px] rounded-lg border-gray-500 p-2"
        />
      </p>
      <p className="flex flex-col col-span-2 gap-1">
        <label
          htmlFor="Email"
          className="text-gray-700 text-lg mx-1 font-semibold"
        >
          Email
        </label>
        <input
          type="email"
          id="Email"
          className="border-[1px] rounded-lg border-gray-500 p-2"
        />
      </p>
      <p className="flex flex-col col-span-2 gap-1">
        <label
          htmlFor="Password"
          className="text-gray-700 text-lg mx-1 font-semibold"
        >
          Password
        </label>
        <input
          type="password"
          id="Password"
          className="border-[1px] rounded-lg border-gray-500 p-2"
        />
      </p>

      <div className="flex col-span-2 justify-center">
        <button className="flex items-center gap-2 hover:bg-blue-800 transition-all duration-300 bg-blue-600 text-white font-bold p-3 rounded-lg">
          <h1>Create Account</h1>
          <IoIosArrowForward />
        </button>
      </div>
    </form>
  );
};

export default PersonalInfo;
