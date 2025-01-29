export interface loginProps {
  Title: string;
  Type: string;
  Id: string;
  CahngeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonFormProps {
  Value: string;
  Width: string;
  handleClick: () => void;
}
