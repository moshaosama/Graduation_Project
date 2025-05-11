import globalStyle from "../../../../Style/globalStyle.module.css";
import style from "./HeaderAllSpeciality.module.css";

const HeaderAllSpeciality = () => {
  const { Header_For_Section } = globalStyle;
  const { Paths } = style;
  return (
    <>
      <div className={Header_For_Section}>
        <div className={Paths}>
          <h1 className="underline">Find a Doctor</h1>
          <span>/</span>
          <h1>Find a Specialist</h1>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">Find a Doctor By Specialty</h1>
          <p className="text-gray-500 font-semibold">
            Choose a specialty below to find local providers, research their
            background, read patient reviews and schedule an appointment.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeaderAllSpeciality;
