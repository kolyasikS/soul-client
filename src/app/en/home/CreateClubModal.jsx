import React, {useEffect, useState} from 'react';
import {ClassicDialog} from "@shared/dialogs/api";
import styles from "../authentication/styles/sign-up-form.module.scss";
import {ClassicInput, ClassicTextArea} from "@shared/inputs/api";
import {ValidationError} from "@shared/errors/api";
import {ClassicCalendar} from "@shared/calendars/api";
import ClassicButton from "@shared/buttons/classic/ClassicButton";
import {ClubController} from "../../../lib/controllers/club.controller";
import {AuthController} from "../../../lib/controllers/auth.controller";

const CreateClubModal = ({close}) => {
    const [name, setName] = useState();
    const [foundDate, setFoundDate] = useState();
    const [description, setDescription] = useState();

    const [errors, setErrors] = useState({});
    const apply = async (e) => {
        e.preventDefault();
        const ctx = localStorage.getItem('soul-user')
        if (ctx) {
            const parsedCtx = JSON.parse(ctx);
            if (!parsedCtx.id) {
                return;
            }
            const res = await ClubController.create({
                name,
                directorId: parsedCtx.id,
                foundationDate: foundDate,
                selfDescription: description,
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
        <ClassicDialog>
            <form className={styles.form}>
                <div className={styles.form__block}>
                    <ClassicInput
                        value={name}
                        setValue={setName}
                    >Name</ClassicInput>
                    {errors.name && <ValidationError className={styles.form__block_error}>invalid value</ValidationError>}
                </div>
                <div className={styles.form__block}>
                    <ClassicCalendar setDate={setFoundDate}
                                     date={foundDate}>
                        Foundation date
                    </ClassicCalendar>
                    {errors.date && <ValidationError className={styles.form__block_error}>invalid value</ValidationError>}
                </div>
                <ClassicTextArea
                    value={description}
                    setValue={setDescription}
                >Description</ClassicTextArea>
                <div className={'flex gap-3'}>
                    <ClassicButton onClick={cancel} variant={'danger'}>Cancel</ClassicButton>
                    <ClassicButton onClick={apply}>Create</ClassicButton>
                </div>
            </form>
        </ClassicDialog>
    );
};

export default CreateClubModal;