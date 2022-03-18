import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flags, area, region}= props.country;
    console.log(props.country)
    return (
        <div className='country bg-warning'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p><small>Area: {area}</small></p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;