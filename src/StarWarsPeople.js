import React from 'react';

const starWarsPeople = ({name, height, mass, birthDate }) => {
    return (
        <div>
            <h2>{ name }</h2>
            <p>Height: { height }</p>
            <p>Mass: { mass }</p>
            <p>{ name } was born in the year { birthDate }</p>
        </div>
    )
}


export default starWarsPeople;

