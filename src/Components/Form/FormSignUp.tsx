import { signUpProps } from "../../Types/User/sgnUp";

const FormSignUp = ({
  Placeholder,
  Title,
  Type,
  Name,
  HandleChange,
}: signUpProps) => {
  return (
    <div className="my-5">
      <p className="flex max-sm:flex-col max-sm:items-start  justify-between items-center">
        <label htmlFor="">
          {Title} <span className="text-red-500">*</span>
        </label>

        <input
          type={Type}
          name={Name}
          placeholder={Placeholder}
          className="my-2 w-96 max-sm:w-full rounded-lg p-1 border-[2px] border-black"
          onChange={HandleChange}
        />
      </p>
    </div>
  );
};

export default FormSignUp;
