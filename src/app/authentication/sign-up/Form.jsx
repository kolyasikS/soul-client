'use client';
import React from 'react';
import styles from '../styles/sign-up-form.module.scss';
import {ClassicInput, ClassicTextArea} from "../../../shared/inputs/api";
import {ClassicSelect} from "../../../shared/selects/api";
import {ClassicCalendar} from "../../../shared/calendars/api";
import {UserTypes} from "../../../lib/enums/auth";

const Form = ({
                  nations,
                  userRole,
                  positions
              }) => {

    const getOptionalFields = (role) => {
        let fields;
        switch (role) {
            case UserTypes.PLAYER.toLowerCase():
                fields = <>
                    <ClassicInput
                        minValue={1}
                        maxValue={99}
                        type={'number'}
                    >
                        Number
                    </ClassicInput>
                    <ClassicSelect
                        placeholder={'Pick a position'}
                        label={'Positions'}
                        items={positions}
                    />
                </>
                break;
            case UserTypes.MEDIC.toLowerCase():
                fields = <>
                    <ClassicInput
                        minValue={1}
                        maxValue={99}
                        type={'number'}
                    >
                        Work experience
                    </ClassicInput>
                </>
                break;
            case UserTypes.TRAINER.toLowerCase():
                fields = <>
                    <ClassicInput
                        minValue={1}
                        maxValue={99}
                        type={'number'}
                    >
                        Work experience
                    </ClassicInput>
                </>
                break;
            case UserTypes.DIRECTOR.toLowerCase():
                fields = <>
                </>
                break;
            default:
                console.log('error');
                break;
        }

        return fields;
    }

    const optionalFields = getOptionalFields(userRole);

    return (
        <form className={styles.form}>
            <ClassicInput>Name</ClassicInput>
            <ClassicInput>Surname</ClassicInput>
            <ClassicInput>Username</ClassicInput>
            <ClassicInput>Password</ClassicInput>
            <ClassicInput>Email</ClassicInput>
            {/*<ClassicSelect
                placeholder={'Pick a position'}
                label={'Positions'}
                items={positions}
            />*/}
            {optionalFields}
            <ClassicSelect
                placeholder={'Nation'}
                label={'Nations'}
                items={nations}
            />
            <ClassicCalendar>Birthday</ClassicCalendar>
            <ClassicTextArea>Description</ClassicTextArea>
        </form>
    );
};

export default Form;