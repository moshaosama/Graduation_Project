import { Link } from "react-router-dom";
import { ChangeTextByLanguage } from "../../Language/Language";
import Button from "../Button/Button";

const HeaderText = () => {
  return (
    <div
      className="absolute top-10 max-2xl:left-40 max-sm:w-fit w-[80pc]   max-sm:relative sm:my-10 max-sm:ml-10  opacity-15 transition-all duration-1000 left-80 max-sm:left-0 flex  flex-col gap-10 text-black"
      id="HeaderText"
    >
      <div className="max-sm:w-[24.5pc] max-sm:-mx-5">
        <p className="text-[#3790c4] font-bold max-sm:w-fit">
          {ChangeTextByLanguage("من أجل مستقبل أفضل", "For Better Future")}
        </p>
        <h1 className="text-blue-700 font-bold text-5xl w-[33pc] max-sm:w-[20pc] max-sm:text-3xl">
          {ChangeTextByLanguage(
            "اشعر بتحسن بشأن العثور على الرعاية الصحية",
            "Feel better about finding healthcare"
          )}
        </h1>
      </div>
      <p className="text-[#737373]  font-semibold max-sm:w-[24.5pc] max-sm:-mx-5">
        {ChangeTextByLanguage("صحتك هي مهمتنا", "Your health is our mission")}
      </p>
      <div className="flex gap-2 max-sm:mb-5">
        <Link to={"/contact"}>
          <Button Title="Contact us" backGround="[#23A6F0]" Color="white" />
        </Link>
        <Link to={"/aboutus"}>
          <Button Title="Learn More" backGround="" Color="[#23A6F0]" />
        </Link>
      </div>
    </div>
  );
};

export default HeaderText;
