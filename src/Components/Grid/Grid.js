import React from 'react';
import './Grid.css';
import Card from "../Card/Card"
import PropTypes from "prop-types";

class Grid extends React.Component {
    constructor() {
        super();
        this.state={
            favorite: []
        }
    };
    onSelectChange=(id,isSelected) => {
        let nextFavorite = [...this.state.favorite];
        if(!isSelected){
            nextFavorite.push(id)
        }else{
            nextFavorite=nextFavorite.filter((selectedId)=> selectedId !== id)
        }
        this.setState({
            favorite:nextFavorite
        })
    }
    render() {
        const { characters, isLoading } = this.props;
        const {favorite} =this.state;
        return (
            <div className="container grid">
                {characters.map((character) => (
                    <Card key={character.id} character={character} isSelected={favorite.includes(character.id)} onSelectChange={this.onSelectChange} />
                ))}
                {isLoading && (
                    <div className="loading">
                        <p>Loading...</p>
                    </div>
                )}

            </div>
        )
    }
}



Grid.propType = {
    characters: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
}
export default Grid;
