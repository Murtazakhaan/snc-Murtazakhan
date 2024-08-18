import { useEffect } from "react";
import { useCurrentTime } from "./useCurrentTime";
import { useGlobalContext } from "@/context/GlobalContext";
import { User } from "@/utils/common/person";

export const useLogs = (user: User | null) => {
  const currentTime = useCurrentTime();
  const { enableLogs } = useGlobalContext();

  useEffect(() => {
    if (enableLogs && user) {
      console.log("Person Details:", user);
      console.log("Current Time:", currentTime);
    }
  }, [user, enableLogs]);

  return { user, currentTime };
};
