import React from 'react';
// import { useState, useEffect } from 'react';
import Weather from '../weather/Weather';
import styles from './Country.module.scss';


const Country = ({country}) => {
    // console.log(country.languages);
    return (
        <>
            <div className={styles.countryCard}>
                <div>
                    {/* <hr/> */}
                    <div className={styles.container}>
                        <img className={styles.flag} src={country.flags.svg} alt='Country flag' />
                        <div className={styles.dataContainer}>
                            <h1 className={styles.title}>{country.name.common}</h1>
                            <p><strong>Capital:</strong> {country.capital}</p>
                            <p><strong>Population:</strong> {country.population}</p>
                            <div>
                                <p><strong>Spoken Languages: </strong></p>
                                <ul className={styles.languageList}>
                                    {Object.values(country.languages).map(language => {
                                        return <li className={styles.language} key={language}>{language}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Weather country={country} />
            </div>
        </>
    )
}

export default Country;
