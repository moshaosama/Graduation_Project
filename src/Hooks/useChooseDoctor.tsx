import { useState } from "react";
import { ChangeTextByLanguage } from "../Language/Language";

const useChooseDoctor = () => {
  const [choooseDoctor, setChoooseDoctor] = useState({
    Speciality: ChangeTextByLanguage("أختار التخصص", "Choose specialty"),
    City: ChangeTextByLanguage("القاهره", "Choose city"),
    Area: ChangeTextByLanguage("اختار المنطقه", "Choose Facility"),
  });

  return { choooseDoctor, setChoooseDoctor };
};

export default useChooseDoctor;
