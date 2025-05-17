import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";
import { fetchSendMessage } from "../Actions/SendMessage";
const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: any) => {
    try {
      dispatch(
        fetchSendMessage({
          message: data.message,
        })
      );
    } catch (error) {
      alert("Failed to start chat or send message");
    }
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useFormData;
