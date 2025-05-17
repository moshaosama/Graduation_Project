export interface ProfileDataProps {
  TitleEN: string;
  TitleAR: string;
  Lists: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickSave: () => void;
  disabled?: boolean;
}
