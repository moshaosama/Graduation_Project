import NewService from "./newService";

const ChatBot = () => {
  return (
    <>
      <NewService
        Image={
          <img
            src="/download-removebg-preview (6).png"
            alt="Chatbot.png"
            className="w-20"
          />
        }
        Title="ChatBot"
        Description="An AI-powered chatbot for seamless and intelligent conversations."
        Button={
          <button className="bg-white p-4 w-72 rounded-xl text-black font-bold">
            See Details
          </button>
        }
        BackGroundFrom="blue-400"
        BackGroundTo="blue-700"
        ColorText="white"
      />
    </>
  );
};

export default ChatBot;
