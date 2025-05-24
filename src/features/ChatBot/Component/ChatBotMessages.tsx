import { useGetStartMessage } from "../../PopUpChatBot/Hooks/useGetStartMessage";
import useFormData from "../../PopUpChatBot/Hooks/useFormData";
import { SyncLoader } from "react-spinners";

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
    errors,
  } = useFormData();
  return (
    <div className="flex justify-center">
      <div className="border-4 rounded-xl p-4 shadow-lg shadow-gray-500 my-10 border-blue-200 w-[60pc] max-sm:w-[25pc] max-sm:ml-0">
        <h1 className="bg-gray-300 shadow-xl w-[70%]  m-3 p-2 rounded-xl text-sm font-semibold">
          {ChatBot.response}
        </h1>
        {Messages?.length > 0 &&
          Messages?.map((el: { message: string }, index: number) => (
            <>
              <h1
                className="bg-blue-300 relative left-[33pc] max-sm:left-[8pc] shadow-xl mt-10 w-96 max-sm:w-56  p-2 rounded-xl text-sm font-semibold"
                key={index}
              >
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
            </>
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
