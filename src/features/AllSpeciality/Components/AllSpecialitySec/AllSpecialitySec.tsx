import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Store/Store";
import { useEffect, useRef } from "react";
import { fetchSpeciality } from "../../../../Store/Reducer/Speciality/SpecialityReducer";
import { fetchDoctor } from "../../../../Store/Reducer/Doctor/DoctorReducer";
import { useNavigate } from "react-router";
import useTransition from "../../../../Hooks/useTransition";

const initialStyle = {
  gap: "40px",
};

const Styles = {
  gap: "17px",
};

const AllSpecialitySec = () => {
  const state = useSelector((state: RootState) => state.Speciality);
  const Navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const AllSpeciality = useRef(null);

  useEffect(() => {
    dispatch(fetchSpeciality());
  }, [dispatch]);

  const handleClick = (data: any) => {
    dispatch(fetchDoctor(data));
    Navigate("/doctors");
  };

  useTransition(AllSpeciality, initialStyle, Styles);

  return (
    <>
      <div className={`mt-12 w-full`}>
        <div className="py-5 mx-80 max-sm:mx-7">
          <h1 className="text-2xl font-bold text-[#343437]">
            Select a specialty
          </h1>
          <div
            ref={AllSpeciality}
            className="grid grid-cols-2 gap-5 mt-5 gap-x-[0pc] transition-all duration-1000"
          >
            {state.data.result?.map(
              (el: { Specialty_name: string }, index: number) => {
                return (
                  <h1
                    key={index}
                    className="text-lg font-bold text-blue-700 cursor-pointer hover:underline"
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
