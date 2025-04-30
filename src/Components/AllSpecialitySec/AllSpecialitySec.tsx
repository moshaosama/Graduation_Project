import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { useEffect } from "react";
import { fetchSpeciality } from "../../Store/Reducer/Speciality/SpecialityReducer";
import { fetchDoctor } from "../../Store/Reducer/Doctor/DoctorReducer";
import { useNavigate } from "react-router";

const AllSpecialitySec = () => {
  const state = useSelector((state: RootState) => state.Speciality);
  const Navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSpeciality());
  }, [dispatch]);

  const handleClick = (data: any) => {
    dispatch(fetchDoctor(data));
    Navigate("/doctors");
  };

  return (
    <>
      <div className={`bg-white mt-12 w-full `}>
        <div className="mx-80 max-sm:mx-7 py-5">
          <h1 className="text-2xl font-bold text-[#343437]">
            Select a specialty
          </h1>
          <div className="grid grid-cols-2 gap-5 mt-5">
            {state.data.result?.map(
              (el: { Specialty_name: string }, index: number) => {
                return (
                  <h1
                    key={index}
                    className="text-blue-700 font-bold text-lg hover:underline cursor-pointer"
                    onClick={() =>
                      handleClick({ Speciality: el.Specialty_name })
                    }
                  >
                    {el.Specialty_name}
                  </h1>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllSpecialitySec;
