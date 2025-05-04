import { useForm } from "react-hook-form";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/Store";
import { useEffect } from "react";
import { fetchSpeciality } from "../../../Store/Reducer/Speciality/SpecialityReducer";
import { fetchLocation } from "../../../Store/Reducer/Location/LocationReducer";
import { fetchJoinAsDoctor } from "../../../Store/Reducer/JoinAsDoctor/JoinAsDoctor";
import { useNavigate } from "react-router";

const PersonalInfo = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const allSpeciality = useSelector((state: RootState) => state.Speciality);
  const allLocation = useSelector((state: RootState) => state.Location);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchSpeciality());
    dispatch(fetchLocation());
  }, [dispatch]);
  const Navigate = useNavigate();

  const handleSubmitForm = (data: any) => {
    dispatch(fetchJoinAsDoctor(data));
    Navigate("/login");
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="grid grid-cols-2 mt-5 gap-3"
    >
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
          {...register("FirstName", { required: "First Name is required" })}
        />
        <p className="text-red-500 font-bold">
          {errors.FirstName?.message as string}
        </p>
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
          {...register("LastName", { required: "Last Name is required" })}
        />
        <p className="text-red-500 font-bold">
          {errors.LastName?.message as string}
        </p>
      </p>
      <p className="flex flex-col col-span-2 gap-1">
        <label
          htmlFor="Phone"
          className="text-gray-700 text-lg mx-1 font-semibold"
        >
          Phone
        </label>
        <input
          type="number"
          className="border-[1px] rounded-lg border-gray-500 p-2"
          {...register("Phone", { required: "Phone is required" })}
        />
        <p className="text-red-500 font-bold">
          {errors.Phone?.message as string}
        </p>
      </p>
      <p className="flex flex-col col-span-2 gap-1">
        <label
          htmlFor="Speciality"
          className="text-gray-700 text-lg mx-1 font-semibold"
        >
          Speciality
        </label>
        <select
          id="Speciality"
          className="border-[1px] rounded-lg border-gray-500 p-2"
          {...register("Speciality", { required: "Speciality is required" })}
        >
          <option selected>Speciality</option>
          {allSpeciality.data.result?.map(
            (speciality: { Specialty_name: string }, index: number) => (
              <option value={speciality.Specialty_name} key={index}>
                {speciality.Specialty_name}
              </option>
            )
          )}
        </select>
        <p className="text-red-500 font-bold">
          {errors.Speciality?.message as string}
        </p>
      </p>
      <p className="flex flex-col col-span-2 gap-1">
        <label
          htmlFor="Gender"
          className="text-gray-700 text-lg mx-1 font-semibold"
        >
          Gender
        </label>
        <select
          id="Gender"
          {...register("Gender", { required: "Gender is required" })}
          className="border-[1px] rounded-lg border-gray-500 p-2"
        >
          <option selected>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <p className="text-red-500 font-bold">
          {errors.Gender?.message as string}
        </p>
      </p>
      <p className="flex flex-col col-span-2 gap-1">
        <label
          htmlFor="City"
          className="text-gray-700 text-lg mx-1 font-semibold"
        >
          City
        </label>
        <select
          id="City"
          className="border-[1px] rounded-lg border-gray-500 p-2"
          {...register("City", { required: "City is required" })}
        >
          <option selected>City</option>
          {allLocation.data.result?.map(
            (speciality: { Location: string }, index: number) => (
              <option value={speciality.Location} key={index}>
                {speciality.Location}
              </option>
            )
          )}
        </select>
        <p className="text-red-500 font-bold">
          {errors.City?.message as string}
        </p>
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
          {...register("Email", { required: "Email is required" })}
        />
        <p className="text-red-500 font-bold">
          {errors.Email?.message as string}
        </p>
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
          {...register("Password", { required: "Password is required" })}
        />
        <p className="text-red-500 font-bold">
          {errors.Password?.message as string}
        </p>
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
