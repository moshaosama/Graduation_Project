import { InputProps } from "../../Types/Forms/input";

const Inputs = ({ Label, Type, placeHolder, ChangeEvent }: InputProps) => {
  return (
    <>
      <p className="flex max-sm:flex-col my-2  justify-between">
        <label htmlFor={Label}>
          {Label}
          <span className="text-[red]">*</span>
        </label>
        <input
          type={Type}
          className="w-96 px-3 max-sm:w-full h-10 border-[#ddd] border-[1px] rounded-lg shadow-sm"
          placeholder={placeHolder}
          onChange={ChangeEvent}
        />
      </p>
    </>
  );
};

export default Inputs;
