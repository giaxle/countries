import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Weather.module.scss';
import icons from './icons';

const Weather = ({ country }) => {

    const [weather, setWeather] = useState([]);
    const [fahr, setFahr] = useState(true);
    const [cels, setCels] = useState(false);

    // useEffect(() => {
    //     let isComponentMounted = true
    //     async function fetchData() {
    //         const request = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    //         console.log(request.data);
    //         if (isComponentMounted) {
    //             setWeather(request.data);
    //         }
    //         return request;
    //     }
    //     fetchData();
    //     return () => {
    //         isComponentMounted = false;
    //     }
    // }, []);

    const toggleTemp = (temp) => {
        setFahr(!fahr);
        setCels(!cels);
        console.log(fahr, cels);
    }

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then(response => {
                setWeather(response.data);
                console.log(response.data);
            })
            .catch(err => {
                console.log('error');
            })
    }, []);

    if (weather.length === 0) {
        return (
            <div>Weather data is currently unavailable...</div>
        )
    } else if (fahr === true) {
        return (
            <>
                <h2> Weather in {country.capital}, {country.name.common}</h2>
                <hr />
                <div className={styles.container}>
                    <div className={styles.weatherIconContainer}>
                        <h4>{weather.weather[0].main}</h4>

                        <img className={styles.weatherIcon} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weatherIcon' />
                    </div>
                    <div className={styles.weatherDataDiv}>
                        <button className={styles.tempConvertBtn} onClick={toggleTemp}>C°</button>
                        <h4>Temperature(F°)</h4>
                        <p className={styles.data}>{Math.round((weather.main.temp - 273.15) * (9/4) + 32)}°</p>
                        <p className={styles.minMaxTemp}>{Math.round((weather.main.temp_min - 273.15) * (9/4) + 32)}° / {(Math.round(weather.main.temp_max - 273.15) * (9/4) + 32)}°</p>
                    </div>
                    <div className={styles.weatherDataDiv}>
                        <h4 >Humidity</h4>
                        <p className={styles.data}>{weather.main.humidity}%</p>
                    </div>
                    <div className={styles.weatherDataDiv}>
                        <h4>Wind Speed(mph)</h4>
                        <p className={styles.data}>{Math.round(weather.wind.speed * 2.237)}</p>
                    </div>
                </div>
            </>
        )
    } else if (cels === true) {
        return (
            <>
                <h2>Weather in {country.capital}, {country.name.common}</h2>
                <hr />
                <div className={styles.container}>
                    <div className={styles.weatherIconContainer}>
                        <h4>{weather.weather[0].main}</h4>
                        <img className={styles.weatherIcon} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weatherIcon' />
                    </div>
                    <div className={styles.weatherDataDiv}>
                        <button className={styles.tempConvertBtn} onClick={toggleTemp}>F°</button>
                        <h4>Temperature(C°)</h4>
                        <p className={styles.data}>{Math.round(weather.main.temp - 273.15)}°</p>
                        <p className={styles.minMaxTemp}>{Math.round(weather.main.temp_min - 273.15)}° / {Math.round(weather.main.temp_max - 273.15)}°</p>
                        
                    </div>
                    <div className={styles.weatherDataDiv}>
                        <h4>Humidity</h4>
                        <p className={styles.data}>{weather.main.humidity}%</p>
                    </div>
                    <div className={styles.weatherDataDiv}>
                        <h4>Wind Speed(m/s)</h4>
                        <p className={styles.data}>{weather.wind.speed}</p>
                    </div>
                </div>
            </>
        )
    }


}

export default Weather
