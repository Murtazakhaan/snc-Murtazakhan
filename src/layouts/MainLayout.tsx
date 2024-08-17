import { FunctionComponent, PropsWithChildren, useCallback, useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person, User } from "@/utils/common/person";
import useFetch from "@/hooks/use-fetch";
import { UserCard } from "@/components/UserCard";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  const [activePerson, setAcitvePerson] = useState("");

  const handleUserChange = (person: string) => {
    setAcitvePerson(person);
  }

  const createNewController = useCallback(() => {
    return new AbortController();
  }, []);
  
  const { data: personData, loading, error } = useFetch<User>(
    `/api/person?person=${activePerson}`, 
    createNewController,
    activePerson
  );

  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center items-center"
      )}
    >
      <div className={classNames("flex gap-2 mb-4")}>
        {Object.values(Person).map((person) => (
          <Button
            key={person}
            active={activePerson === person}
            onClick={() => handleUserChange(person) }
          >
            {person}
          </Button>
        ))}
        <button />
      </div>
      <UserCard user={personData} isLoading={loading} error={error && activePerson} />
    </main>
  );
};
