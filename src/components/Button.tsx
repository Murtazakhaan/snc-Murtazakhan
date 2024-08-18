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
        "px-4 py-2 border rounded-md dark:bg-white",
        "sm:px-6 sm:py-3",
        "text-xs sm:text-base",
        active
          ? "bg-[#20b2aa] dark:bg-[#20b2aa] text-white "
          : "bg-white text-gray-700",
        "hover:bg-blue-100 hover:text-black"
      )}
    >
      {children}
    </button>
  );
};
