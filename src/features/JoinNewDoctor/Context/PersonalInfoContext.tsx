import { createContext, useContext, useState } from "react";
import { ContextType } from "../../../Types/ContextTypes";

const PersonalInfoContext = createContext<any>(null);

const PersonalInfoProvider = ({ children }: ContextType) => {
  const [OpenModelPersonalInfo, setOpenModelPersonalInfo] = useState(true);

  const toogleOpenModelPersonalInfo = async () => {
    try {
      setOpenModelPersonalInfo(!OpenModelPersonalInfo);
    } catch (err) {
      throw new Error(err as string);
    }
  };

  return (
    <PersonalInfoContext.Provider
      value={{ OpenModelPersonalInfo, toogleOpenModelPersonalInfo }}
    >
      {children}
    </PersonalInfoContext.Provider>
  );
};

export default PersonalInfoProvider;

export const usePersonalInfoContext = () => useContext(PersonalInfoContext);
