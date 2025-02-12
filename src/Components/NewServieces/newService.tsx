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
      className={`bg-gradient-to-r from-${BackGroundFrom} to-${BackGroundTo} p-5  my-4 rounded-lg flex justify-between items-center`}
    >
      <div className={`text-${ColorText} flex gap-5 items-center`}>
        {Image}
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold">{Title}</h1>
          <p className="text-md font-semibold">{Description}</p>
        </div>
      </div>
      <div>{Button}</div>
    </div>
  );
};

export default NewService;
