import React from 'react'

function Card({ item }) {
    const { getName } = require('country-list');
    const countryCode = item.country_id;

    const countryName = getName(countryCode);

    return (
        <li>There are {item.probability * 100}% chances you are from {countryName}.</li>
    )
}

export default Card;