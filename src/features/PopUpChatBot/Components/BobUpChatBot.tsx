import { FaRegHandPointUp, FaRobot } from "react-icons/fa";
import useScrollOpen from "../Hooks/useScrollOpen";
import clsx from "clsx";
import Chat from "./Chat";
import { useOpenChatApi } from "../Context/useOpenChatApi";
const BobUpChatBot = () => {
  const { isOpen } = useScrollOpen();
  const { isOpenChat, handleTriggerChat } = useOpenChatApi();
  return (
    <>
      <div>
        {isOpenChat && <Chat />}
        <div
          onClick={handleTriggerChat}
          className={clsx(
            "w-16 h-16 flex justify-center items-center bg-blue-300 rounded-full fixed bottom-10 right-10 cursor-pointer transition-all duration-300"
          )}
        >
          <FaRobot className="text-3xl text-white" />
        </div>
        <div
          className={clsx(
            "w-16 h-16 flex justify-center items-center bg-blue-300 rounded-full fixed bottom-10 cursor-pointer transition-all duration-300",
            isOpen ? "opacity-100 left-10" : "opacity-0 left-0"
          )}
        >
          <a href="#Navbar">
            <FaRegHandPointUp className="text-3xl text-white" />
          </a>
        </div>
      </div>
    </>
  );
};

export default BobUpChatBot;
