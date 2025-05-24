import { useGetStartMessage } from "../../PopUpChatBot/Hooks/useGetStartMessage";
import { SyncLoader } from "react-spinners";
import useFormData from "../Hook/useFormData";
import { RxExit } from "react-icons/rx";

export const ChatBotMessages = () => {
  const { ChatBot } = useGetStartMessage();

  const {
    Messages,
    MessageResponse,
    isLoadMessage,
    handleAddmessageFromBtns,
    register,
    handleSubmit,
    onSubmit,
    handleEndChat,
    errors,
  } = useFormData();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative top-7 ml-[52pc] max-sm:ml-[17pc]">
        <button
          className="flex gap-4 items-center bg-red-500 p-2 rounded-xl text-white font-bold hover:bg-red-700 transition-all duration-300"
          onClick={handleEndChat}
        >
          <RxExit />
          End Chat
        </button>
      </div>
      <div className="border-4 rounded-xl p-4 shadow-lg shadow-gray-500 my-10 border-blue-200 w-[60pc] max-sm:w-[25pc] max-sm:ml-0">
        <h1 className="bg-gray-300 shadow-xl w-[70%]  m-3 p-2 rounded-xl text-sm font-semibold">
          {ChatBot.response}
        </h1>
        {Messages?.length > 0 &&
          Messages?.map((el: { message: string }, index: number) => (
            <div key={index}>
              <h1 className="bg-blue-300 relative left-[33pc] max-sm:left-[8pc] shadow-xl mt-10 w-96 max-sm:w-56  p-2 rounded-xl text-sm font-semibold">
                {el.message}
              </h1>

              {isLoadMessage && index === Messages?.length - 1 ? (
                <SyncLoader className="m-3 p-2" size={10} />
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
                              className="bg-blue-200 px-6  w-96 max-sm:w-fit max-sm:px-4 py-3  rounded-xl font-bold hover:bg-blue-300 transition-all duration-300 max-sm:py-1"
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
        <form
          className="flex items-center justify-center mt-10 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="flex flex-col">
            <input
              type="text"
              className="border-2 border-blue-200 px-4 py-2 w-[43pc] max-sm:w-[14pc] rounded-xl"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-red-500 font-bold text-sm">
                {errors.message.message as string}
              </p>
            )}
          </p>

          <button className="bg-blue-600 px-10 max-sm:px-3  py-3 rounded-xl text-white font-bold max-sm:font-semibold max-sm:text-sm hover:bg-blue-400 transition-all duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
