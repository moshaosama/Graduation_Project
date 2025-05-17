import React from "react";
import { Traslation } from "../../Language/Language";
import { InputProps } from "../../Types/Forms/input";

const Inputs = React.memo(
  ({
    Label,
    Type,
    placeHolder,
    ChangeEvent,
    Value,
    Active = true,
    disabled = false,
  }: InputProps) => {
    return (
      <>
        <p
          className={`flex ${Traslation.ConvertFLex} max-sm:flex-col my-2 gap-4 items-center  justify-between`}
        >
          <label
            htmlFor={Label}
            className={`font-bold flex gap-2 ${Traslation.ConvertFLex}`}
          >
            {Active ? (
              <>
                <span>{Label}</span>
                <span className="text-[red]">*</span>
              </>
            ) : null}
          </label>

          <input
            type={Type}
            className="w-[30pc] px-3 max-sm:w-full h-10 bg-gray-200 border-[#ddd] border-[1px] rounded-lg shadow-sm"
            placeholder={placeHolder}
            onChange={ChangeEvent}
            name={Label}
            disabled={disabled}
            value={Value}
          />
        </p>
      </>
    );
  }
);

export default Inputs;
