export interface NavbarProps {
  setFun: () => void;
}
export interface User {
  displayName: string;
  DoctorId: number;
  userName: string;
  Status: string;
  Email: string;
  emails: {
    value: string;
  }[];
  photos: {
    value: string;
  }[];
}
