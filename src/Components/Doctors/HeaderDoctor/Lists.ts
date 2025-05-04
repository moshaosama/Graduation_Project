import { ChangeTextByLanguage } from "../../../Language/Language";
import useAscending from "../../../Hooks/useAscending";
import useDescending from "../../../Hooks/useDescending";

export type FilterDoctorType = {
  Title: string;
  onclick: () => void;
};

const Doctors = JSON.parse(window.localStorage.getItem("Doctors")!);

export const FilterDoctorLists: FilterDoctorType[] = [
  {
    Title: ChangeTextByLanguage("جميع المرشحات", "All Filters"),
    onclick: () => {
      if (Doctors?.result?.length > 0) {
        return Doctors;
      }
    },
  },
  {
    Title: ChangeTextByLanguage("جميع المرشحات", "High to low cost"),
    onclick: () => useDescending(),
  },
  {
    Title: ChangeTextByLanguage("جميع المرشحات", "Low to high cost"),
    onclick: () => useAscending(),
  },
  {
    Title: ChangeTextByLanguage("جميع المرشحات", "Speciality"),
    onclick: () => {},
  },
];
