import useConvertLanguage from "../../Hooks/useConvertLanguage";

const TitleForSection = ({ Text }: { Text: string }) => {
  const { language } = useConvertLanguage();
  return (
    <h1
      className={`text-[#184C99] text-5xl font-bold ${
        language === "English" ? "text-end" : ""
      } `}
    >
      {Text}
    </h1>
  );
};

export default TitleForSection;
