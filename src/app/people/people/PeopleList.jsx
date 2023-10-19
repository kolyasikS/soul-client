import React from 'react';
import Person from "./Person";
import styles from '../styles/people-list.module.scss';

const PeopleList = () => {
    return (
        <div className={styles.peopleList}>
            <div className={styles.peopleList__inner}>
                <div>
                    <h1 className={styles.peopleList__title}>People</h1>
                    <div>
                        <Person/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleList;