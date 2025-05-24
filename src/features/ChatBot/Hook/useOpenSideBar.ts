import { useState } from "react";

export const useOpenSideBar = () => {
  const [OpenSidebar, setopenSideBar] = useState(false);

  const handleTriggerSidebar = () => {
    setopenSideBar(!OpenSidebar);
  };

  return { OpenSidebar, handleTriggerSidebar };
};
