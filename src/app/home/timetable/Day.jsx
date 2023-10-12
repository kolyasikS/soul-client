'use client';

import React, {useEffect, useState} from 'react';
import styles from '../styles/day.module.scss';
import {twoDigitsFormat} from "../../../lib/formatting/date";
import {ClassicDialog} from "../../../shared/dialogs/api";
import EventDialog from "./EventDialog";
import {ClubController} from "../../../lib/controllers/club.controller";
import {DangerBtn} from "../../../shared/buttons/api";

const Day = ({event, day, month}) => {
    const [eventDialog, setEventDialog] = useState(false);
    const [eventState, setEventState] = useState(event);
    console.log(day, month, event);
    const editEvent = async (event) => {
        const res = await ClubController.addGame({...event, clubId: '650c6c7649cba9b624f22334'});
        console.log(res);
        if (!res.error) {
            setEventState(event);
        }
    }
    const removeEvent = async () => {
        const res = await ClubController.removeGame(event.id);
        console.log(res);
        if (!res.error) {
            setEventState(null);
        }
    }
    return (
        <div className={styles.day}>
            {eventDialog &&
                <ClassicDialog onClick={() => setEventDialog(false)}>
                   <EventDialog editEvent={editEvent}
                                day={day}
                                month={month}
                                close={() => setEventDialog(false)}/>
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
                <div className={styles.day__event}>
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
                </div>
                <button className={styles.day__event_remove} onClick={removeEvent}></button>
            </>}
        </div>
    );
};

export default Day;