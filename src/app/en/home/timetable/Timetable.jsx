'use client';
import React, {useEffect, useState} from 'react';
import styles from '../styles/timetable.module.scss';
import Month from "./Month";
import MonthsNav from "./MonthsNav";
import {ClubController} from "../../../../lib/controllers/club.controller";
import Loader from 'react-loading'
import {ClassicButton} from "@shared/buttons/api";
import CreateClubModal from "../CreateClubModal";
import {DirectorController} from "../../../../lib/controllers/director.controller";
import SubscribeModal from "../SubscribeModal";
let monthsDefault = [
    {title: 'August', month: 7},
    {title: 'September', month: 8},
    {title: 'October', month: 9},
    {title: 'November', month: 10},
    {title: 'December', month: 11},
    {title: 'January', month: 0},
    {title: 'February', month: 1},
    {title: 'March', month: 2},
    {title: 'April', month: 3},
    {title: 'May', month: 4},
]
const Timetable = () => {
    const [timetable, setTimetable] = useState();
    const [months, setMonths] = useState();
    const [loading, setLoading] = useState(true)
    const [hasClub, setHasClub] = useState(false);
    const [user, setUser] = useState();

    const [createClubModal, setCreateClubModal] = useState(false);
    const [subscriptionModal, setSubscriptionModal] = useState(false);

    const [subscription, setSubscription] = useState(null);


    useEffect(() => {
        const asyncFunc = async () => {
            const ctx = localStorage.getItem('soul-user')
            if (ctx) {
                const parsedCtx = JSON.parse(ctx);
                setUser(parsedCtx);

                if (parsedCtx.role === 'DIRECTOR') {
                    const payload = await DirectorController.verificateSubscription(parsedCtx.subscription);
                    if (payload && !payload.error && payload.exp_date) {
                        const exp_date = new Date(payload.exp_date);
                        if (new Date() - exp_date < 0) {
                            setSubscription(parsedCtx.subscription);
                        }
                    }
                }

                if (!parsedCtx.clubId) {
                    setLoading(false);
                    return;
                }
                await ClubController.getTimetable({clubId: parsedCtx.clubId})
                    .then(res => {
                        if (!res.error) {
                            setTimetable(res.timetable);
                            const currentYear = new Date().getFullYear();
                            setMonths(monthsDefault.map((month, ind) => {
                                const filteredGames = res.games
                                    .filter(game => {
                                        const gameDate = new Date(game.date);
                                        return gameDate.getMonth() === month.month;
                                    })
                                    .map(game => {
                                        const gameDate = new Date(game.date);
                                        return {...game, date: gameDate, day: gameDate.getDate()};
                                    });

                                if (ind < 5) {
                                    return {
                                        component: <Month key={month.title}
                                                          title={month.title}
                                                          month={month.month}
                                                          year={currentYear}
                                                          games={filteredGames}
                                        />,
                                        title: month.title,
                                        month: month.month
                                    }
                                } else {
                                    return {
                                        component: <Month key={month.title}
                                                          title={month.title}
                                                          month={month.month}
                                                          year={currentYear + 1}
                                                          games={filteredGames}
                                        />,
                                        title: month.title,
                                        month: month.month
                                    }
                                }
                            }));
                            setHasClub(true)
                        }
                    })

                setLoading(false)
            }
        }
        asyncFunc()
        }, []);
    return (
        <div className={`${styles.timetable} min-h-screen`}>
            {loading
                ? <div className={'w-full flex justify-center'}>
                    <Loader type={'spin'} width={30}/>
                </div>
                : subscription || user?.role !== 'DIRECTOR'
                    ? hasClub
                        ? <>
                            <h2 className={styles.timetable__title}>Timetable</h2>
                            <h3 className={styles.timetable__season}>{timetable.season}</h3>
                            <MonthsNav months={months} currentMonth={new Date().getMonth()}>
                            </MonthsNav>
                        </>
                        : <div className={'w-full flex flex-col items-center gap-3'}>
                            <p className={'w-full text-center text-xl text-red-500'}>You have no a club</p>
                            {user?.role === 'DIRECTOR' &&
                                <div className={'w-fit'}>
                                    <ClassicButton onClick={() => setCreateClubModal(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className={'pl-2'}>Create club</p>
                                    </ClassicButton>
                                </div>
                            }
                        </div>
                    : user?.role === 'DIRECTOR'
                        ? <div className={'w-full flex flex-col items-center gap-3'}>
                            <p className={'w-full text-center text-xl text-red-500'}>You cannot create a club because you have no subscription</p>
                            {user?.role === 'DIRECTOR' &&
                                <div className={'w-fit'}>
                                    <ClassicButton onClick={() => setSubscriptionModal(true)} variant={'danger'}>
                                        <p className={'pl-2'}>Subscribe</p>
                                    </ClassicButton>
                                </div>
                            }
                        </div>
                        : <p className={'w-full text-center text-xl text-red-500'}>You have no a club</p>
            }
            {createClubModal && <CreateClubModal close={() => setCreateClubModal(false)}/>}
            {subscriptionModal && <SubscribeModal close={() => setSubscriptionModal(false)}/>}
        </div>
    );
};

export default Timetable;