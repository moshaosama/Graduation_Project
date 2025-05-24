import { GrNext } from "react-icons/gr";
import { useOpenChatApi } from "../Context/useOpenChatApi";
import { useCloseChatBotContext } from "../../../Context/CloseChatBot";

const HeaderChat = () => {
  const { handleCloseChat } = useOpenChatApi();
  const { OpenCloseChat } = useCloseChatBotContext();
  return (
    <div className="flex justify-between items-center p-4 bg-blue-200 rounded-t-xl">
      <img
        src="WhatsApp_Image_2025-02-26_at_15.32.48_0ec7bdab-removebg-preview.png"
        alt="Logo.png"
        className="w-10"
      />
      <GrNext
        className="text-2xl font-bold cursor-pointer"
        onClick={() => {
          handleCloseChat();
          OpenCloseChat();
        }}
      />
    </div>
  );
};

export default HeaderChat;
