import React, { FC } from "react";
import { Link as ILink } from "../../Navigation/links";
import Classes from "./MobileMenu.module.scss";
import { Link } from "react-router-dom";

interface Props {
    showMenu: boolean;
    navLinks: ILink[];
    handleSignOut: () => void;
}

const MobileMenu: FC<Props> = ({ showMenu, navLinks, handleSignOut }) => {
    return (
        <div className={[Classes.MenuContainer, showMenu ? Classes.show : ''].join(' ')}>
            <ul className={Classes.LinksContainer}>
                {navLinks.map((link: ILink) => (
                    <li key={link.title}>
                        <Link className={Classes.link} to={link.href}>{link.title}</Link>
                    </li>
                ))}
                <li>
                    <button className={Classes.signout} onClick={handleSignOut}>Sign Out</button>
                </li>
            </ul>
        </div>
    );
};

export default MobileMenu;
