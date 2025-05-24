import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
const useFormData = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [Messages, setMessages] = useState<any[]>([]);
  const Session = JSON.parse(window.localStorage.getItem("SessionID")!);
  const [MessageResponse, setMessageResponse] = useState<any[]>([]);
  const [isLoadMessage, setIsLoadMessage] = useState(false);
  const chatScreen = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatScreen.current?.scrollIntoView({ behavior: "smooth" });
  }, [Messages, MessageResponse]);

  const onSubmit = async (dataMessage: any) => {
    setIsLoadMessage(true);
    reset();
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
      .then(async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoadMessage(false);
        setMessageResponse((prevMessage) => [
          ...prevMessage,
          { message: data },
        ]);
      });
    setMessages([...Messages, dataMessage]);
  };

  const handleAddmessageFromBtns = async (el: any) => {
    setIsLoadMessage(true);
    reset();
    fetch("https://medipulse12-production.up.railway.app/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message: el.target.value,
        session_id: Session.session_id,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoadMessage(false);
        setMessageResponse((prevMessage) => [
          ...prevMessage,
          { message: data },
        ]);
      });
    setMessages([...Messages, { message: el.target.value }]);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    Messages,
    MessageResponse,
    isLoadMessage,
    chatScreen,
    handleAddmessageFromBtns,
  };
};

export default useFormData;
