import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/Store";
import { fetchGetAppointmentById } from "../Actions/GetAppointmentById";
import { useOpenRescheduleContext } from "../Context/OpenReschedule";
interface AppointmentyById {
  data: {
    result: {
      id: string;
      Name: string;
      PhoneNumber: number;
      Email: string;
    }[];
    message: string;
    status: string;
  };
  loading: boolean;
  error: string;
}

const useGetAppointmentByID = () => {
  const dispatch = useDispatch<AppDispatch>();
  const AppointmentyById = useSelector(
    (state: RootState) => state.AppointmentByID
  ) as AppointmentyById;
  const { handleOpenReschedule } = useOpenRescheduleContext();

  const handleGetAppointmentByID = (id: string) => {
    handleOpenReschedule();
    dispatch(fetchGetAppointmentById(id));
  };

  return {
    AppointmentyById,
    handleGetAppointmentByID,
  };
};

export default useGetAppointmentByID;
