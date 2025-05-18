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
  const storedUser =
    typeof window !== "undefined" ? localStorage.getItem("User") : null;

  let User: User | null = null;
  try {
    User = storedUser ? (JSON.parse(storedUser) as User) : null;
  } catch (error) {
    console.error("Failed to parse user:", error);
  }

  const Doctor = useSelector(
    (state: RootState) => state.DoctorByID
  ) as DoctorType;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (User?.DoctorId != null) {
      dispatch(fetchFindDoctorByID(String(User.DoctorId)));
    }
  }, [dispatch, User?.DoctorId]);

  return { User, Doctor };
};

export default useGetDoctor;
