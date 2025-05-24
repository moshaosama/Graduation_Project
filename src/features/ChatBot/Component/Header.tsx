import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";
import { fetchStartChat } from "../../PopUpChatBot/Actions/StartChat";

export const Header = () => {
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
    </div>
  );
};
