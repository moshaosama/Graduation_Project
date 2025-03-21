import React from "react";

const useDelay = () => {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  return { delay };
};

export default useDelay;
