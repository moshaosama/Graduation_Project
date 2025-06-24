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
          "overflow-hidden fixed bottom-28 bg-white rounded-xl border-2 border-gray-700 border-solid transition-all duration-300 w-[33pc] max-sm:w-[24pc] h-[30pc]",
          isOpenChat
            ? "right-4 z-50 mr-0 opacity-100"
            : "right-0 z-0 opacity-0 mr-[100pc]"
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
                <h1 className="relative left-32 p-2 my-5 w-96 text-sm font-semibold bg-blue-300 rounded-xl shadow-xl max-sm:left-28 max-sm:w-64">
                  {el.message}
                </h1>
                {isLoadMessage && index === Messages.length - 1 ? (
                  <SyncLoader className="p-2 mt-3" size={6} />
                ) : (
                  MessageResponse?.[index]?.message?.response && (
                    <>
                      <h1 className="p-2 m-3 w-96 text-sm font-semibold bg-gray-300 rounded-xl shadow-xl max-sm:w-72">
                        {MessageResponse[index].message.response}
                      </h1>
                      {MessageResponse[index].message.options ? (
                        <div className="flex gap-2 justify-between m-5">
                          {MessageResponse[index].message?.options?.map(
                            (btns: any, index: number) => (
                              <button
                                key={index}
                                value={btns}
                                className="px-6 py-1 font-bold bg-blue-200 rounded-xl transition-all duration-300 max-sm:px-4 hover:bg-blue-300"
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
                  <p className="text-sm text-red-500">
                    {errors.message.message as string}
                  </p>
                )}
              </p>
              <p className="absolute right-2 p-3 w-32 font-bold text-center text-white bg-blue-700 rounded-xl">
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
