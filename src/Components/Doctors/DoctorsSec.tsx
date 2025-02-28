import { useMemo } from "react";
import { FaStethoscope } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";

const DoctorsSec = () => {
  const Doctors = JSON.parse(window.localStorage.getItem("Doctors")!);
  const LengthDoctor = useMemo(() => Doctors?.result?.length, [Doctors]);

  const DoctorsRender = () => {
    return (
      <>
        {Doctors?.result?.map((el: any, index: number) => {
          return (
            <div
              key={index}
              className="bg-white w-full p-5 rounded-xl shadow-md flex flex-col my-4 hover:bg-gray-300 cursor-pointer  transition-all duration-300"
            >
              <div className="flex flex-col">
                <div className="flex gap-5 items-center">
                  <div>
                    <img
                      src="https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg"
                      alt="Doctor.png"
                      className="w-24 rounded-full border-[3px] border-gray-700"
                    />
                  </div>
                  <div className="flex flex-col mx-3 text-sm items-start justify-center">
                    <p className="text-blue-500">
                      <span className="text-sm">Dr /</span>
                      <span className="font-bold text-md">{el.FullName}</span>
                    </p>
                    <img
                      src="/1_k5m8q1rRpdQ-H5NogaHnBQ-removebg-preview.png"
                      alt="Star.png"
                      className="w-32 -mx-3"
                    />
                    <p>Overall Rating From {el?.Visitors} Visitors</p>
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
                      {el?.Price} EGB
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
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="my-4">
        <h1 className="text-md text-gray-700 font-bold">
          {LengthDoctor} Doctors
        </h1>
        <DoctorsRender />
      </div>
    </>
  );
};

export default DoctorsSec;
