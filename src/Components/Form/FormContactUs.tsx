import { ChangeTextByLanguage } from "../../Language/Language";
import Inputs from "./Inputs";

const FormContactUs = () => {
  return (
    <div className="border-[3px] border-solid mx-36 p-4 border-gray-500">
      <h1 className="text-3xl font-bold text-[#343437] flex justify-center">
        Contact US
      </h1>
      <form action="" className="w-1/2 mt-10">
        <Inputs
          Label={ChangeTextByLanguage("ألاسم", "Name")}
          Type="text"
          Value=""
          placeHolder="YourName"
          ChangeEvent={() => {}}
        />
      </form>
    </div>
  );
};

export default FormContactUs;
