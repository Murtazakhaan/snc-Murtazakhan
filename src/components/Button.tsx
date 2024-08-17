import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";

type ButtonProps = {
  active: boolean | string;
  onClick: () => void;
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  active,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "px-2 py-1 border border-black dark:border-white transition-all",
        active ? "text-white dark:text-black dark:bg-white bg-black" : "border-black"
      )}
    >
      {children}
    </button>
  );
};
