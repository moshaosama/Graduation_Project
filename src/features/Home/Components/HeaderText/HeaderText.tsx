import { Link } from "react-router-dom";
import { ChangeTextByLanguage } from "../../../../Language/Language";
import Button from "../../../../Components/Button/Button";
import { useEffect, useRef, useState } from "react";
import useTransition from "../../../../Hooks/useTransition";

const initialStyles = {
  top: "0px",
  left: "0px",
  opacity: "0",
};
const Styles = {
  top: "0px",
  left: "10pc",
  opacity: "1",
};

const HeaderText = () => {
  const Text = useRef<HTMLDivElement>(null);
  useTransition(Text, initialStyles, Styles);
  const Texts = ["Feel better about finding healthcare"];
  const [startText, setStartText] = useState("");

  useEffect(() => {
    let currentIndex = 1;
    const interval = setInterval(async () => {
      if (currentIndex <= Texts[0].length) {
        setStartText(Texts[0].slice(0, currentIndex));
        currentIndex++;
      } else {
        await new Promise((resolve) => setTimeout(resolve, 500));
        currentIndex = 1;
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute top-[10pc] max-2xl:left-40 max-sm:w-fit w-[80pc]   max-sm:relative sm:my-10 max-sm:-ml-28  opacity-15 transition-all duration-1000 left-80 max-sm:left-0 flex  flex-col gap-10 text-black"
      ref={Text}
    >
      <div className="max-sm:w-[24pc] max-sm:-mx-5 ">
        <p className="text-[#3790c4] font-bold max-sm:w-fit">
          {ChangeTextByLanguage("من أجل مستقبل أفضل", "For Better Future")}
        </p>
        <h1 className="text-blue-700  font-bold text-5xl w-[33pc] max-sm:w-[20pc] max-sm:text-3xl">
          {ChangeTextByLanguage(
            "اشعر بتحسن بشأن العثور على الرعاية الصحية",
            startText + "|"
          )}
        </h1>
      </div>
      <p className="text-[#737373]  font-semibold max-sm:w-[24pc] max-sm:-mx-5">
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
