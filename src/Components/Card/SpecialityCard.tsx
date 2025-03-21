import { useMemo } from "react";
import { Traslation } from "../../Language/Language";
import { SpecialityCardProps } from "../../Types/Card/SpecialityCard";
import { MdArrowDropDown } from "react-icons/md";
import React from "react";
import useConvertLanguage from "../../Hooks/useConvertLanguage";

const SpecialityCard = React.memo(
  ({
    Title,
    Label,
    Element,
    onCLick,
    DropDown,
    Width,
  }: SpecialityCardProps) => {
    const { language } = useConvertLanguage();

    const width = useMemo(() => `w-${Width}`, [Width]);
    return (
      <>
        <div className="flex w-96 flex-col relative">
          <div
            className={`p-2 border border-solid border-[#9b9b9b] ${width} cursor-pointer  hover:bg-[#7d98b37a] flex ${Traslation.ConvertFLex} justify-between items-center transition-all duration-500`}
            onClick={onCLick}
          >
            <div>
              <p
                className={`text-sm ${
                  language == '"English"' ? "text-start" : "text-end"
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
  }
);

export default SpecialityCard;
