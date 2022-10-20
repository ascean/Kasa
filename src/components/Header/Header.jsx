import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

/**
 * Affichage du Header avec logo et menu de navigation
 * @returns 
 */
const Header = () => {
    const numColor = "#FF6060"
    return (
        <div className="navigation">
            <NavLink to ="/">
                <Logo colorLogo={numColor} />
            </NavLink>
            <ul>
                <NavLink end to="/"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink end to="/about"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Header;