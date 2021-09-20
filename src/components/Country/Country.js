import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flag, capital, region, population } = props.country;
    return (
        <div className="card">
            <img src={flag} alt={name} className="card-top-img"></img>
            <div className="card-body">
                <h2>{name}</h2>
                <h3>Capital: {capital}</h3>
                <h5>Region: {region}</h5>
                <h5>Population: {population}</h5>
            </div>
        </div>
    );
};

export default Country;