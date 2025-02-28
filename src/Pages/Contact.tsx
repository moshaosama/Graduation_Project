import { memo } from "react";
import SpecialityStyle from "../Components/HeaderAllSpeciality/HeaderAllSpeciality.module.css";
import GlobalStyle from "../Style/globalStyle.module.css";
import { Link } from "react-router-dom";
import FormContactUs from "../Components/Form/FormContactUs";

const Contact = () => {
  const { Paths } = SpecialityStyle;
  const { Header_For_Section } = GlobalStyle;
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
