import { useForm } from "react-hook-form";
import useGetAppointmentByID from "./useGetAppointmentByID";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";
import { fetchEditAppointment } from "../Actions/EditAppointment";
import { fetchGetAppointements } from "../Actions/getAppointements";
import useNotifytoastify from "../../../Hooks/useNotifytoastify";
interface AppointmentData {
  Name: string;
  PhoneNumber: number;
  Email: string;
}

const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { AppointmentyById } = useGetAppointmentByID();
  const dispatch = useDispatch<AppDispatch>();
  const User = JSON.parse(window.localStorage.getItem("User")!);
  const { notifySuccess } = useNotifytoastify();
  const onSubmit = (data: AppointmentData | any) => {
    dispatch(
      fetchEditAppointment({
        id: Number(AppointmentyById.data.result?.[0].id),
        Name: data.Name || AppointmentyById.data.result?.[0].Name,
        PhoneNumber:
          data.PhoneNumber || AppointmentyById.data.result?.[0]?.PhoneNumber,
        Email: data.Email || AppointmentyById.data.result?.[0].Email,
      })
    );
    dispatch(fetchGetAppointements(User.id));
    notifySuccess("Appointment updated successfully");
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useFormData;
