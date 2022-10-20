import React from 'react';
import Logo from '../Logo/Logo';

/**
 *Affichage du pied de page 
 * @returns 
 */
const Footer = () => {
    const numColor = "#FFFFFF"
    return (
        <footer>
            <Logo colorLogo={numColor} />
            <p className='copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;