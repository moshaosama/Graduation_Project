import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";
import { fetchDeleteAppointment } from "../Actions/DeleteAppointment";
import { fetchGetAppointements } from "../Actions/getAppointements";
import useNotifytoastify from "../../../Hooks/useNotifytoastify";
const useDeleteAppointment = () => {
  const { notifySuccess } = useNotifytoastify();
  const dispatch = useDispatch<AppDispatch>();
  const User = JSON.parse(window.localStorage.getItem("User")!);
  const handleDeleteAppointment = async (appointmentId: number) => {
    dispatch(fetchDeleteAppointment(appointmentId));
    await dispatch(fetchGetAppointements(User.id));
    notifySuccess("Appointment deleted successfully");
  };
  return { handleDeleteAppointment };
};

export default useDeleteAppointment;
