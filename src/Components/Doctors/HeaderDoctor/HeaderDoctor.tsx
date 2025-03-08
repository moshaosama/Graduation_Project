import { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { container } from "../../../Style";
import { RootState } from "../../../Store/Store";

type HeaderDoctorProps = {
  Specialty_name: string;
};

const HeaderDoctor = memo(({ Specialty_name }: HeaderDoctorProps) => {
  const Doctors = useMemo(() => {
    return JSON.parse(window.localStorage.getItem("Doctors")!);
  }, []);
  const state = useSelector((state: RootState) => state.allDoctor);

  const LengthDoctor = useMemo(() => {
    if (Doctors?.result?.length !== 0) {
      return Doctors?.result?.length;
    } else {
      return state.data?.result?.length;
    }
  }, [Doctors?.result?.length, state.data?.result?.length]);
  return (
    <>
      <div className="bg-[#1F3FC3] -mt-6 py-3">
        <div
          className={`${container}`}
          style={{ flexDirection: "column", alignItems: "start" }}
        >
          <div className="text-gray-300 font-semibold flex items-center gap-2">
            <h1 className="underline cursor-pointer">Home</h1> {" > "}
            <h1 className="underline cursor-pointer">Find a specialist</h1>
            {" > "}
            <h1>Find Cardiology doctor</h1>
          </div>
          <div className="text-white">
            <h1 className="text-md font-bold mt-5">
              {LengthDoctor} Result For
            </h1>
            <h1 className="text-4xl font-semibold shadow-lg">
              {Specialty_name}
            </h1>
          </div>
          <div className="mt-5 flex gap-3 items-center">
            <div className="border-[1px] border-white rounded-full w-20 text-white text-center">
              <h1>Giza</h1>
            </div>
            <div className="border-[1px] border-white rounded-full w-20 text-white text-center">
              <h1>Cairo</h1>
            </div>
            <div className="border-[1px] border-white rounded-full w-20 text-white text-center">
              <h1>Alex</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default HeaderDoctor;
