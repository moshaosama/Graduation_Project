import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppDispatch, RootState } from "../../../Store/Store";
import { useEffect } from "react";
import { fetchFindDoctorByID } from "../Actions/FindDoctorByID";

interface DoctorType {
  data: {
    result: {
      Gender: string;
      Name: string;
      Specialty_name: string;
      Clinic: string;
      PhoneNumber: string;
    }[];
  };
  loading: boolean;
  error: string;
}

const DetailsDoctor = () => {
  const { id } = useParams();
  const Doctor = useSelector(
    (state: RootState) => state.DoctorByID
  ) as DoctorType;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFindDoctorByID(id as string));
  }, [id]);

  console.log(id, Doctor);

  return (
    <>
      <div className="absolute right-40 -bottom-28 max-sm:right-20">
        <div className="bg-white p-6 rounded-xl shadow-lg shadow-black">
          <div className="flex flex-col gap-6 justify-start">
            <img
              src={
                Doctor?.data?.result?.[0]?.Gender == "Male"
                  ? "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
                  : "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg"
              }
              alt="Doctor.png"
              className="w-24 h-24 object-cover rounded-full border-[3px] border-gray-700"
              loading="lazy"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-[#0056D6]">
                Dr/ {Doctor?.data?.result?.[0]?.Name}
              </h1>
              <p>{Doctor?.data?.result?.[0]?.Specialty_name}</p>
              <p>{Doctor?.data?.result?.[0]?.Clinic}</p>
              <p>Phone: {Doctor?.data?.result?.[0]?.PhoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsDoctor;
