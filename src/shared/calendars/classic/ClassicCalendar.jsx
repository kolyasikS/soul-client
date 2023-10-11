import React, {useState} from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import styles from './classic-calendar.module.scss';

const ClassicCalendar = ({children, setDate, date}) => {
    const [openCalendar, setOpenCalendar] = useState(false);
    const convertDateFormat = (date) => {
        const year = date.getFullYear();
        let month = (date.getMonth() + 1).toString();
        let day = date.getDate().toString();

        if (day < 10) {
            day = '0' + day;
        }

        if (month < 10) {
            month = '0' + month;
        }

        setDate({
            year,
            month,
            day
        })
    }
    return (
        <div className={styles.calendar__wrapper}>
            <h4 className={styles.calendar__title}
                onClick={() => setOpenCalendar(!openCalendar)}
            >
                {children} {date && (`&ndash; 22.05.2004`)}
            </h4>
            {openCalendar && <Calendar
                className={styles.calendar}
                allowPartialRange={false}
                onClickDay={convertDateFormat}
            />}
        </div>
    );
};

export default ClassicCalendar;