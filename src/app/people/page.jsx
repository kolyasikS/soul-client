import React from 'react';
import styles from './styles/page.module.scss';
import PeopleContent from "./PeopleContent";

const Page = () => {
    return (
        <section className={styles.people}>
            <div className={styles.people__inner}>
               <PeopleContent/>
            </div>
        </section>
    );
};

export default Page;