import React, { FC } from "react";

interface ButtonProps {
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  color: string;
}

export const Button: FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  color,
}) => {
  return (
    <button
      type={type}
      className={`${color} text-white  rounded-md px-3 py-1 text-sm} onClick={onClick}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
