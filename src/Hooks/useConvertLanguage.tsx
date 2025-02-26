import { useState, useEffect } from "react";

const useConvertLanguage = () => {
  const [language, setLanguage] = useState(
    window.localStorage.getItem("Language") || "Arabic"
  );

  useEffect(() => {
    window.localStorage.setItem("Language", language);
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === "English" ? "Arabic" : "English";
    setLanguage(newLanguage);
    window.location.reload();
  };

  return { language, toggleLanguage };
};

export default useConvertLanguage;
