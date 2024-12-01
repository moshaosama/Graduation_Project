import React from "react";

interface Props {
  Placeholder: string;
  Title: string;
  Type: string;
  HandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormSignUp = ({ Placeholder, Title, Type, HandleChange }: Props) => {
  return (
    <div className="my-5">
      <p className="flex max-sm:flex-col max-sm:items-start  justify-between items-center">
        <label htmlFor="">
          {Title} <span className="text-red-500">*</span>
        </label>

        <input
          type={Type}
          placeholder={Placeholder}
          className="my-2 w-96 max-sm:w-full rounded-lg p-1 border-[2px] border-black"
          onChange={HandleChange}
        />
      </p>
    </div>
  );
};

export default FormSignUp;
