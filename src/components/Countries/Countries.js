import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div className="countries">
            {
                countries.map(country => <Country key={country.name} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;