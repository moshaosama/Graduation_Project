import { ChatBotMessages } from "../features/ChatBot/Component/ChatBotMessages";
import { Header } from "../features/ChatBot/Component/Header";
import { SideBarHistory } from "../features/ChatBot/Component/SideBarHistory";

export const ChatBot = () => {
  return (
    <>
      <div className="flex w-full justify-between">
        <div>
          <SideBarHistory />
        </div>
        <div className="mr-[30pc]">
          <Header />
          <ChatBotMessages />
        </div>
      </div>
    </>
  );
};
