// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../../Store/Store";
import { useForm } from "react-hook-form";

export const useGetDoctorByName = () => {
  //   const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return { register, handleSubmit, onSubmit };
};
