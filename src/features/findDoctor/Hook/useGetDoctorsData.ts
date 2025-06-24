import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ChangeTextByLanguage } from "../../../Language/Language";
import { fetchAllDoctor } from "../../../Store/Reducer/AllDoctor/AllDoctor";
import { fetchDoctor } from "../../../Store/Reducer/Doctor/DoctorReducer";
import { AppDispatch } from "../../../Store/Store";

export const useGetDoctorsData = () => {
  const dispatch = useDispatch<AppDispatch>();
  const Navigate = useNavigate();
  const FilterSpeciality = useRef(null);
  const initialStyle = {
    top: "20pc",
    opacity: "0",
  };

  const Styles = {
    top: "26pc",
    opacity: "1",
  };

  const [data, setData] = useState({
    Speciality: ChangeTextByLanguage("أختار التخصص", "Choose specialty"),
    City: ChangeTextByLanguage("القاهره", "Choose city"),
    Area: ChangeTextByLanguage("اختار المنطقه", "Choose area"),
  });

  const [DropDownState, setDropDownState] = useState({
    Speciality: false,
    Location: false,
    Area: false,
  });

  const handleSpecialityState = () => {
    setDropDownState({
      ...DropDownState,
      Speciality: !DropDownState.Speciality,
    });
    window.scrollTo({ top: 510, behavior: "smooth" });
  };

  const handleClickSave = async () => {
    try {
      if (
        data.Speciality ===
          ChangeTextByLanguage("أختار التخصص", "Choose a specialty") &&
        data.City === ChangeTextByLanguage("القاهره", "Choose City") &&
        data.Area === ChangeTextByLanguage("اختار المنطقه", "Choose Facility")
      ) {
        dispatch(fetchAllDoctor());
      } else {
        dispatch(fetchDoctor(data));
      }
      Navigate("/doctors");
    } catch (err) {
      return err;
    }
  };

  const hancleClick = (id: string) => {
    const ELement = document.getElementById(id);
    const allElements = document.querySelectorAll(".Active");
    allElements.forEach((ele) => {
      ele.classList.remove("Active");
    });
    ELement?.classList.add("Active");
  };

  return {
    FilterSpeciality,
    initialStyle,
    Styles,
    setData,
    data,
    handleSpecialityState,
    handleClickSave,
    hancleClick,
    DropDownState,
    setDropDownState,
  };
};
