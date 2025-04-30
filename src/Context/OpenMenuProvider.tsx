import { createContext, ReactNode, useContext, useState } from "react";

const OpenMenuContext = createContext<any>(null);

interface OpenMenuProviderProps {
  children: ReactNode;
}

export const OpenMenuProvider = ({ children }: OpenMenuProviderProps) => {
  const [OpenMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu((prev) => !prev);
  return (
    <OpenMenuContext.Provider value={{ OpenMenu, toggleMenu }}>
      {children}
    </OpenMenuContext.Provider>
  );
};

export const useOpenMenu = () => useContext(OpenMenuContext);
