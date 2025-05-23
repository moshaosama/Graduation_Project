import { GrNext } from "react-icons/gr";
import { useOpenChatApi } from "../Context/useOpenChatApi";
import clsx from "clsx";
import useFormData from "../Hooks/useFormData";

const Chat = () => {
  const { handleCloseChat, isOpenChat } = useOpenChatApi();
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    Messages,
    MessageResponse,
  } = useFormData();
  const ChatBot: { session_id: string; response: string } = JSON.parse(
    localStorage.getItem("SessionID") || "{}"
  );

  return (
    <div className="relative">
      <div
        className={clsx(
          "fixed bottom-28 w-[30pc] max-sm:w-[24pc] z-50 h-[30pc] bg-white border-2 border-solid border-gray-700 rounded-xl transition-all duration-300",
          isOpenChat ? "opacity-100 right-4" : "opacity-0 right-0"
        )}
      >
        <div className="flex justify-between items-center p-4 bg-blue-200 rounded-t-xl">
          <img
            src="WhatsApp_Image_2025-02-26_at_15.32.48_0ec7bdab-removebg-preview.png"
            alt="Logo.png"
            className="w-10"
          />
          <GrNext
            className="text-2xl font-bold cursor-pointer"
            onClick={handleCloseChat}
          />
        </div>
        <div className="overflow-y-scroll h-[23pc]">
          <h1 className="bg-gray-300 shadow-xl w-96 max-sm:w-72 m-3 p-2 rounded-xl text-sm font-semibold">
            {ChatBot.response}
          </h1>

          {Messages?.length > 0 &&
            Messages?.map((el: { message: string }, index: number) => (
              <>
                <h1
                  className="bg-blue-300 relative left-20 shadow-xl mt-3 w-96 max-sm:w-72  p-2 rounded-xl text-sm font-semibold"
                  key={index}
                >
                  {el.message}
                </h1>
                {MessageResponse?.[index]?.message?.response && (
                  <h1 className="bg-gray-300 shadow-xl w-96 max-sm:w-72 m-3 p-2 rounded-xl text-sm font-semibold">
                    {MessageResponse[index].message.response}
                  </h1>
                )}
              </>
            ))}
        </div>
        {/* UserQuestion */}
        <div className="absolute bottom-0 w-full">
          <div className="flex justify-between items-center p-2 bg-blue-200 rounded-b-xl">
            <form
              className="grid grid-cols-2 w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <p className="col-span-1">
                <input
                  type="text"
                  className="p-3 w-80 rounded-xl"
                  placeholder="Type Your Message..."
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message as string}
                  </p>
                )}
              </p>
              <p className="absolute right-2 bg-blue-700 w-32 p-3 rounded-xl text-center text-white font-bold">
                <button>Send</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
