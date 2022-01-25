import React from 'react'
import styles from './Filter.module.scss';

const Filter = ({handleFilterChange}) => {
    return (
        <>
            <div className={styles.filter} >
                <label>
                    Search Countries:
                    <input onChange={handleFilterChange}></input>
                </label>
            </div>
        </>
    )
}

export default Filter
