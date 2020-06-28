import React from "react";
import PropTypes from 'prop-types';

function SingleCityItem({city = {}}) {
    return (
        <div className="single-city">
            <h2 className="name">City: {city.name}</h2>
            <div>
                <p>Weather: {city.weather[0].main}</p>
                <p>temp: {city.main.temp} </p>
            </div>
            <div>
                Description: {city.weather[0].description}
            </div>
        </div>

    )
}


SingleCityItem.propTypes = {
    city: PropTypes.shape({
        name: PropTypes.string.isRequired,
        weather: PropTypes.array.isRequired,
        main: PropTypes.shape({
            temp: PropTypes.number.isRequired
        }).isRequired,
    })
};

export default SingleCityItem;