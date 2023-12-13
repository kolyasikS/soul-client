'use client';

import React, { useState} from 'react';
import styles from '../styles/day.module.scss';
import {twoDigitsFormat} from "../../../../lib/formatting/date";
import {ClassicDialog} from "@shared/dialogs/api";
import EventDialog from "./EventDialog";
import {ClubController} from "../../../../lib/controllers/club.controller";
import {useSelector} from "react-redux";
import {UserTypes} from "../../../../lib/enums/auth";
import {ClassicButton} from "@shared/buttons/api";

const Day = ({event, day, month, isCurrentMonth}) => {
    const [eventDialog, setEventDialog] = useState(false);
    const [eventState, setEventState] = useState(event);
    const [isEditingEvent, setIsEditingEvent] = useState(false);

    const userRole = useSelector(state => state.user.role);
    const addEvent = async (event) => {
        if (isEditingEvent) {
            const res = await ClubController.updateGame({
                score: event.score,
                gameId: eventState.id
            });
            if (!res.error) {
                setEventState(event);
            }
            setIsEditingEvent(false)
            return;
        }

        const ctx = localStorage.getItem('soul-user')
        if (ctx) {
            const parsedCtx = JSON.parse(ctx);
            const res = await ClubController.addGame({
                ...event,
                clubId: parsedCtx.clubId});
            if (!res.error) {
                setEventState(event);
            }
        }
    }
    const removeEvent = async () => {
        const res = await ClubController.removeGame(event.id);
        if (!res.error) {
            setEventState(null);
        }
    }

    if (!isCurrentMonth) {
        return <div className={`${styles.day} ${styles.day__otherMonth}`}>
            Інший місяць
        </div>
    }
    //console.log(userRole?.toLowerCase(), UserTypes.TRAINER.toLowerCase())
    return (
        <div className={styles.day}>
            <span className={styles.day__num}>{day}</span>
            {eventDialog &&
                <ClassicDialog onClick={() => {
                    setEventDialog(false)
                    setIsEditingEvent(false)
                }}>
                   <EventDialog editEvent={addEvent}
                                event={event}
                                day={day}
                                month={month}
                                close={() => {
                                    setEventDialog(false)
                                }}/>
                </ClassicDialog>
            }
            {!eventState
            ? <>
                <p className={styles.day__free}>Пусто</p>
                {userRole.toLowerCase() === UserTypes.TRAINER.toLowerCase() && <button className={styles.day__event_btn}
                        onClick={() => setEventDialog(true)}>
                </button>}
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
                        <p className={styles.day_training}>Тренування</p>
                    </div>}
                    <ClassicButton py={0} style={{marginTop: 2}} onClick={() => {
                        setEventDialog(true)
                        setIsEditingEvent(true)
                    }}>
                        Редагувати
                    </ClassicButton>
                </div>
                {userRole.toLowerCase() === UserTypes.TRAINER.toLowerCase() && <button className={styles.day__event_remove} onClick={removeEvent}></button>}
            </>}
        </div>
    );
};

export default Day;