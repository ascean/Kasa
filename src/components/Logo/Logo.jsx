import React from 'react';
import LogoItem from './LogoItem';

const Logo = (color) => {
    return (
        <div className="logo">
            <LogoItem key="k" letter="k" color={color.colorLogo} width={"55"} height={"100%"} />
            <LogoItem key="house" letter = "house" color={color.colorLogo} width={"47"} height={"100%"} />
            <LogoItem key="s" letter = "s" color={color.colorLogo} width={"41"} height={"100%"} />
            <LogoItem key="a" letter = "a" color={color.colorLogo} width={"42"} height={"100%"} />
        </div>
    );
};

export default Logo;