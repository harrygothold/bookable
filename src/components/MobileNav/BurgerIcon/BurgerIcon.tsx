import React, { FC } from "react";
import Classes from "./BurgerIcon.module.scss";

interface Props {
  toggleMenu: () => void;
  showMenu: boolean;
}

const BurgerIcon: FC<Props> = ({ showMenu, toggleMenu }) => {
  return (
    <div
      onClick={toggleMenu}
      className={[Classes.container, showMenu ? Classes.toggled : ""].join(" ")}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerIcon;
