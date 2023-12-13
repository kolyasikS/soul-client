import React from 'react';
import styles from "../styles/event-dialog.module.scss";
import {ClassicInput} from "@shared/inputs/api";
import ClassicButton from "@shared/buttons/classic/ClassicButton";

const CreatingMatch = ({score, setScore, apply,
                           homeTeam, setHomeTeam,
                           guestTeam, setGuestTeam
                       }) => {
    return (
        <>

            <h2 className={styles.event__title}>Створення матчу</h2>

            <div className={styles.event__match_teams}>
                <ClassicInput
                    value={homeTeam}
                    setValue={setHomeTeam}
                >Господар</ClassicInput>
                <ClassicInput
                    value={guestTeam}
                    setValue={setGuestTeam}
                >Гість</ClassicInput>
            </div>
            <div className={styles.event__score}>
                <h3>Рахунок &ndash; </h3>
                <ClassicInput py={10} placeholder={'HT'}
                              value={score.homeTeam}
                              setValue={(value) => setScore(state => ({...state, homeTeam: value}))}
                ></ClassicInput>
                <span className={styles.event__time_divider}>:</span>
                <ClassicInput py={10} placeholder={'GT'}
                              value={score.guestTeam}
                              setValue={(value) => setScore(state => ({...state, guestTeam: value}))}
                ></ClassicInput>
            </div>
            <ClassicButton onClick={apply}>Прийняти</ClassicButton>
        </>
    );
};

export default CreatingMatch;