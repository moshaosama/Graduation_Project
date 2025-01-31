import { SpecialityCardProps } from "../../Types/Card/SpecialityCard";
import { MdArrowDropDown } from "react-icons/md";

const SpecialityCard = ({ Title, Label, Element }: SpecialityCardProps) => {
  return (
    <>
      <div className="p-2 border border-solid border-[#9b9b9b] w-96 cursor-pointer  hover:bg-[#7d98b37a] flex justify-between items-center transition-all duration-500">
        <div>
          <p className="text-sm font-semibold text-[#868686]">{Label}</p>
          <div className="my-2 flex items-center gap-2 text-[#0a84ff7a]">
            {Element}
            <p className="text-md font-semibold">{Title}</p>
          </div>
        </div>
        <div>
          <MdArrowDropDown className="text-3xl text-[#8b8b8b]" />
        </div>
      </div>
    </>
  );
};

export default SpecialityCard;
