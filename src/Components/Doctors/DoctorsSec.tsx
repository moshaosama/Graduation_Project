import { lazy } from "react";
const DoctorRender = lazy(() => import("./DoctorRender/DoctorRender"));

const DoctorsSec = () => {
  return (
    <>
      <div className="my-4">
        <DoctorRender />
      </div>
    </>
  );
};

export default DoctorsSec;
