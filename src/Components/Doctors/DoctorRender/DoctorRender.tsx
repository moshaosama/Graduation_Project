import React, { Suspense, useMemo } from "react";
import { FaStethoscope } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";
import { ChangeTextByLanguage } from "../../../Language/Language";

const BookDoctor = React.lazy(() => import("../../BookDoctor/BookDoctor"));

const DoctorRender = () => {
  const Doctors = JSON.parse(window.localStorage.getItem("Doctors")!);
  const state = useSelector((state: RootState) => state.allDoctor);

  // console.log(Doctors?.result?.Gender);

  const DoctorsRender = useMemo(() => {
    return (
      <>
        {Doctors?.result?.length !== 0
          ? Doctors?.result?.map((el: any, index: number) => {
              return (
                <div
                  key={index}
                  className="bg-white w-[70pc] max-sm:w-[24pc]  border-solid p-7 py-16 rounded-xl shadow-2xl shadow-gray-500 flex flex-col  my-4"
                >
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <div className="flex gap-5 max-sm:gap-10 items-center">
                        <div>
                          <img
                            src={
                              el?.Gender == "Male"
                                ? "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
                                : "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg"
                            }
                            alt="Doctor.png"
                            className="w-24 h-24 object-cover rounded-full border-[3px] border-gray-700"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex flex-col mx-3 text-sm items-start justify-center">
                          <p className="text-blue-500">
                            <span className="text-sm">Dr /</span>
                            <span className="font-bold text-md">{el.Name}</span>
                          </p>
                          <img
                            src="/1_k5m8q1rRpdQ-H5NogaHnBQ-removebg-preview.png"
                            alt="Star.png"
                            className="w-32 -mx-3"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="my-1 mx-32 flex flex-col max-sm:mx-0 max-sm:mt-10 gap-2">
                        <div className="flex gap-3 items-center">
                          <FaStethoscope className="text-blue-500" />
                          <p className="text-md font-semibold text-gray-600">
                            {el?.Specialty_name}
                          </p>
                        </div>
                        <div className="flex gap-3 items-center">
                          <IoLocationSharp className="text-blue-500" />
                          <p className="text-md font-semibold text-gray-600">
                            {el?.Clinic}
                          </p>
                        </div>
                        <div className="flex gap-3 items-center">
                          <GrMoney className="text-blue-500" />
                          <p className="text-md font-semibold text-gray-600">
                            {el?.ConsultationFee} EGB
                          </p>
                        </div>
                        <div className="flex gap-3 items-center">
                          <FaPhoneFlip className="text-blue-500" />
                          <p className="text-md font-semibold text-gray-600">
                            16676 - Cost of regular call
                          </p>
                        </div>
                        <div className="sm:hidden ">
                          <button className="bg-red-500 text-white p-2 rounded-xl">
                            {ChangeTextByLanguage("أحجز الان", "Book now")}
                          </button>
                        </div>
                      </div>
                    </div>
                    <Suspense fallback={"Loading..."}>
                      <BookDoctor id={el?.DoctorID} />
                    </Suspense>
                  </div>
                </div>
              );
            })
          : state?.data?.result?.slice(1)?.map((el: any, index: number) => {
              return (
                <div
                  key={index}
                  className="bg-white w-[70pc] border-[1px] border-black border-solid p-7 py-16 rounded-xl shadow-md flex flex-col my-4"
                >
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <div className="flex gap-5 items-center">
                        <div>
                          <img
                            src="https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg"
                            alt="Doctor.png"
                            className="w-24 rounded-full border-[3px] border-gray-700"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex flex-col mx-3 text-sm items-start justify-center">
                          <p className="text-blue-500">
                            <span className="text-sm">Dr /</span>
                            <span className="font-bold text-md">{el.Name}</span>
                          </p>
                          <img
                            src="/1_k5m8q1rRpdQ-H5NogaHnBQ-removebg-preview.png"
                            alt="Star.png"
                            className="w-32 -mx-3"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="my-1 mx-32 flex flex-col gap-2">
                        <div className="flex gap-3 items-center">
                          <FaStethoscope className="text-blue-500" />
                          <p className="text-md font-semibold text-gray-600">
                            {el?.Specialty_name}
                          </p>
                        </div>
                        <div className="flex gap-3 items-center">
                          <IoLocationSharp className="text-blue-500" />
                          <p className="text-md font-semibold text-gray-600">
                            {el?.Clinic}
                          </p>
                        </div>
                        <div className="flex gap-3 items-center">
                          <GrMoney className="text-blue-500" />
                          <p className="text-md font-semibold text-gray-600">
                            {el?.ConsultationFee} EGB
                          </p>
                        </div>
                        <div className="flex gap-3 items-center">
                          <FaPhoneFlip className="text-blue-500" />
                          <p className="text-md font-semibold text-gray-600">
                            16676 - Cost of regular call
                          </p>
                        </div>
                      </div>
                    </div>
                    <BookDoctor id={el?.DoctorID} />
                  </div>
                </div>
              );
            })}
      </>
    );
  }, [Doctors, state.data]);
  return <>{DoctorsRender}</>;
};

export default DoctorRender;
