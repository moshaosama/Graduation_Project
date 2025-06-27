import { memo, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { container } from "../../../Style";
import { RootState } from "../../../Store/Store";
import { FilterDoctorLists, FilterDoctorType } from "./Lists";
import style from "./HeaderDoctor.module.css";
import useTransition from "../../../Hooks/useTransition";

type HeaderDoctorProps = {
  Specialty_name: string;
};

const initalStyle = {
  left: "44pc",
  opacity: "0",
};

const Styles = {
  left: "0pc",
  opacity: "1",
};

const HeaderDoctor = memo(({ Specialty_name }: HeaderDoctorProps) => {
  const { FilterBtns, Locations } = style;
  const HeaderSection = useRef(null);
  useTransition(HeaderSection, initalStyle, Styles);
  const Doctors = () => {
    const stored = window.localStorage.getItem("Doctors");
    return stored ? JSON.parse(stored) : null;
  };
  const state = useSelector((state: RootState) => state.allDoctor);
  const BtnFilter = useRef(null);

  const initalStyleFilterBTns = {
    left: "44pc",
    opacity: "0",
  };

  const StylesFilterBTns = {
    left: "0pc",
    opacity: "1",
  };

  useTransition(BtnFilter, initalStyleFilterBTns, StylesFilterBTns);

  const FilterBTnsRender = useMemo(() => {
    return FilterDoctorLists?.map((el: FilterDoctorType, index: number) => {
      return (
        <div
          ref={BtnFilter}
          key={index}
          className="relative transition-all duration-1000"
        >
          <div className={FilterBtns} onClick={el.onclick}>
            <h1>{el.Title}</h1>
          </div>
        </div>
      );
    });
  }, []);

  const LengthDoctor = () => {
    if (Doctors()?.result?.length !== 0) {
      return Doctors()?.result?.length;
    } else {
      return state.data?.result?.length;
    }
  };
  return (
    <>
      <div className="bg-[#1F3FC3] -mt-6 py-3">
        <div
          ref={HeaderSection}
          className={`relative transition-all duration-1000 ${container}`}
          style={{ flexDirection: "column", alignItems: "start" }}
        >
          <div className="flex gap-2 items-center font-semibold text-gray-300">
            <h1 className="underline cursor-pointer">Home</h1> {" > "}
            <h1 className="underline cursor-pointer">Find a specialist</h1>
            {" > "}
            <h1>Find Cardiology doctor</h1>
          </div>
          <div className="text-white">
            <h1 className="mt-5 font-bold text-md">
              {LengthDoctor()} Result For
            </h1>
            <h1 className="text-4xl font-semibold shadow-lg">
              {Specialty_name}
            </h1>
          </div>
          <div className="flex gap-3 items-center mt-5">
            <div className={Locations}>
              <h1>Giza</h1>
            </div>
            <div className={Locations}>
              <h1>Cairo</h1>
            </div>
            <div className={Locations}>
              <h1>Alex</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EDEDED] py-3 shadow-2xl">
        <div className="flex gap-4 items-center mx-44 max-sm:mx-0">
          {FilterBTnsRender}
        </div>
      </div>
    </>
  );
});

export default HeaderDoctor;
