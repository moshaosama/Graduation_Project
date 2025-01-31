import { InputProps } from "../../Types/Forms/input";

const Inputs = ({ Label, Type }: InputProps) => {
  return (
    <>
      <p className="flex my-2  justify-between">
        <label htmlFor={Label}>
          {Label}
          <span className="text-[red]">*</span>
        </label>
        <input
          type={Type}
          className="w-96 h-10 border-[#ddd] border-[1px] rounded-lg shadow-sm"
        />
      </p>
    </>
  );
};

export default Inputs;
