import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/Store";
import { useEffect } from "react";
import { fetchGetAppointements } from "../Actions/getAppointements";

interface AppointementsData {
  data: {
    result: {
      id: number;
      Name: string;
      PhoneNumber: number;
      Email: string;
      Date: string;
      Time: string;
      Place: string;
      DoctorName: string;
    }[];
  };
  loading: boolean;
  error: string;
}

const useGetMyAppointements = () => {
  const AppointementsData = useSelector(
    (state: RootState) => state.myAppointements
  ) as AppointementsData;

  const dispatch = useDispatch<AppDispatch>();
  const User = JSON.parse(window.localStorage.getItem("User")!);

  useEffect(() => {
    if (User?.id) {
      dispatch(fetchGetAppointements(User.id));
    }
  }, [User?.id]);

  return { AppointementsData };
};

export default useGetMyAppointements;
