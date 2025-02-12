import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { useEffect } from "react";
import { fetchSpeciality } from "../../Store/Reducer/Speciality/SpecialityReducer";
import { fetchAllDoctor } from "../../Store/Reducer/AllDoctor/AllDoctor";
import { DoctorType, SpecialtyType } from "../../Types/Doctor/Doctor";
import { IoLocationSharp } from "react-icons/io5";

const FeatureDoctor = () => {
  const state = useSelector((state: RootState) => state.Speciality);
  const stateAllDoctor = useSelector((state: RootState) => state.allDoctor);
  const dispatch = useDispatch<AppDispatch>();
  //   const [FeatureDoctor, setFeatureDoctor] = useState(
  //     window.localStorage.getItem("featureDoctor") || {}
  //   );

  useEffect(() => {
    dispatch(fetchSpeciality());
    dispatch(fetchAllDoctor());
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-white p-5 to-[#f3f0f0] rounded-lg">
        <div className="flex justify-between items-center ">
          <h1 className="text-xl text-gray-500 font-bold">Featured Doctors</h1>
          <p className="text-md text-blue-700 font-semibold hover:underline cursor-pointer">
            See More
          </p>
        </div>
        <div className="flex gap-5 overflow-x-scroll w-full my-3">
          <div className="w-full">
            <button className="bg-blue-300 border border-blue-500 rounded-xl px-3 py-1 w-44">
              All Specialities
            </button>
          </div>
          {state.data.result?.map((el: SpecialtyType) => {
            return (
              <div className="w-full">
                <button className="bg-[#eee] border border-black rounded-xl px-3 py-1 w-44">
                  {el.Specialty_name}
                </button>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-3 gap-3 max-sm:gap-x-96 max-sm:w-full max-sm:overflow-x-scroll">
          {stateAllDoctor?.data?.result
            ?.slice(0, 9)
            ?.map((el: DoctorType, index: number) => {
              return (
                <>
                  <div
                    key={index}
                    className="border-[1px] max-sm:w-96 cursor-pointer border-solid flex items-start gap-2 p-2 rounded-xl shadow-md"
                  >
                    <img
                      src="https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg"
                      alt="Person.png"
                      className="w-14 rounded-full"
                    />
                    <div className="flex flex-col gap-2">
                      <h1 className="font-semibold text-sm max-sm:font-sans text-gray-600">
                        {el.FullName}
                      </h1>
                      <p className="text-sm">{el.Specialty_name}</p>
                      <div className="flex gap-1 items-center">
                        <IoLocationSharp className="text-blue-500" />
                        <p className="text-md max-sm:text-sm font-semibold text-gray-600">
                          {el?.Clinic.slice(0, 40)}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default FeatureDoctor;
