import { useForm } from "react-hook-form";
import { AppDispatch, RootState } from "../../../Store/Store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFindDoctorByID } from "../Actions/FindDoctorByID";
import { useParams } from "react-router";
import { fetchCreateAppointement } from "../Actions/CreateAppointement";

export const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id } = useParams();

  const User = JSON.parse(window.localStorage.getItem("User")!);
  const Doctor: any = useSelector((state: RootState) => state.DoctorByID);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFindDoctorByID(id as string));
  }, [dispatch]);

  const handleFormSubmit = (data: any) => {
    dispatch(
      fetchCreateAppointement({
        ...data,
        userId: User.id,
        DoctorName: Doctor?.data?.result?.[0]?.Name,
        Place: Doctor?.data?.result?.[0]?.Clinic,
      })
    );
  };

  return { register, handleSubmit, handleFormSubmit, errors };
};
