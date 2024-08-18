import { LogsContextType } from "@/utils/common/logs";
import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    PropsWithChildren,
    FunctionComponent,
  } from "react";
  
  const LogsContext = createContext<LogsContextType | undefined>(undefined);

  type CartProvidertProps = {};
  
  export const LogsProvider:FunctionComponent<PropsWithChildren<CartProvidertProps>> = ({
    children,
  }) => {
    const [enableLogs, setEnableLogs] = useState(false);
  
    useEffect(() => {
    }, []);
  
   const handleToggleLogs = () => setEnableLogs(!enableLogs);

    return (
      <LogsContext.Provider
        value={{
            enableLogs,
            handleToggleLogs,
        }}
      >
        {children}
      </LogsContext.Provider>
    );
  };
  
  export const useLogs = (): LogsContextType => {
    const context = useContext(LogsContext);
    if (context === undefined) {
      throw new Error("useCart must be used within a CartProvider");
    }
    return context;
  };