import {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person, User } from "@/utils/common/person";
import { UserCard } from "@/components/UserCard";
import { useGlobalContext } from "@/context/GlobalContext";
import { Clock } from "@/components/Clock";
import { useLogs } from "@/hooks/useLogs";
import { useFetch } from "@/hooks/useFetch";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  const [activePerson, setAcitvePerson] = useState("");

  const handleUserChange = (person: string) => {
    setAcitvePerson(person);
  };

  const createNewController = useCallback(() => {
    return new AbortController();
  }, []);

  const {
    data: personData,
    loading,
    error,
  } = useFetch<User>(
    `/api/person?person=${activePerson}`,
    createNewController,
    activePerson
  );

  const { enableLogs, handleToggleLogs } = useGlobalContext();
  useLogs(personData);

  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center items-center px-3"
      )}
    >
      <div className="flex mb-4">
        <div className="flex gap-2">
          {Object.values(Person).map((person) => (
            <Button
              key={person}
              active={activePerson === person}
              onClick={() => handleUserChange(person)}
            >
              {person}
            </Button>
          ))}
          <button />
        </div>
        <div className="sm:border-l border-l-0 border-black dark:border-white sm:mx-2 sm:pl-2"></div>
        <div>
          <Button active={enableLogs} onClick={handleToggleLogs}>
            {enableLogs ? "Disable Logs" : "Enable Logs"}
          </Button>
        </div>
      </div>
      <UserCard
        user={personData}
        isLoading={loading && (activePerson ? true : false)}
        error={error && activePerson}
      />
      <Clock />
    </main>
  );
};
