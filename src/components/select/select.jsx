import React from 'react';
import styles from './select.module.css';
const Select = ({ name, getItem, itemInfo }) => {

    const onClick = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        getItem(name, value);
    };

    const option = itemInfo.map((item, index) => <option key={index} value={item}>{item}</option>)
    return (
        <form className={styles.form}>
            <label className={styles.name}>{name.toUpperCase()}</label>
            <select onClick={onClick} name={name} className={styles.select} >
                {option}
            </select>
        </form>
    );
};

export default Select;