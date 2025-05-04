import { useState } from "react";

export enum OpenModelTypes {
  Name = "Name",
  Speciality = "Speciality",
  Location = "Location",
  Fees = "Fees",
}

const useFormTransition = () => {
  const [OpenModel, setOpenModel] = useState({
    Name: false,
    Speciality: false,
    Location: false,
    Fees: false,
  });

  const handleOpenModel = (Type: OpenModelTypes) => {
    setOpenModel((prev) => ({
      ...prev,
      [Type]: !OpenModel[Type],
    }));
  };

  const handleCloseAll = () => {
    setOpenModel({
      Name: false,
      Speciality: false,
      Location: false,
      Fees: false,
    });
  };

  return {
    OpenModel,
    handleOpenModel,
    handleCloseAll,
  };
};

export default useFormTransition;
