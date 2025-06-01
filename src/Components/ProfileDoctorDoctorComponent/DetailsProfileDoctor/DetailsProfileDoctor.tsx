import { Link, useParams } from "react-router-dom";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { ImageFemale, ImageMale } from "../../../Utils/Images";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllDoctor } from "../../../Store/Reducer/AllDoctor/AllDoctor";
import { RootState, AppDispatch } from "../../../Store/Store";
import useTransition from "../../../Hooks/useTransition";

const initalStyle = {
  gap: "60pc",
};

const Styles = {
  gap: "4pc",
};

const DetailsProfileDoctor = () => {
  const AboutDoctor = useRef(null);
  useTransition(AboutDoctor, initalStyle, Styles);
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
      <div className="w-full py-20 text-center">
        <h1 className="text-xl font-bold text-red-600">
          Doctor not found or still loading...
        </h1>
      </div>
    );
  }

  return (
    <form>
      <div className="w-full relative right-12 px-6 md:px-10 max-2xl:-ml-14 max-2xl:w-full">
        <div className="flex items-center gap-2 font-semibold text-gray-500 ">
          <h1 className="underline cursor-pointer">Home</h1> {">"}
          <h1 className="underline cursor-pointer">Find a specialist</h1>
        </div>

        <div
          ref={AboutDoctor}
          className="flex flex-col gap-10 my-10 transition-all duration-1000 md:flex-row"
        >
          <img
            src={Doctor?.Gender === "Male" ? ImageMale : ImageFemale}
            alt="ImageDoctor.png"
            loading="lazy"
            decoding="async"
            className="self-center object-cover rounded w-52"
          />

          <div className="flex flex-col justify-between gap-5">
            <div className="space-y-4">
              {/* Name Field */}
              <div className="flex items-center gap-4">
                <h1 className="flex items-center gap-4 text-xl font-bold text-blue-700">
                  {Doctor.Name}
                </h1>
              </div>

              {/* Specialty Field */}
              <div className="flex items-center gap-4">
                <MdOutlineHealthAndSafety className="text-2xl text-blue-400" />
                <h1 className="flex items-center gap-4 font-semibold">
                  {Doctor.Specialty_name}
                </h1>
              </div>

              {/* Location Field */}
              <div className="flex items-center gap-4">
                <p className="font-medium text-gray-700">
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

            <div className="px-3 py-1 font-semibold transition-all duration-300 border border-red-500 rounded-full cursor-pointer hover:bg-red-500 hover:text-black w-fit">
              <p>01015151515</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row max-2xl:w-full justify-between items-center gap-4 w-[165dvh] max-sm:w-full">
          <div className="flex items-center gap-4">
            <img
              src="/1_k5m8q1rRpdQ-H5NogaHnBQ-removebg-preview.png"
              alt="Rating.png"
              loading="lazy"
              decoding="async"
              className="w-24"
            />
            <h1 className="font-bold text-blue-500">4.0 (6 ratings)</h1>
            <a
              href="#leaveReview"
              className="font-bold text-blue-500 hover:underline"
            >
              Leave a review
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 sm:flex-row max-2xl:ml-56">
            <Link to={"bookdoctor"}>
              <div className="px-5 py-2 font-semibold text-white transition-all duration-500 bg-red-600 shadow-lg cursor-pointer hover:bg-red-400 rounded-xl">
                <h1>Book Tomorrow (01:00 PM - 04:00 PM)</h1>
              </div>
            </Link>
          </div>
        </div>

        <hr className="h-1 my-10" />
      </div>
    </form>
  );
};

export default DetailsProfileDoctor;
