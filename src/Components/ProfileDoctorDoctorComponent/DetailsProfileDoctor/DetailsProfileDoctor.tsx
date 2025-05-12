import { Link, useParams } from "react-router-dom";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { ImageFemale, ImageMale } from "../../../Utils/Images";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllDoctor } from "../../../Store/Reducer/AllDoctor/AllDoctor";
import { RootState, AppDispatch } from "../../../Store/Store";

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

  if (!Doctor) {
    return (
      <div className="w-full text-center py-20">
        <h1 className="text-xl text-red-600 font-bold">
          Doctor not found or still loading...
        </h1>
      </div>
    );
  }

  return (
    <form>
      <div className="w-full px-6 md:px-10">
        <div className="text-gray-500 font-semibold flex items-center gap-2">
          <h1 className="underline cursor-pointer">Home</h1> {">"}
          <h1 className="underline cursor-pointer">Find a specialist</h1>
        </div>

        <div className="my-10 flex flex-col md:flex-row gap-5">
          <img
            src={Doctor?.Gender === "Male" ? ImageMale : ImageFemale}
            alt="ImageDoctor.png"
            loading="lazy"
            decoding="async"
            className="w-52 object-cover rounded self-center"
          />

          <div className="flex flex-col justify-between gap-5">
            <div className="space-y-4">
              {/* Name Field */}
              <div className="flex items-center gap-4">
                <h1 className="text-blue-700 text-xl font-bold flex items-center gap-4">
                  {Doctor.Name}
                </h1>
              </div>

              {/* Specialty Field */}
              <div className="flex items-center gap-4">
                <MdOutlineHealthAndSafety className="text-2xl text-blue-400" />
                <h1 className="font-semibold flex items-center gap-4">
                  {Doctor.Specialty_name}
                </h1>
              </div>

              {/* Location Field */}
              <div className="flex items-center gap-4">
                <p className="text-gray-700 font-medium">
                  {Doctor?.Location || "No Location"}
                </p>
              </div>

              {/* Fees Field */}
              <div className="flex items-center gap-4">
                <span className="font-bold">
                  Fees: {Doctor?.ConsultationFee} EGB
                </span>
              </div>
            </div>

            <div className="border font-semibold hover:bg-red-500 hover:text-black cursor-pointer transition-all duration-300 border-red-500 w-fit px-3 py-1 rounded-full">
              <p>01015151515</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-[165dvh] max-sm:w-full">
          <div className="flex gap-4 items-center">
            <img
              src="/1_k5m8q1rRpdQ-H5NogaHnBQ-removebg-preview.png"
              alt="Rating.png"
              loading="lazy"
              decoding="async"
              className="w-24"
            />
            <h1 className="text-blue-500 font-bold">4.0 (6 ratings)</h1>
            <a
              href="#leaveReview"
              className="text-blue-500 font-bold hover:underline"
            >
              Leave a review
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <Link to={"bookdoctor"}>
              <div className="bg-red-600 text-white cursor-pointer font-semibold hover:bg-red-400 transition-all duration-500 px-5 py-2 rounded-xl shadow-lg">
                <h1>Book Tomorrow (01:00 PM - 04:00 PM)</h1>
              </div>
            </Link>
            <button
              type="submit"
              className="bg-blue-500 px-5 py-2 font-bold hover:bg-blue-400 transition-all duration-200 rounded-lg text-white"
            >
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
