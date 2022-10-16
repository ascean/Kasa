import React from 'react';

const LogoItem = (logo) => {
    let svg
    let className = logo.letter

    switch (logo.letter) {
        case "k":
            svg = <svg  width="55" height="100%" viewBox="0 0 55 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.0745 34.6485L8.84014 46.1362V62.2561H0V0H8.84014V34.8338L42.359 0H52.4883L26.1521 27.9782L54.33 62.2561H44.0165L20.0745 34.6485Z" fill={logo.color} />
                </svg>     
            
            break;
    
        case "house":
            svg = <svg className="svg-house" width="47" height="100%" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.5323 35.842V48.4415L36.8732 45.2916V32.6921L31.5323 35.842Z" fill={logo.color}/>
                    <path d="M46.2658 20.4633L24.3497 7.67857L12.1945 0.637695L0.22345 21.575L0.407616 41.2153L22.1396 54.0001L24.3497 
                    52.7031V34.1745L34.1106 16.9429L44.0558 22.6867V41.2153L46.2658 39.9183V20.4633Z" fill={logo.color} />
                </svg>
            break;
        case "s":
            svg = <svg width="41" height="100%" viewBox="0 0 41 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.789307 43.2535L4.28853 36.5832C8.34026 39.3625 14.602 41.4006 20.6796 41.4006C28.5989 41.4006 
                    31.7298 38.9919 31.7298 34.9156C31.7298 24.3543 2.07849 33.4333 2.07849 14.7194C2.07849 6.19628 9.62945
                    0.637695 21.6005 0.637695C27.6781 0.637695 34.6765 2.30527 38.7282 4.89928L35.0448 11.5696C30.8089 8.79028
                    26.2047 7.86385 21.6005 7.86385C14.2337 7.86385 10.5503 10.6431 10.5503 14.3489C10.5503 25.466 40.2016
                    16.387 40.2016 34.7303C40.2016 43.2535 32.4665 48.6268 19.9429 48.6268C12.392 48.8121 4.65687 46.4034
                    0.789307 43.2535Z" fill={logo.color} />
                </svg>
            break;
        case "a":
            
            svg = <svg width="42" height="100%" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.3215 19.7221V48.2562H33.2181V41.9565C30.4556 46.2181 25.1146 48.6268 17.7479 48.6268C7.06602 
                    48.6268 0.435913 42.8829 0.435913 34.7303C0.435913 27.1336 5.22432 21.0191 19.2212 21.0191H32.6656V19.3516C32.6656
                    12.1254 28.4297 8.04912 20.142 8.04912C14.617 8.04912 8.90771 10.0873 5.22432 13.0518L1.72509 6.56683C6.5135
                    2.67583 13.5119 0.452393 21.0629 0.452393C34.1389 0.637679 41.3215 6.93741 41.3215 19.7221ZM32.8498
                    33.8039V27.1336H19.7737C11.3019 27.1336 8.90771 30.4687 8.90771 34.3597C8.90771 38.9919 12.7753 41.9565
                    19.2212 41.9565C25.6671 42.1418 30.8239 39.3625 32.8498 33.8039Z" fill={logo.color} />
                </svg>
            break;
        default:
            break;
    }

    return (
        <div className={"elt"+className}>
            {svg}
        </div>
    );
};

export default LogoItem;