import { useParams } from "react-router-dom";
import { MdOutlineEdit, MdOutlineHealthAndSafety } from "react-icons/md";
import { ImageFemale, ImageMale } from "../../../Utils/Images";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllDoctor } from "../../../Store/Reducer/AllDoctor/AllDoctor";
import { RootState, AppDispatch } from "../../../Store/Store";
import { User } from "../../../Types/Navbar";
import useFormTransition, { OpenModelTypes } from "./Hooks/useFormTransition";
import clsx from "clsx";
import { useForm } from "react-hook-form";

const DetailsProfileDoctor = () => {
  const { id } = useParams();
  const Doctors = useSelector((state: RootState) => state.allDoctor);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllDoctor());
  }, [dispatch]);

  const Doctor =
    Doctors?.data?.result?.find(
      (el: { DoctorID: number }) => el.DoctorID === +id!
    ) || undefined;

  const User: User = JSON.parse(window.localStorage.getItem("User")!);

  const { OpenModel, handleOpenModel } = useFormTransition();

  if (!Doctor) {
    return (
      <div className="w-full text-center py-20">
        <h1 className="text-xl text-red-600 font-bold">
          Doctor not found or still loading...
        </h1>
      </div>
    );
  }

  const { handleSubmit, register } = useForm();
  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="w-full">
        <div className="text-gray-500 font-semibold flex items-center max-sm:w-fit gap-2">
          <h1 className="underline cursor-pointer">Home</h1> {" > "}
          <h1 className="underline cursor-pointer">Find a specialist</h1>
        </div>
        <div className="my-10 flex gap-5 w-fit">
          <img
            src={Doctor?.Gender === "Male" ? ImageMale : ImageFemale}
            alt="ImageDoctor.png"
            loading="lazy"
            decoding="async"
            className="w-52 object-cover rounded"
          />
          <div className="flex justify-between flex-col">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-10">
                <h1 className="text-blue-700 text-xl font-bold flex items-center gap-4">
                  {Doctor.Name}{" "}
                  {User?.DoctorId === Doctor.DoctorID && (
                    <MdOutlineEdit
                      className="text-gray-500 text-xl cursor-pointer"
                      onClick={() => handleOpenModel(OpenModelTypes.Name)}
                    />
                  )}
                </h1>
                <input
                  type="text"
                  className={clsx(
                    "rounded-lg transition-all duration-300 border-black",
                    OpenModel.Name ? "w-96 border-2 p-1" : "w-0"
                  )}
                  {...register("Name")}
                />
              </div>
              <div className="flex items-center">
                <MdOutlineHealthAndSafety className="text-2xl text-blue-400" />
                <div className="flex items-center gap-10">
                  <h1 className="font-semibold flex items-center gap-4">
                    {Doctor.Specialty_name}
                    {User?.DoctorId === Doctor.DoctorID && (
                      <MdOutlineEdit
                        className="text-gray-500 text-xl cursor-pointer"
                        onClick={() =>
                          handleOpenModel(OpenModelTypes.Speciality)
                        }
                      />
                    )}
                  </h1>
                  <input
                    type="text"
                    className={clsx(
                      "rounded-lg transition-all duration-300 border-black",
                      OpenModel.Speciality ? "w-96 border-2 p-1" : "w-0"
                    )}
                    {...register("Specialty_name")}
                  />
                </div>
              </div>
              <p className="text-gray-700 font-medium max-sm:w-20 flex items-center gap-4">
                {Doctor?.Location || "no Location"}
                {User?.DoctorId === Doctor.DoctorID && (
                  <MdOutlineEdit
                    className="text-gray-500 text-xl cursor-pointer"
                    onClick={() => handleOpenModel(OpenModelTypes.Location)}
                  />
                )}
                <input
                  type="text"
                  className={clsx(
                    "rounded-lg transition-all duration-300 border-black",
                    OpenModel.Location ? "w-96 border-2 p-1" : "w-0"
                  )}
                  {...register("Location")}
                />
              </p>
              <p className="flex gap-2">
                Fees:
                <span className="font-bold flex items-center gap-4">
                  {Doctor?.ConsultationFee} EGB
                  {User?.DoctorId === Doctor.DoctorID && (
                    <MdOutlineEdit
                      className="text-gray-500 text-xl cursor-pointer"
                      onClick={() => handleOpenModel(OpenModelTypes.Fees)}
                    />
                  )}
                </span>
                <input
                  type="text"
                  className={clsx(
                    "rounded-lg transition-all duration-300 border-black",
                    OpenModel.Fees ? "w-96 border-2 p-1" : "w-0"
                  )}
                  {...register("ConsultationFee")}
                />
              </p>
            </div>
            <div className="border-[1px] font-semibold hover:bg-red-500 hover:text-black cursor-pointer transition-all duration-300 border-red-500 border-solid w-fit px-3 py-1 rounded-full">
              <p>01015151515</p>
            </div>
          </div>
        </div>
        <div className="justify-between flex max-sm:flex-col w-full mx-56 max-sm:mx-0 ">
          <div className="flex gap-4 items-center w-fit">
            <div className="flex items-center">
              <img
                src="/1_k5m8q1rRpdQ-H5NogaHnBQ-removebg-preview.png"
                alt="Rating.png"
                loading="lazy"
                decoding="async"
                className="w-24"
              />
              <h1 className="text-blue-500 font-bold">4.0 (6 ratings)</h1>
            </div>
            <a
              href="#leaveReview"
              className="text-blue-500 font-bold hover:underline"
            >
              Leave a review{" "}
            </a>
          </div>
          <div className="flex gap-2">
            <div className="bg-red-600 max-sm:w-fit max-sm:mt-2 text-white cursor-pointer font-semibold hover:bg-red-400 transition-all duration-500  px-5 py-2 rounded-xl shadow-lg">
              <h1>Book Tomorrow  (01:00 PM - 04:00 PM)</h1>
            </div>
            <button className="bg-blue-500 px-5 font-bold hover:bg-blue-400 transition-all duration-200 rounded-lg text-white">
              Save Changes
            </button>
          </div>
        </div>
        <hr className="my-10 h-1" />
      </div>
    </form>
  );
};

export default DetailsProfileDoctor;
