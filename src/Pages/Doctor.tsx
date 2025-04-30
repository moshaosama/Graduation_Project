import { memo, useEffect, useState } from "react";
import { RootState } from "../Store/Store";
import { useSelector } from "react-redux";
import DoctorsSec from "../Components/Doctors/DoctorsSec";
import HeaderDoctor from "../Components/Doctors/HeaderDoctor/HeaderDoctor";

const Doctor = () => {
  const state = useSelector((state: RootState) => state.Doctor);

  const [Doctors, setDoctors] = useState(
    JSON.parse(window.localStorage.getItem("Doctors")!)
  );

  useEffect(() => {
    if (state.data && Object.keys(state.data).length > 0) {
      window.localStorage.setItem("Doctors", JSON.stringify(state.data));
      setDoctors(state.data);
    }
  }, [state.data]);

  return (
    <>
      <HeaderDoctor Specialty_name={Doctors?.result[0]?.Specialty_name} />
      {Doctors == null ? (
        <h1 className="my-2 text-red-700 flex justify-center font-bold">
          No Doctors Yet!!
        </h1>
      ) : (
        <div className="mx-80 max-sm:ml-[13pc] my-2 flex gap-10 items-center flex-col">
          <DoctorsSec />
        </div>
      )}
    </>
  );
};

export default memo(Doctor);
