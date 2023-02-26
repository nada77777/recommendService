import React from 'react';
import { getItem, test } from '../../api/api';
import styles from './button.module.css';
const Button = ({ positionRight, search }) => {
    const position = positionRight ? styles.positionRight : ''
    return (
        <button onClick={search} className={`${styles.button} ${position}`}>확인</button>
    );
};

export default Button;