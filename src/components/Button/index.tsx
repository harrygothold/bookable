import React, { FC, ReactNode } from "react";
import Classes from "./Button.module.scss";

interface Props {
  type: "submit" | "button";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

const Button: FC<Props> = ({
  type,
  className,
  children,
  onClick,
  disabled,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={[Classes.button, className && className].join(" ")}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
