import { createContext, ReactNode, useContext, useState } from "react";

interface CloseEndChatType {
  isCloseChat: boolean;
  OpenCloseChat: () => void;
  CloseChat: () => void;
  handleTriggerCloseChat: () => void;
}

const CloseChatBotContext = createContext<CloseEndChatType | null>(null);

export const CloseChatBotProvider = ({ children }: { children: ReactNode }) => {
  const [isCloseChat, setIsCloseChat] = useState(false);

  const OpenCloseChat = () => {
    setIsCloseChat(true);
  };

  const CloseChat = () => {
    setIsCloseChat(false);
  };

  const handleTriggerCloseChat = () => {
    setIsCloseChat(!isCloseChat);
  };

  return (
    <>
      <CloseChatBotContext.Provider
        value={{
          isCloseChat,
          OpenCloseChat,
          CloseChat,
          handleTriggerCloseChat,
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
