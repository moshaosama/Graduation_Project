import { memo } from "react";
import styleJoinNewDoctor from "../JoinNewDoctor/JoinNewDoctor.module.css";

type SelectOptionType<T> = {
  Options: T[];
};

const SelectOption = memo(<T,>({ Options }: SelectOptionType<T>) => {
  const { Input } = styleJoinNewDoctor;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <select
        className={`${Input}  w-full shadow-sm font-semibold text-[#414141]`}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select an option
        </option>
        {Options.map((option: any, index) => (
          <option key={index} value={option.Specialty_name}>
            {option.Specialty_name}
          </option>
        ))}
      </select>
    </div>
  );
});

export default SelectOption;
