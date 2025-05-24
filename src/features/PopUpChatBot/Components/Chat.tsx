import { GrNext } from "react-icons/gr";
import { useOpenChatApi } from "../Context/useOpenChatApi";
import clsx from "clsx";
import useFormData from "../Hooks/useFormData";
import { useGetStartMessage } from "../Hooks/useGetStartMessage";
import { SyncLoader } from "react-spinners";
import HeaderChat from "./HeaderChat";

const Chat = () => {
  const { isOpenChat } = useOpenChatApi();

  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    Messages,
    MessageResponse,
    isLoadMessage,
    chatScreen,
    handleAddmessageFromBtns,
  } = useFormData();
  const { ChatBot } = useGetStartMessage();

  return (
    <div className="relative">
      <div
        className={clsx(
          "fixed bottom-28 w-[33pc] max-sm:w-[24pc] z-50 h-[30pc] bg-white  border-2 border-solid border-gray-700 rounded-xl transition-all duration-300",
          isOpenChat ? "opacity-100 right-4" : "opacity-0 right-0"
        )}
      >
        <HeaderChat />
        <div className="overflow-y-scroll h-[21.3pc]">
          <h1 className="bg-gray-300 shadow-xl w-[25pc] max-sm:w-72 m-3 p-2 rounded-xl text-sm font-semibold">
            {ChatBot.response}
          </h1>

          {Messages?.length > 0 &&
            Messages?.map((el: { message: string }, index: number) => (
              <div key={index} ref={chatScreen}>
                <h1 className="bg-blue-300 relative left-32 max-sm:left-28  shadow-xl my-5 w-96 max-sm:w-64  p-2 rounded-xl text-sm font-semibold">
                  {el.message}
                </h1>
                {isLoadMessage && index === Messages.length - 1 ? (
                  <SyncLoader className="mt-3 p-2" size={6} />
                ) : (
                  MessageResponse?.[index]?.message?.response && (
                    <>
                      <h1 className="bg-gray-300 shadow-xl w-96 max-sm:w-72 m-3 p-2 rounded-xl text-sm font-semibold">
                        {MessageResponse[index].message.response}
                      </h1>
                      {MessageResponse[index].message.options ? (
                        <div className="flex justify-between m-5 gap-2">
                          {MessageResponse[index].message?.options?.map(
                            (btns: any, index: number) => (
                              <button
                                key={index}
                                value={btns}
                                className="bg-blue-200 px-6 max-sm:px-4 rounded-xl font-bold hover:bg-blue-300 transition-all duration-300 py-1"
                                onClick={handleAddmessageFromBtns}
                              >
                                {btns}
                              </button>
                            )
                          )}
                        </div>
                      ) : null}
                    </>
                  )
                )}
              </div>
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
                  placeholder="Type Your Message..."
                  className="p-3 w-[23pc] max-sm:w-[14pc] rounded-xl"
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
