import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Affichage du logement sous forme de carte synthétique
 * @param {object} 
 * @returns 
 */
const Card = ({ location }) => {
    return (
        <Link to={`/location/${location.id}`}
            key={location.id}
            className='card'>
            <img src={location.pictures[0]} alt="" />
            <div className='bg-black'></div>
            {<h2 key={location.id}>{location.title}</h2>}
        </Link>
    );
};

export default Card;