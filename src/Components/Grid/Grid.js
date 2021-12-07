import React from 'react';
import './Grid.css';
import Card from "../Card/Card"
import PropTypes from "prop-types";


function Grid({characters,isLoading}){
    return(
        <div className="container grid">
            {characters.map((character) =>(
                <Card key={character.id} character={character}/>
            ))}
            {isLoading && (
                <div className="loading">
                    <p>Loading...</p>
                </div>
            )}
            
        </div>
    )
}
Grid.prototype={
    characters: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
}
export default Grid;
