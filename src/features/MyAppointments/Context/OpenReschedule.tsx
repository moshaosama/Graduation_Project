import { createContext, useContext, useState } from "react";

const OpenRescheduleContext = createContext<any>(null);

const OpenRescheduleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [OpenReschedule, setOpenReschedule] = useState(false);

  const handleOpenReschedule = () => {
    setOpenReschedule(true);
  };

  const handleCloseReschedule = () => {
    setOpenReschedule(false);
  };

  return (
    <OpenRescheduleContext.Provider
      value={{ OpenReschedule, handleOpenReschedule, handleCloseReschedule }}
    >
      {children}
    </OpenRescheduleContext.Provider>
  );
};

export const useOpenRescheduleContext = () => useContext(OpenRescheduleContext);

export default OpenRescheduleProvider;
