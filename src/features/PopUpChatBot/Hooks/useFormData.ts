import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";
import { fetchSendMessage } from "../Actions/SendMessage";
import { fetchStartChat } from "../Actions/StartChat";
const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: any) => {
    try {
      await dispatch(fetchStartChat("en")).unwrap();
      const ChatBot: { session_id: string } = JSON.parse(
        localStorage.getItem("SessionID") || "{}"
      );

      if (!ChatBot.session_id) {
        alert("Session ID is missing, please start a new chat.");
        return;
      }
      dispatch(
        fetchSendMessage({
          message: data.message,
          session_id: ChatBot.session_id,
        })
      );
    } catch (error) {
      alert("Failed to start chat or send message");
    }
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useFormData;
