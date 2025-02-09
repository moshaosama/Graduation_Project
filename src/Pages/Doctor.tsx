import { useEffect, useState } from "react";
import { RootState } from "../Store/Store";
import { useSelector } from "react-redux";

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
      <div>
        {Doctors?.result?.map((el: any) => (
          <h1 key={el.DoctorID}>{el.FullName}</h1>
        ))}
      </div>
    </>
  );
};

export default Doctor;
