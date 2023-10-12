import React, {useMemo} from 'react';
import Weekdays from "./Weekdays";
import Day, {DayTypes} from "./Day";
import * as uuid from 'uuid';
import styles from '../styles/month.module.scss';
async function getData(year, month) {
    const days = new Date(year, month, 0).getDate();
    return days;
}
const Month = async ({title, year, month, games}) => {
    const amountDays = await getData(year, month);
    return (
        <div className={styles.month}>
            <Weekdays/>
            <ul className={styles.day__list}>
                {[...new Array(35)].map((day, ind) => {
                    return <Day key={uuid.v4()}
                                month={month}
                                day={ind + 1}
                                event={games.find(game => game.day - 1 === ind)}/>
                })}
            </ul>
        </div>
    );
};

export default Month;