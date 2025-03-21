import { useState } from "react";

const useDropDownState = () => {
  const [DropDownState, setDropDownState] = useState({
    Speciality: false,
    Location: false,
    Area: false,
  });

  return { DropDownState, setDropDownState };
};

export default useDropDownState;
