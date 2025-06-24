import { useMemo } from "react";

const useGetLanguage = () => {
  const Language = useMemo(
    () => JSON.stringify(window.localStorage.getItem("Language")!),
    []
  );

  return { Language };
};

export default useGetLanguage;
