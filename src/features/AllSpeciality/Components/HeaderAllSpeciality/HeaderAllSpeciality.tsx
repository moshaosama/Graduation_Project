import { useRef } from "react";
import globalStyle from "../../../../Style/globalStyle.module.css";
import style from "./HeaderAllSpeciality.module.css";
import clsx from "clsx";
import useTransition from "../../../../Hooks/useTransition";

const initalStyle = {
  left: "40pc",
};

const Style = {
  left: "0pc",
};

const HeaderAllSpeciality = () => {
  const { Header_For_Section } = globalStyle;
  const { Paths } = style;
  const HeaderSection = useRef(null);
  useTransition(HeaderSection, initalStyle, Style);

  return (
    <>
      <div
        className={clsx(
          Header_For_Section,
          "transition-all duration-1000 relative left-[40pc]"
        )}
        ref={HeaderSection}
      >
        <div className={Paths}>
          <h1 className="underline">Find a Doctor</h1>
          <span>/</span>
          <h1>Find a Specialist</h1>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">Find a Doctor By Specialty</h1>
          <p className="font-semibold text-gray-500">
            Choose a specialty below to find local providers, research their
            background, read patient reviews and schedule an appointment.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeaderAllSpeciality;
