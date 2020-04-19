import React, { FC } from "react";
import Classes from "./Navigation.module.scss";
import links, { Link as ILink } from "./links";
import { Link, useHistory } from "react-router-dom";
import MobileNav from "../MobileNav";

const Navigation: FC = () => {
  const history = useHistory();
  const handleSignout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  const token = localStorage.getItem("token");
  return (
    <>
      {token && (
        <>
          <nav className={Classes.nav}>
            <ul className={Classes["nav-links"]}>
              {links.map((link: ILink) => (
                <li key={link.title}>
                  <Link to={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <div className={Classes.signout}>
              <button onClick={handleSignout}>Sign Out</button>
            </div>
          </nav>
          <MobileNav navLinks={links} handleSignOut={handleSignout} />
        </>
      )}
    </>
  );
};

export default Navigation;
