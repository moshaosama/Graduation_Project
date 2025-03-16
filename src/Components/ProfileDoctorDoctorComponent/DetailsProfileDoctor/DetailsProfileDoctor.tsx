import { useParams } from "react-router-dom";

import { MdOutlineHealthAndSafety } from "react-icons/md";
import useFindDoctor from "../../../Hooks/useFindDoctor";
import { DoctorType } from "../../../Types/Doctor/Doctor";
import { ImageFemale, ImageMale } from "../../../Utils/Images";

const DetailsProfileDoctor = () => {
  const { id } = useParams();

  const Doctor: DoctorType = useFindDoctor(+id!)[0];
  return (
    <div className="w-full">
      <div className="text-gray-500 font-semibold flex items-center  gap-2">
        <h1 className="underline cursor-pointer">Home</h1> {" > "}
        <h1 className="underline cursor-pointer">Find a specialist</h1>
      </div>
      <div className="my-10 flex gap-5">
        <img
          src={Doctor?.Gender == "Male" ? ImageMale : ImageFemale}
          alt="ImageDoctor.png"
          loading="lazy"
          decoding="async"
          className="w-52 object-cover rounded"
        />
        <div className="flex justify-between flex-col">
          <div className="flex flex-col gap-3">
            <h1 className="text-blue-700 text-xl font-bold">{Doctor.Name}</h1>
            <div className="flex items-center">
              <MdOutlineHealthAndSafety className="text-2xl text-blue-400" />
              <h1 className=" font-semibold">{Doctor?.Specialty_name}</h1>
            </div>
            <p className="text-gray-700 font-medium">{Doctor?.Location}</p>
            <p>
              Fees:{" "}
              <span className="font-bold">{Doctor?.ConsultationFee} EGB</span>
            </p>
          </div>
          <div className="border-[1px] font-semibold  hover:bg-red-500 hover:text-black  cursor-pointer transition-all duration-300 border-red-500 border-solid w-fit px-3 py-1 rounded-full">
            <p>01015151515</p>
          </div>
        </div>
      </div>
      <div className="justify-between flex mx-56">
        <div className="flex gap-4 items-center">
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
          <a href="" className="text-blue-500 font-bold hover:underline">
            Leave a review{" "}
          </a>
        </div>
        <div className="bg-red-600 text-white cursor-pointer font-semibold hover:bg-red-400 transition-all duration-500  px-5 py-2 rounded-xl shadow-lg">
          <h1>Book Tomorrow  (01:00 PM - 04:00 PM)</h1>
        </div>
      </div>
      <hr className="my-10 h-1" />
    </div>
  );
};

export default DetailsProfileDoctor;
