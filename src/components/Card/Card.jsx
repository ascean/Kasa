import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Affichage du logement sous forme de carte synthétique
 * @param {object} 
 * @returns 
 */
const Card = ({ location }) => {

    let classCard
    !(location.cover) ? classCard = 'card' : classCard = 'card no-background'
    return (
        <Link to={`/location/${location.id}`}
            key={location.id}
            className = {classCard}>
            {location.cover ? <img src={location.cover} alt="" /> : null}
            <div className='bg-black'></div>
            {<h2 key={location.id}>{location.title}</h2>}
        </Link>
    );
};

export default Card;