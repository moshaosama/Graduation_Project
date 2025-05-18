import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/Store";
import { useEffect } from "react";
import { fetchFindDoctorByID } from "../../BookDoctor/Actions/FindDoctorByID";

interface User {
  DoctorId: number;
  Email: string;
  Status: string;
  mobilePhone: string;
  userName: string;
  photos: {
    value: string;
  }[];
  displayName: string;
  emails: {
    value: string;
  }[];
}

interface DoctorType {
  data: {
    result: {
      City: string;
      Clinic: string;
      ConsultationFee: number;
      Email: string;
      Gender: string;
      Specialty_name: string;
    }[];
  };
  loading: boolean;
  error: string;
}

const useGetDoctor = () => {
  const storedUser = window.localStorage.getItem("User");
  const User = storedUser ? (JSON.parse(storedUser) as User) : null;

  const Doctor = useSelector(
    (state: RootState) => state.DoctorByID
  ) as DoctorType;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (User?.DoctorId) {
      dispatch(fetchFindDoctorByID(User.DoctorId.toString()));
    }
  }, [dispatch, User?.DoctorId]);

  return { User, Doctor };
};

export default useGetDoctor;
