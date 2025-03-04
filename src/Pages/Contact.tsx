import { memo } from "react";
import { Link } from "react-router";
import FormContactUs from "../Components/FormContactUs/FormContactUs";
import GlobalStyle from "../Style/globalStyle.module.css";
import SpecialityStyle from "../Components/HeaderAllSpeciality/HeaderAllSpeciality.module.css";

const Contact = () => {
  const { Header_For_Section } = GlobalStyle;
  const { Paths } = SpecialityStyle;
  return (
    <>
      <div className={Header_For_Section}>
        <div className={Paths}>
          <Link to={"/"}>
            <h1 className="underline cursor-pointer">Home</h1>
          </Link>
          <span>/</span>
          <h1>Contact US</h1>
        </div>
        <FormContactUs />
      </div>
    </>
  );
};

export default memo(Contact);
