import { useCloseChatBotContext } from "../Context/CloseChatBot";
import { useOpenChatApi } from "../features/PopUpChatBot/Context/useOpenChatApi";

const EndChatBot = () => {
  const { CloseChat } = useCloseChatBotContext();
  const { handleCloseChat } = useOpenChatApi();

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="bg-white shadow-black shadow-lg p-5 rounded-xl">
        <h1 className="text-xl font-semibold">
          Are you sure you want to close the chat?
        </h1>
        <div className="flex justify-around items-center mt-5">
          <button
            className="bg-blue-200 px-6 max-sm:w-fit max-sm:px-4 py-3 rounded-xl font-bold hover:bg-blue-300 transition-all duration-300 max-sm:py-1"
            onClick={() => {
              handleCloseChat();
              CloseChat();
            }}
          >
            Yes
          </button>
          <button
            className="bg-blue-200 px-6 max-sm:w-fit max-sm:px-4 py-3 rounded-xl font-bold hover:bg-blue-300 transition-all duration-300 max-sm:py-1"
            onClick={CloseChat}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndChatBot;
