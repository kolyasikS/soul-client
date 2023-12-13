import React from 'react';
import styles from '../styles/weekdays.module.scss';

const Weekdays = () => {
    return (
        <ul className={styles.weekday__list}>
            <li className={styles.weekday}>Пн</li>
            <li className={styles.weekday}>Вт</li>
            <li className={styles.weekday}>Ср</li>
            <li className={styles.weekday}>Чт</li>
            <li className={styles.weekday}>Пт</li>
            <li className={styles.weekday}>Сб</li>
            <li className={styles.weekday}>Нд</li>
        </ul>
    );
};

export default Weekdays;