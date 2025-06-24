import { FaRegHandPointUp, FaRobot } from "react-icons/fa";
import useScrollOpen from "../Hooks/useScrollOpen";
import clsx from "clsx";
import Chat from "./Chat";
import { useOpenChatApi } from "../Context/useOpenChatApi";
const BobUpChatBot = () => {
  const { isOpen } = useScrollOpen();
  const { handleTriggerChat } = useOpenChatApi();
  return (
    <>
      <div>
        <Chat />
        <div
          onClick={handleTriggerChat}
          className={clsx(
            "flex fixed right-10 bottom-10 justify-center items-center w-16 h-16 bg-blue-300 rounded-full transition-all duration-300 cursor-pointer"
          )}
        >
          <FaRobot className="text-3xl text-white" />
        </div>
        <div
          className={clsx(
            "flex fixed bottom-10 justify-center items-center w-16 h-16 bg-blue-300 rounded-full transition-all duration-300 cursor-pointer",
            isOpen ? "left-10 opacity-100" : "left-0 opacity-0"
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
