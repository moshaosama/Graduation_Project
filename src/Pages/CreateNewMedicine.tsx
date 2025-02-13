import { useDispatch, useSelector } from "react-redux";
import Inputs from "../Components/Form/Inputs";
import { AppDispatch, RootState } from "../Store/Store";
import ButtonForm from "../Components/Form/ButtonForm";
import { createNewMedicine } from "../Store/Reducer/MedicineTracker/CreateNewMedicine";
import React, { useState } from "react";

const CreateNewMedicine = () => {
  const state = useSelector((state: RootState) => state.createMedicine);
  const dispatch = useDispatch<AppDispatch>();
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  return (
    <div className=" flex flex-col py-32 justify-center items-center gap-10">
      <h1 className=" text-2xl font-bold font-sans ">Create New Medcine</h1>
      <div className="flex flex-col gap-2">
        <Inputs
          Label="Medicine Name"
          Type="text"
          placeHolder="Please Enter Medcine Name"
          ChangeEvent={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <p
          className={`flex  max-sm:flex-col my-2 gap-4 items-center  justify-between`}
        >
          <label htmlFor="Description" className={`font-bold flex gap-2 `}>
            <span>Description</span>
            <span className="text-[red]">*</span>
          </label>
          <textarea
            className="w-96 px-3 max-sm:w-full h-24 border-[#ddd] border-[1px] rounded-lg shadow-sm"
            placeholder="Description"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
            name="Description"
          />
        </p>
        <div className="flex justify-center gap-10">
          <ButtonForm
            Value="Save"
            Width="28"
            handleClick={() =>
              dispatch(createNewMedicine({ Name, Description }))
            }
          />
          <ButtonForm Value="Cancel" Width="28" handleClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewMedicine;
