import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";
import { fetchStartChat } from "../Actions/StartChat";

const OpenChatApiContext = createContext<any>(null);

const OpenChatApiProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenChat, setIsOpenChat] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleOpenChat = () => {
    setIsOpenChat(true);
    dispatch(fetchStartChat("en"));
  };

  const handleCloseChat = () => {
    setIsOpenChat(!isOpenChat);
  };

  const handleTriggerChat = () => {
    setIsOpenChat(!isOpenChat);
    dispatch(fetchStartChat("en"));
  };

  return (
    <OpenChatApiContext.Provider
      value={{
        isOpenChat,
        handleOpenChat,
        handleCloseChat,
        handleTriggerChat,
      }}
    >
      {children}
    </OpenChatApiContext.Provider>
  );
};

export default OpenChatApiProvider;

export const useOpenChatApi = () => useContext(OpenChatApiContext);
