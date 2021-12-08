import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';



function Card({character,isSelected,onSelectChange}) {
    const onClickButton = () => {
        onSelectChange(character.id, isSelected);
    }
    const selectedClass = (isSelected ? "selected" : "");
    return (
        <div className={'card '+ selectedClass}>
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
            <button className="favorite" onClick={onClickButton}>
                {isSelected ? "Remove":"Add"}
                </button>
        </div>
    );
}
Card.prototype = {
    character: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelectChange: PropTypes.func.isRequired
};
export default Card;
