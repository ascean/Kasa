import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ location }) => {

    return (
        <Link 
            key={location.id}
            to={`/location/${location.id}`}
            className='card'>
                <img src={location.pictures[0]} alt="" />
                <div className='bg-black'></div>
                {
                    <h2 key={location.id}>
                        {location.title}
                    </h2>
                }
        </Link>
    );

};

export default Card;