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
    <div className="flex flex-col justify-center items-center">
      <div className="relative top-7 ml-[52pc] max-sm:ml-[17pc]">
        <button
          className="flex gap-4 items-center p-2 font-bold text-white bg-red-500 rounded-xl transition-all duration-300 hover:bg-red-700"
          onClick={handleEndChat}
        >
          <RxExit />
          End Chat
        </button>
      </div>
      <div className="border-4 rounded-xl p-4 shadow-lg shadow-gray-500 my-10 border-blue-200 w-[60pc] max-sm:w-[24pc] max-sm:ml-8">
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
                <SyncLoader className="p-2 m-3" size={10} />
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
                              className="px-6 py-3 w-96 font-bold bg-blue-200 rounded-xl transition-all duration-300 max-sm:w-fit max-sm:px-4 hover:bg-blue-300 max-sm:py-1"
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
          className="flex gap-4 justify-center items-center mt-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="flex flex-col">
            <input
              type="text"
              className="border-2 border-blue-200 px-4 py-2 w-[43pc] max-sm:w-[14pc] rounded-xl"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-sm font-bold text-red-500">
                {errors.message.message as string}
              </p>
            )}
          </p>

          <button className="px-10 py-3 font-bold text-white bg-blue-600 rounded-xl transition-all duration-300 max-sm:px-3 max-sm:font-semibold max-sm:text-sm hover:bg-blue-400">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
