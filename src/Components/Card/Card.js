import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';



function Card({character}) {
    return (
        <div className="card">
            <img src={character.image} alt={character.name} />
            <div className="card-info">
                <p class="card-info__name">
                    <span>Name:</span>
                    {character.name}
                </p>
                <p className="card-info__generic">
                    {character.species} <span className="card-info__generic">from</span> {character.location.name}
                </p>
            </div>
        </div>
    );
}
Card.prototype = {
    character: PropTypes.object.isRequired
};
export default Card;
