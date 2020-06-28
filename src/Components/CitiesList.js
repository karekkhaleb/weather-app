import React, {useState, useEffect} from "react";
import SingleCityItem from "./SingleCityItem";

export default function () {
    const [cities, updateCities] = useState([]);
    useEffect(() => {
        const baseUrl = "https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=439d4b804bc8187953eb36d2a8c26a02";
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        fetch(`${proxyUrl}${baseUrl}`).then(prepareCities);
    }, []);
    const prepareCities = async(citiesData) => {
        const {list} = await citiesData.json();
        const sortedCitiesWithRainWeather = list
            .filter(city => city.weather[0].main === "Rain")
            .sort(({name:name1}, {name: name2}) => name1 > name2 ? 1 : -1);
        updateCities(sortedCitiesWithRainWeather);
    };
    return (
        <div className="cities-list even-shadow">
            <h1 className="center-text title">Cities List</h1>
            <hr/>
            <ul>
                {
                    !cities.length ? (
                        <div className="title">
                            <p>loading...</p>
                        </div>
                    ) :
                    cities.map((city, index) => (
                        <li key={index}>
                            <SingleCityItem city={city}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}