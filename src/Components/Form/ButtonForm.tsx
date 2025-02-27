import { useMemo } from "react";
import { ButtonFormProps } from "../../Types/User/Login";

const ButtonForm = ({ Value, Width, handleClick }: ButtonFormProps) => {
  const width = useMemo(() => `w-${Width}`, [Width]);
  return (
    <>
      <input
        type="submit"
        value={Value}
        className={`bg-red-600 hover:bg-red-900 transition-all duration-300 ${width} text-white font-bold py-1 rounded-lg cursor-pointer`}
        onClick={handleClick}
      />
    </>
  );
};

export default ButtonForm;
