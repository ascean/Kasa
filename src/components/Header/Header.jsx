import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Header = () => {
    const numColor = "#FF6060"

    return (
        <div className="navigation">
            <Logo colorLogo={numColor} />
            <ul>
                <NavLink
                        to="/"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Accueil</li>
                </NavLink>
                <NavLink
                        to="/about"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Header;