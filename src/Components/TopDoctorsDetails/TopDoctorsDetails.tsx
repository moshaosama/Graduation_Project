import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { useEffect, useMemo } from "react";
import { fetchAllDoctor } from "../../Store/Reducer/AllDoctor/AllDoctor";

const TopDoctorsDetails = () => {
  const state = useSelector((state: RootState) => state.allDoctor);
  const Dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    Dispatch(fetchAllDoctor());
  }, []);

  console.log(state.data);

  const FindDoctors = useMemo(() => {
    if (!state.data?.result) return <p>No doctors found</p>;

    return state.data.result?.slice(0, 4).map((el: any, index: number) => (
      <div
        key={index}
        className="bg-white py-10 w-72 px-2 flex flex-col gap-4 items-center rounded-xl hover:translate-x-1 transition-all duration-500 cursor-pointer hover:bg-gray-200 shadow-2xl"
      >
        <img
          src="WhatsApp_Image_2025-02-27_at_01.00.00_8ea27a5f-removebg-preview.png"
          alt="Person.png"
          className="w-36"
        />
        <h1 className="text-md font-bold">{el.Name}</h1>
        <p className="text-sm font-semibold">{el.Specialty_name}</p>
        <div>
          <p>{el?.Location}</p>
        </div>
      </div>
    ));
  }, [state.data]);

  return FindDoctors;
};

export default TopDoctorsDetails;
