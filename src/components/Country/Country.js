import React from 'react';
import './Country.css';

const Country = (props) => {
  const {
    name, 
    flags, 
    population, 
    area,
    region
  } = props.country;

  return (
    <div className='container'>
      <img src={flags.png} alt="" />
      <h1 className='countryName'>Country Name: {name.common}</h1>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p><small>Region: {region}</small></p>
    </div>
  );
};

export default Country;