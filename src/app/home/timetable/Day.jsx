'use client';

import React, {useEffect, useState} from 'react';
import styles from '../styles/day.module.scss';
import {twoDigitsFormat} from "../../../lib/formatting/date";
import {ClassicDialog} from "../../../shared/dialogs/api";
import EventDialog from "./EventDialog";

const Day = ({type, event}) => {
    const [eventDialog, setEventDialog] = useState(false);
    const [eventState, setEventState] = useState(event);

    const editEvent = (event) => {
        setEventState(event);
    }
    return (
        <div className={styles.day}>
            {eventDialog &&
                <ClassicDialog onClick={() => setEventDialog(false)}>
                   <EventDialog editEvent={editEvent} close={() => setEventDialog(false)}/>
                </ClassicDialog>
            }
            {!eventState
            ? <>
                <p className={styles.day__free}>Free day</p>
                <button className={styles.day__event_btn}
                        onClick={() => setEventDialog(true)}>
                </button>
            </>
            : <>
                <p className={styles.day__match_time}>{twoDigitsFormat(eventState.date.getHours())}:{twoDigitsFormat(eventState.date.getMinutes())}</p>
                    {!eventState.isTraining
                    ? <div className={styles.day__match}>
                        <span>{eventState.homeTeam}</span>
                        <span>{eventState.score?.homeTeam ?? `–`} : {eventState.score?.guestTeam ?? '–'}</span>
                        <span>{eventState.guestTeam}</span>
                    </div>
                    : <div>
                        <p className={styles.day_training}>Training</p>
                    </div>}
            </>}
        </div>
    );
};

export default Day;