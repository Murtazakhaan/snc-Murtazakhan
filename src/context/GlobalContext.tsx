import { GlobalContextType } from "@/utils/client/global-context";
import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  FunctionComponent,
} from "react";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

type GlobalProviderProps = {};

export const GlobalProvider: FunctionComponent<
  PropsWithChildren<GlobalProviderProps>
> = ({ children }) => {
  const [enableLogs, setEnableLogs] = useState(false);

  const handleToggleLogs = () => setEnableLogs((prev) => !prev);

  return (
    <GlobalContext.Provider
      value={{
        enableLogs,
        handleToggleLogs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
