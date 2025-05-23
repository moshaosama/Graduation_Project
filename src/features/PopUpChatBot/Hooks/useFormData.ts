import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../../Store/Store";
import { useState } from "react";
const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [Messages, setMessages] = useState<any[]>([]);
  const Session = JSON.parse(window.localStorage.getItem("SessionID")!);
  const [MessageResponse, setMessageResponse] = useState<any[]>([]);

  const onSubmit = async (dataMessage: any) => {
    fetch("https://medipulse12-production.up.railway.app/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message: dataMessage.message,
        session_id: Session.session_id,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMessageResponse((prevMessage) => [
          ...prevMessage,
          { message: data },
        ]);
      });
    console.log(MessageResponse);

    setMessages([...Messages, dataMessage]);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    Messages,
    MessageResponse,
  };
};

export default useFormData;
