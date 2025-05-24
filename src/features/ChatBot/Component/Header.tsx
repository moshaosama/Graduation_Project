import { useEffect } from "react";
import useFormData from "../../PopUpChatBot/Hooks/useFormData";
import { useGetStartMessage } from "../../PopUpChatBot/Hooks/useGetStartMessage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";
import { fetchStartChat } from "../../PopUpChatBot/Actions/StartChat";
import { SyncLoader } from "react-spinners";

export const Header = () => {
  const { ChatBot } = useGetStartMessage();

  const {
    Messages,
    MessageResponse,
    register,
    handleSubmit,
    onSubmit,
    errors,
    isLoadMessage,
    handleAddmessageFromBtns,
  } = useFormData();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchStartChat("en"));
  }, []);
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-blue-700 font-bold text-4xl max-sm:text-2xl max-sm:w-[20pc] w-[40pc] text-center">
          Use our symptom checker to learn why you’re not feeling well.
        </h1>
        <img
          src="WhatsApp_Image_2025-02-26_at_22.59.18_b28e4f7c-removebg-preview.png"
          alt="chatbotLogo.png"
          className="w-36 max-sm:w-20"
        />
      </div>

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
