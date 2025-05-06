import { useState } from "react";
import { ChangeTextByLanguage } from "../Language/Language";

const useChooseDoctor = () => {
  const [choooseDoctor, setChoooseDoctor] = useState({
    Speciality: ChangeTextByLanguage("أختار التخصص", "Choose a specialty"),
    City: ChangeTextByLanguage("القاهره", "Choose City"),
    Area: ChangeTextByLanguage("اختار المنطقه", "Choose Facility"),
  });

  return { choooseDoctor, setChoooseDoctor };
};

export default useChooseDoctor;
