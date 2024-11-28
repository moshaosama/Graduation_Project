import React from "react";

interface Props {
  Title: string;
  Type: string;
  Id: string;
}

const Form = ({ Title, Type, Id }: Props) => {
  return (
    <>
      <div className="my-7 ">
        <p className="flex flex-col">
          <label htmlFor={Id} className="font-bold">
            {Title} <span className="text-red-500">*</span>
          </label>
          <input
            type={Type}
            name={Id}
            id={Id}
            className="my-2 rounded-lg p-2"
          />
        </p>
      </div>
    </>
  );
};

export default Form;
