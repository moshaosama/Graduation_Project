import { findDoctor } from "../../Types/FormDoctor/findDoctor";

const FormDoctors = ({ Element }: findDoctor) => {
  return (
    <div className="border-[3px] rounded-b-md border-[rgb(0,112,205)]">
      {Element}
    </div>
  );
};

export default FormDoctors;
