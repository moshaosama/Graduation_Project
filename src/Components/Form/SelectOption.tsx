import { memo } from "react";
import styleJoinNewDoctor from "../JoinNewDoctor/JoinNewDoctor.module.css";

type SelectOptionType<T> = {
  Options: T[];
};

const SelectOption = memo(<T,>({ Options }: SelectOptionType<T>) => {
  const { Input } = styleJoinNewDoctor;
  return (
    <select
      className={`${Input} max-sm:w-full shadow-sm font-semibold text-[#414141]`}
    >
      {Options.map((option: any, index) => (
        <option key={index} value={option as string}>
          {option?.Specialty_name}
        </option>
      ))}
    </select>
  );
});

export default SelectOption;
