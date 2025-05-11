import { useEffect } from "react";
import { AppDispatch, RootState } from "../../../Store/Store";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpeciality } from "../../../Store/Reducer/Speciality/SpecialityReducer";
import { fetchArea } from "../../../Store/Reducer/Area/AreaReducer";
import { fetchLocation } from "../../../Store/Reducer/Location/LocationReducer";
import { useForm } from "react-hook-form";
import { fetchDoctor } from "../../../Store/Reducer/Doctor/DoctorReducer";
import { ChangeTextByLanguage } from "../../../Language/Language";
import { fetchAllDoctor } from "../../../Store/Reducer/AllDoctor/AllDoctor";
import { useNavigate } from "react-router";

const findDoctorResponsive = () => {
  const Speciality = useSelector((state: RootState) => state.Speciality);
  const Area = useSelector((state: RootState) => state.Area);
  const Location = useSelector((state: RootState) => state.Location);
  const dispatch = useDispatch<AppDispatch>();
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSpeciality());
    dispatch(fetchArea());
    dispatch(fetchLocation());
  }, []);

  const {
    handleSubmit,
    register,
    formState: { isLoading },
  } = useForm();

  const handleFormSubmit = async (data: any) => {
    try {
      if (
        data.Speciality ===
          ChangeTextByLanguage("أختار التخصص", "Choose a specialty") &&
        data.City === ChangeTextByLanguage("القاهره", "Choose City") &&
        data.Area === ChangeTextByLanguage("اختار المنطقه", "Choose Facility")
      ) {
        dispatch(fetchAllDoctor());
      } else {
        dispatch(fetchDoctor(data));
      }
      Navigate("/doctors");
    } catch (err) {
      throw new Error(err as string);
    }
  };

  return (
    <div className="flex justify-center w-full mx-2">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="border-2 grid grid-cols-2 gap-3 border-gray-300 p-2 w-96 rounded-xl"
      >
        <select
          className="p-5 bg-[#184c9928] col-span-2 rounded-xl font-bold border-2"
          {...register("Speciality", {
            required: "Speciality is required",
          })}
        >
          <option selected>Choose a specialty</option>
          {Speciality.data?.result?.map(
            (Speciality: { Specialty_name: string }, index: number) => (
              <option key={index} value={Speciality.Specialty_name}>
                {Speciality.Specialty_name}
              </option>
            )
          )}
        </select>

        <select
          className="p-5 bg-[#184c9928] col-span-1 rounded-xl font-bold"
          {...register("City", {
            required: "City is required",
          })}
        >
          <option selected>Choose City</option>
          {Location.data?.result?.map(
            (Location: { Location: string }, index: number) => (
              <option key={index} value={Location.Location}>
                {Location.Location}
              </option>
            )
          )}
        </select>
        <select
          className="p-5 bg-[#184c9928] col-span-1 rounded-xl font-bold"
          {...register("Area", {
            required: "Area is required",
          })}
        >
          <option selected>Choose Facility</option>
          {Area.data?.result?.map(
            (Clinic: { Clinic: string }, index: number) => (
              <option key={index} value={Clinic.Clinic}>
                {Clinic.Clinic}
              </option>
            )
          )}
        </select>
        <input
          type="text"
          placeholder="Or search by name"
          className="p-5 bg-[#184c9928] col-span-2 rounded-xl font-bold"
        />

        <button className="col-span-2 bg-[#1F3FC3] p-5 rounded-xl text-white font-bold">
          {isLoading ? "Loading..." : "Search"}
        </button>
      </form>
    </div>
  );
};

export default findDoctorResponsive;
