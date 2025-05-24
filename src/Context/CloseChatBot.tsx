import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AppDispatch } from "../Store/Store";
import { useDispatch } from "react-redux";
import { fetchCreateHistory } from "../features/ChatBot/Action/CreateHistory";

interface CloseEndChatType {
  isCloseChat: boolean;
  OpenCloseChat: () => void;
  CloseChat: () => void;
  handleTriggerCloseChat: () => void;
  handleCloseChatWithCreateHoistory: (chatData: any[]) => void;
  ChatMessage: any;
}

const CloseChatBotContext = createContext<CloseEndChatType | null>(null);

export const CloseChatBotProvider = ({ children }: { children: ReactNode }) => {
  const [isCloseChat, setIsCloseChat] = useState(false);
  const [ChatMessage, setChatMessage] = useState<any>([]);
  const dispatch = useDispatch<AppDispatch>();
  const User = JSON.parse(window.localStorage.getItem("User")!);

  useEffect(() => {
    console.log("ChatMessage updated:", ChatMessage);
  }, [ChatMessage]);

  const OpenCloseChat = () => {
    setIsCloseChat(true);
  };

  const CloseChat = async () => {
    setIsCloseChat(false);
    await dispatch(
      fetchCreateHistory({
        Data: JSON.stringify(ChatMessage),
        userId: User?.id,
      })
    );
  };

  const handleTriggerCloseChat = () => {
    setIsCloseChat(!isCloseChat);
  };

  const handleCloseChatWithCreateHoistory = async (chatData: any[]) => {
    setChatMessage(chatData);
    console.log(chatData);
  };

  return (
    <>
      <CloseChatBotContext.Provider
        value={{
          isCloseChat,
          OpenCloseChat,
          CloseChat,
          handleTriggerCloseChat,
          handleCloseChatWithCreateHoistory,
          ChatMessage,
        }}
      >
        {children}
      </CloseChatBotContext.Provider>
    </>
  );
};

export const useCloseChatBotContext = () => {
  const context = useContext(CloseChatBotContext);
  if (!context) {
    throw new Error(
      "useCloseChatBotContext must be used within a CloseChatBotProvider"
    );
  }
  return context;
};
