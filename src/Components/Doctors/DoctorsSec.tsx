import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import DoctorRender from "./DoctorRender/DoctorRender";

const DoctorsSec = () => {
  const Doctors = JSON.parse(window.localStorage.getItem("Doctors")!);
  const state = useSelector((state: RootState) => state.allDoctor);
  const LengthDoctor = useMemo(() => {
    if (Doctors?.result?.length !== 0) {
      return Doctors?.result?.length;
    } else {
      return state.data?.result?.length;
    }
  }, [Doctors, state.data]);

  return (
    <>
      <div className="my-4">
        <h1 className="text-md text-gray-700 font-bold">
          {LengthDoctor} Doctors
        </h1>
        <DoctorRender />
      </div>
    </>
  );
};

export default DoctorsSec;
