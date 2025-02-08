import { ReactElement } from "react";

export interface SpecialityCardProps {
  Element: ReactElement;
  Label: string;
  Title: string;
  onCLick: () => void;
  DropDown: ReactElement;
}
