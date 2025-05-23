export const useGetStartMessage = () => {
  const ChatBot: { session_id: string; response: string } = JSON.parse(
    localStorage.getItem("SessionID") || "{}"
  );

  return { ChatBot };
};
