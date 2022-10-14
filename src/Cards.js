import React from 'react';
import Card from './Card';

function Cards({ country }) {
    console.log(country);
    let val;
    if (country.length === 0) {
        val = <p>Serch any name to know the nationality.</p>
    } else {
        val = <div>
            {
                country.country.map((item) => (
                    <Card key={item.country_id} item={item} />
                ))
            }
        </div>
    }
    return (
        <ul>
            {val}
        </ul>
    )
}

export default Cards;