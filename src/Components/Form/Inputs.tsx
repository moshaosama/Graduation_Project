import { Traslation } from "../../Language/Language";
import { InputProps } from "../../Types/Forms/input";

const Inputs = ({
  Label,
  Type,
  placeHolder,
  ChangeEvent,
  Value,
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
          <span>{Label}</span>
          <span className="text-[red]">*</span>
        </label>
        <input
          type={Type}
          className="w-96 px-3 max-sm:w-full h-10 border-[#ddd] border-[1px] rounded-lg shadow-sm"
          placeholder={placeHolder}
          onChange={ChangeEvent}
          name={Label}
          value={Value}
        />
      </p>
    </>
  );
};

export default Inputs;
