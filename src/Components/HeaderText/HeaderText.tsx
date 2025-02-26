import { ChangeTextByLanguage } from "../../Language/Language";
import Button from "../Button/Button";

const HeaderText = () => {
  return (
    <div
      className="absolute top-10 w-[80pc] max-sm:w-0  max-sm:relative sm:my-10  opacity-15 transition-all duration-1000 left-80 max-sm:left-0 flex  flex-col gap-10 text-black"
      id="HeaderText"
    >
      <div>
        <p className="text-[#3790c4] font-bold">
          {ChangeTextByLanguage("من أجل مستقبل أفضل", "For Better Future")}
        </p>
        <h1 className="text-blue-700 font-bold text-5xl w-[33pc]">
          {ChangeTextByLanguage(
            "اشعر بتحسن بشأن العثور على الرعاية الصحية",
            "Fell better about finding healthcare"
          )}
        </h1>
      </div>
      <p className="text-[#737373] font-semibold">
        {ChangeTextByLanguage("صحتك هي مهمتنا", "Your health is our mission")}
      </p>
      <div className="flex gap-2">
        <Button Title="Contact us" backGround="[#23A6F0]" Color="white" />
        <Button Title="Learn More" backGround="" Color="[#23A6F0]" />
      </div>
    </div>
  );
};

export default HeaderText;
