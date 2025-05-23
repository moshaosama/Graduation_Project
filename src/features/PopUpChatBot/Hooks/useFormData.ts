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
  // const dispatch = useDispatch<AppDispatch>();
  const [Messages, setMessages] = useState<any[]>([]);

  const onSubmit = async (dataMessage: any) => {
    fetch("https://web-production-d8197.up.railway.app/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: dataMessage.message,
        session_id: "BjqS6GeQAgEjR51lCzJFGo3V5itaSDGnWhSCeLsOZc0",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });

    setMessages([...Messages, dataMessage]);
  };

  return { register, handleSubmit, errors, onSubmit, Messages };
};

export default useFormData;
