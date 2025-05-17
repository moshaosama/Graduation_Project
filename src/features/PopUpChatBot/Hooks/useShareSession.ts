import React, { useState } from "react";

const useShareSession = () => {
  const [sessionId, setSessionID] = useState("");
  return { sessionId, setSessionID };
};

export default useShareSession;
