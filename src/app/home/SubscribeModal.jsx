import React, {useEffect, useState} from 'react';
import {ClassicDialog} from "@shared/dialogs/api";
import styles from "../authentication/styles/sign-up-form.module.scss";
import {ClassicInput, ClassicTextArea} from "@shared/inputs/api";
import {ValidationError} from "@shared/errors/api";
import {ClassicCalendar} from "@shared/calendars/api";
import ClassicButton from "@shared/buttons/classic/ClassicButton";
import {ClubController} from "../../lib/controllers/club.controller";
import {AuthController} from "../../lib/controllers/auth.controller";
import {DirectorController} from "../../lib/controllers/director.controller";

const CreateClubModal = ({close}) => {
    const [seasons, setSeasons] = useState();

    const [number, setNumber] = useState('');
    const [expMonth, setExpMonth] = useState();
    const [expYear, setExpYear] = useState();
    const [cvc, setCvc] = useState('');

    const [errors, setErrors] = useState({});

    const apply = async (e) => {
        e.preventDefault();
        const ctx = localStorage.getItem('soul-user')
        if (ctx) {
            const parsedCtx = JSON.parse(ctx);
            if (!parsedCtx.id) {
                return;
            }

            let isError = false;
            if (!seasons || isNaN(parseInt(seasons.toString())) || seasons < 1) {
                setErrors(errors => ({...errors, seasons: 'Must be more than 1'}))
                isError = true;
            } else {
                setErrors(errors => ({...errors, seasons: null}))
            }
            if (!number || number.length !== 16) {
                setErrors(errors => ({...errors, number: 'Must be 16 symbols'}))
                isError = true;
            } else {
                setErrors(errors => ({...errors, number: null}))
            }
            if (!expMonth || isNaN(parseInt(expMonth.toString())) || expMonth < 1 || expMonth > 12) {
                setErrors(errors => ({...errors, exp_month: 'Must be from 1 to 12'}))
                isError = true;
            } else {
                setErrors(errors => ({...errors, exp_month: null}))
            }
            if (!expYear || isNaN(parseInt(expYear.toString())) || expYear + 2000 < new Date().getFullYear()) {
                setErrors(errors => ({...errors, exp_year: 'Card is expired'}))
                isError = true;
            } else {
                setErrors(errors => ({...errors, exp_year: null}))
            }
            if (!cvc || cvc.toString().length !== 3 || isNaN(parseInt(cvc))) {
                setErrors(errors => ({...errors, cvc: 'Must be 3 numbers'}))
                isError = true;
            } else {
                setErrors(errors => ({...errors, cvc: null}))
            }
            console.log(1);
            if (isError) {
                return;
            }


            const res = await DirectorController.subscribe({
                directorId: parsedCtx.id,
                seasons,
                exp_month: expMonth,
                exp_year: expYear,
                number: number
            })
            if (!res.error) {
                localStorage.setItem('soul-user', JSON.stringify({...parsedCtx, clubId: res._id}));
                close();
                window.location.reload();
            } else {
                setErrors(res.error)
            }
        }
    }

    const cancel = async (e) => {
        e.preventDefault();
        close();
    }
    return (
        <ClassicDialog zIndex={9999999}>
            <form className={styles.form}>
                <div className={styles.form__block}>
                    <ClassicInput
                        value={seasons}
                        setValue={setSeasons}
                    >Seasons</ClassicInput>
                    {errors.seasons && <ValidationError className={styles.form__block_error}>{errors.seasons}</ValidationError>}
                </div>
                <div className={styles.form__block}>
                    <ClassicInput
                        value={number}
                        setValue={setNumber}
                    >Number</ClassicInput>
                    {errors.number && <ValidationError className={styles.form__block_error}>{errors.number}</ValidationError>}
                </div>
                <div className={styles.form__block}>
                    <ClassicInput
                        value={expMonth}
                        setValue={setExpMonth}
                    >Month of expiration</ClassicInput>
                    {errors.exp_month && <ValidationError className={styles.form__block_error}>{errors.exp_month}</ValidationError>}
                </div>
                <div className={styles.form__block}>
                    <ClassicInput
                        value={expYear}
                        setValue={setExpYear}
                    >Year of expiration</ClassicInput>
                    {errors.exp_year && <ValidationError className={styles.form__block_error}>{errors.exp_year}</ValidationError>}
                </div>
                <div className={styles.form__block}>
                    <ClassicInput
                        value={cvc}
                        setValue={setCvc}
                    >CVC</ClassicInput>
                    {errors.cvc && <ValidationError className={styles.form__block_error}>{errors.cvc}</ValidationError>}
                </div>
                <div className={'flex gap-3 mt-5'}>
                    <ClassicButton onClick={cancel} variant={'danger'}>Cancel</ClassicButton>
                    <ClassicButton onClick={apply}>Subscribe</ClassicButton>
                </div>
            </form>
        </ClassicDialog>
    );
};

export default CreateClubModal;