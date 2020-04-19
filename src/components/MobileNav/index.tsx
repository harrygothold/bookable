import React, { FC, useState } from "react";
import BurgerIcon from "./BurgerIcon/BurgerIcon";
import MobileMenu from "./MobileMenu";
import { Link } from "../Navigation/links";

interface Props {
  navLinks: Link[];
  handleSignOut: () => void;
}

const MobileNav: FC<Props> = ({ navLinks, handleSignOut }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  if (showMenu) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
  return (
    <>
      <BurgerIcon toggleMenu={toggleMenu} showMenu={showMenu} />
      <MobileMenu showMenu={showMenu} handleSignOut={handleSignOut} navLinks={navLinks} />
    </>
  );
};

export default MobileNav;
