import { ChatBotMessages } from "../features/ChatBot/Component/ChatBotMessages";
import { Header } from "../features/ChatBot/Component/Header";
import { SideBarHistory } from "../features/ChatBot/Component/SideBarHistory";

export const ChatBot = () => {
  return (
    <>
      <div className="flex w-full gap-8">
        <div>
          <SideBarHistory />
        </div>
        <div>
          <Header />
          <ChatBotMessages />
        </div>
      </div>
    </>
  );
};
