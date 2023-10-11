import React, {useMemo} from 'react';
import Weekdays from "./Weekdays";
import Day, {DayTypes} from "./Day";
import * as uuid from 'uuid';
import styles from '../styles/month.module.scss';
async function getData(year, month) {
    const days = new Date(year, month, 0).getDate();
    return days;
}
const Month = async ({title, year, month}) => {
    const amountDays = await getData(year, month);
    return (
        <div className={styles.month}>
            <Weekdays/>
            <ul className={styles.day__list}>
                {[...new Array(35)].map((day, ind) => {
                    if (ind === 0) {
                        return <Day key={uuid.v4()} event={{
                            date: new Date(2023, 7, 10, 22, 0),
                            homeTeam: 'Barcelona',
                            guestTeam: 'Man City',
                        }}/>
                    } else if (ind === 10) {
                        return <Day key={uuid.v4()} event={{
                            date: new Date(2023, 7, 10, 22, 0),
                            homeTeam: 'Barcelona',
                            guestTeam: 'Man City',
                            score: {
                                homeTeam: 2,
                                guestTeam: 0
                            }
                        }}/>
                    } else if (ind === 15) {
                        return <Day key={uuid.v4()} event={{
                            date: new Date(2023, 7, 10, 22, 0),
                            isTraining: true
                        }}/>
                    } else {
                        return <Day key={uuid.v4()}/>
                    }
                })}
            </ul>
        </div>
    );
};

export default Month;