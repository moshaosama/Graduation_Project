import { ChangeTextByLanguage } from "../../../Language/Language";

export type FilterDoctorType = {
  Title: string;
};

export const FilterDoctorLists: FilterDoctorType[] = [
  {
    Title: ChangeTextByLanguage("جميع المرشحات", "All Filters"),
  },
  {
    Title: ChangeTextByLanguage("جميع المرشحات", "High to low cost"),
  },
  {
    Title: ChangeTextByLanguage("جميع المرشحات", "Low to high cost"),
  },
  {
    Title: ChangeTextByLanguage("جميع المرشحات", "Speciality"),
  },
];
