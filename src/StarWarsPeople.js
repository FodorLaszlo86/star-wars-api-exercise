import React from 'react';
import './StarWarsPeople.css';

const starWarsPeople = ({name, height, mass, birthDate }) => {
    return (
        <div className='card'>
            <h2>{ name }</h2>
            <p>Height: { height }</p>
            <p>Mass: { mass }</p>
            <p>{ name } was born in the year { birthDate }</p>
        </div>
    )
}


export default starWarsPeople;

