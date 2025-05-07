import React from "react";
import useConvertLanguage from "../../Hooks/useConvertLanguage";

const TitleForSection = React.memo(({ Text }: { Text: string }) => {
  const { language } = useConvertLanguage();
  return (
    <h1
      className={`text-[#184C99] max-sm:w-fit text-4xl max-sm:text-3xl font-bold ${
        language === "English" ? "text-end" : ""
      } `}
    >
      {Text}
    </h1>
  );
});

export default TitleForSection;
