import React from 'react';
import './Card.css';
import Character from './Character';


function Card(){
    return(
        <div className="card">
            <img src={Character.image} alt={Character.name} />
            <div className="card-info">
                <p class="card-info__name">
                    <span>Name:</span>
                    {Character.name}
                </p>
                <p className="card-info__generic">
                {Character.species} <span className="card-info__generic">from</span> {Character.location.name}
                </p>
        </div>
        </div>
    );
}

export default Card;
