import { IoIosArrowForward } from "react-icons/io";
import { newServiceProps } from "../../Types/newService/newService";

const NewService = ({
  Image,
  Title,
  Description,
  Button,
  BackGroundFrom,
  BackGroundTo,
  ColorText,
}: newServiceProps) => {
  return (
    <div
      className={`bg-gradient-to-r from-${
        BackGroundFrom || "blue-400"
      }  to-${BackGroundTo} p-5 max-sm:w-full  my-4 rounded-lg flex justify-between items-center`}
    >
      <div className={`text-${ColorText} flex gap-5 items-center`}>
        {Image}
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold max-sm:text-lg">{Title}</h1>
          <p className="text-md font-semibold max-sm:text-sm">{Description}</p>
        </div>
      </div>
      <div className="max-sm:hidden">{Button}</div>

      <div className="sm:hidden text-4xl">
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default NewService;
