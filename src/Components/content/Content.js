import React from 'react';
import Country from '../country/Country';
import styles from './Content.module.scss';

const Content = ({filter, setCountries, countries}) => {
    if (filter === "") {
        return <p className={styles.text}>Results will display below...</p>;
    } else if (countries.length > 10) {
        return <p className={styles.text}>Too many matches, specify another filter</p>
    } else if ((countries.length > 1 && countries.length < 10) || countries.length === 0) {
        return (
            <>
                <ul className={styles.countryList}>
                    <p className={styles.text}>Results...</p>
                    {countries.map((country, i) => {
                        return <div className={styles.listItem} key={i}>
                                    <button className={styles.btn} onClick={() => setCountries([country])}>{country.name.common}</button>
                                </div>
                    })}
                </ul>
            </>
        )
    } else return <Country country={countries[0]}/>
}

export default Content;
