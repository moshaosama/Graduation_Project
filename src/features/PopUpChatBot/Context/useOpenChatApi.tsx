import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";
import { fetchStartChat } from "../Actions/StartChat";

const OpenChatApiContext = createContext<any>(null);

const OpenChatApiProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenChat, setIsOpenChat] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const SessionId = JSON.parse(window.localStorage.getItem("SessionID")!);
  const handleOpenChat = () => {
    setIsOpenChat(true);
    if (SessionId) {
    } else {
      dispatch(fetchStartChat("en"));
    }
  };

  const handleCloseChat = () => {
    setIsOpenChat(!isOpenChat);
  };

  const handleTriggerChat = () => {
    setIsOpenChat(!isOpenChat);
    if (SessionId) {
    } else {
      dispatch(fetchStartChat("en"));
    }
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
