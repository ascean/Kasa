import React from 'react';
import LogoItem from './LogoItem';

/**
 * Affichage du logo de la couleur passée en paramètre
 * @param {string} color 
 * @returns 
 */
const Logo = (color) => {
    return (
        <div className="logo">
            <LogoItem key="k" letter="k" color={color.colorLogo} />
            <LogoItem key="house" letter = "house" color={color.colorLogo} />
            <LogoItem key="s" letter = "s" color={color.colorLogo} />
            <LogoItem key="a" letter = "a" color={color.colorLogo} />
        </div>
    );
};

export default Logo;