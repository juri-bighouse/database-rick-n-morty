import React from 'react';
import './Grid.css';
import Card from "../Card/Card"


function Grid(){
    return(
        <div className="container grid">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default Grid;
