import React from 'react';
import Star1 from '../../assets/images/star-1.png'
import Star2 from '../../assets/images/star-2.png'

const Star = (props) => {
    const rating = props.rating
    const stars = []
    for (let i = 1; i < 6; i++) {
        i < rating
            ? stars.push(Star1)
            : stars.push(Star2)
    }

    return (
        <ul className='stars-container'>
            {stars && stars.map((star,index) => {
                return (
                    <li className = 'star' key = { "star" + index } >
                        <img src={star} alt = "" />
                    </li>
                )
            })}
        </ul>
    );
};

export default Star;