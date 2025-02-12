import { Traslation } from "../../Language/Language";
import { SpecialityCardProps } from "../../Types/Card/SpecialityCard";
import { MdArrowDropDown } from "react-icons/md";

const SpecialityCard = ({
  Title,
  Label,
  Element,
  onCLick,
  DropDown,
  Width,
}: SpecialityCardProps) => {
  const Language = JSON.stringify(window.localStorage.getItem("Language")!);
  return (
    <>
      <div className="flex flex-col relative">
        <div
          className={`p-2 border border-solid border-[#9b9b9b] w-${Width} cursor-pointer  hover:bg-[#7d98b37a] flex ${Traslation.ConvertFLex} justify-between items-center transition-all duration-500`}
          onClick={onCLick}
        >
          <div>
            <p
              className={`text-sm ${
                Language == '"English"' ? "text-start" : "text-end"
              } font-semibold text-[#868686]`}
            >
              {Label}
            </p>
            <div
              className={`my-2 max-h-5 flex items-center ${Traslation.ConvertFLex} gap-2 text-[#0a84ff7a]`}
            >
              {Element}
              <p className="text-md font-semibold">{Title}</p>
            </div>
          </div>
          <div>
            <MdArrowDropDown className="text-3xl text-[#8b8b8b]" />
          </div>
        </div>
        <div>{DropDown}</div>
      </div>
    </>
  );
};

export default SpecialityCard;
