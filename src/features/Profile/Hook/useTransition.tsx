const useTransition = () => {
  const Language = JSON.stringify(window.localStorage.getItem("Language"));

  const TransitionLanguage = {
    Language: `${Language == '"English"' ? "flex-row-reverse" : "flex"}`,
  };
  return { TransitionLanguage };
};

export default useTransition;
