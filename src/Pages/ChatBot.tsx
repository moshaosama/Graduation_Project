import { ChatBotMessages } from "../features/ChatBot/Component/ChatBotMessages";
import { Header } from "../features/ChatBot/Component/Header";

export const ChatBot = () => {
  return (
    <>
      <div className="flex justify-center mx-48 w-full max-sm:mx-0">
        <div className="mr-[30pc] max-sm:mr-0">
          <Header />
          <ChatBotMessages />
        </div>
      </div>
    </>
  );
};
