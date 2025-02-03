import { signUpProps } from "../../Types/User/sgnUp";

const FormSignUp = ({
  Placeholder,
  Title,
  Type,
  Name,
  HandleChange,
  Margin,
}: signUpProps) => {
  const Language = JSON.stringify(window.localStorage.getItem("Language"));
  return (
    <div className="my-2">
      <p
        className={`flex ${
          Language == '"English"' ? "flex" : "flex-row-reverse"
        } max-sm:flex-col max-sm:items-start  justify-between items-center`}
      >
        <label
          htmlFor=""
          className={`font-bold ${
            Language == '"English"' ? "flex" : "flex-row-reverse"
          } flex gap-1`}
        >
          {Title} <span className="text-red-500">*</span>
        </label>

        <input
          type={Type}
          name={Name}
          placeholder={Placeholder}
          className={`my-2 mx-${Margin} ${
            Language == '"English"' ? "text-start" : "text-end"
          } w-96 max-sm:w-full rounded-lg p-1 border-[2px] border-black`}
          onChange={HandleChange}
        />
      </p>
    </div>
  );
};

export default FormSignUp;
