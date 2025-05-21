import { useMemo } from "react";
import { Traslation } from "../../Language/Language";
import { SpecialityCardProps } from "../../Types/Card/SpecialityCard";
import { MdArrowDropDown } from "react-icons/md";
import React from "react";
import useConvertLanguage from "../../Hooks/useConvertLanguage";
import clsx from "clsx";

const SpecialityCard = React.memo(
  ({
    Title,
    Label,
    Element,
    onCLick,
    DropDown,
    Width,
    lengthZero,
  }: SpecialityCardProps) => {
    const { language } = useConvertLanguage();

    const width = useMemo(() => `w-${Width}`, [Width]);
    return (
      <>
        <div className="flex w-96 max-2xl:w-56 flex-col relative">
          <div
            className={clsx(
              `p-2 border-2 max-2xl:w-56 border-solid border-gray-300 ${width} cursor-pointer  hover:bg-[#7d98b37a] flex ${Traslation.ConvertFLex} justify-between items-center transition-all duration-500`,
              lengthZero ? "rounded-l-xl" : ""
            )}
            onClick={onCLick}
          >
            <div>
              <p
                className={`text-sm${
                  language == '"English"' ? "text-start" : "text-end"
                } font-semibold text-[#868686] max-2xl:text-sm`}
              >
                {Label}
              </p>
              <div
                className={`my-2 max-h-5 flex items-center max-2xl:text-[12px] max-2xl:gap-1 font-bold ${Traslation.ConvertFLex} gap-2 text-[#0a84ff7a]`}
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
