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
  const User = JSON.parse(window.localStorage.getItem("User")!) as User;
  const Doctor = useSelector(
    (state: RootState) => state.DoctorByID
  ) as DoctorType;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFindDoctorByID(User.DoctorId.toString()));
  }, [dispatch, User.DoctorId]);

  return { User, Doctor };
};

export default useGetDoctor;
