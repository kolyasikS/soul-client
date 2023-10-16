'use client';
import React, {useState} from 'react';
import {ClassicInput, ClassicTextArea} from "../../shared/inputs/api";
import {ClassicSelect} from "../../shared/selects/api";
import {UserTypesArray} from "../../lib/enums/auth";
import styles from './styles/form.module.scss';
import ClassicButton from "../../shared/buttons/classic/ClassicButton";

const Form = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [club, setClub] = useState('');
    const [issue, setIssue] = useState('');

    const sendReport = async () => {

    }

    return (
        <form className={styles.form}>
            <div className={styles.form__inner}>
                <div className={styles.form__block}>
                    <ClassicInput value={name} setValue={setName}>Name</ClassicInput>
                    <ClassicInput value={surname} setValue={setSurname}>Surname</ClassicInput>
                </div>
                <ClassicInput value={email} setValue={setEmail}>Email</ClassicInput>
                <div className={styles.form__block}>
                    <ClassicSelect items={UserTypesArray}
                                   label={'Job role'}
                                   placeholder={'Job role'}
                                   triggerStyle={{height: 55, fontSize: 16, fontWeight: 700, color: '#EDEEF0'}}
                                   setSelectedItem={setRole}
                    />
                    <ClassicInput value={club} setValue={setClub}>Club</ClassicInput>
                </div>
                <ClassicTextArea value={issue} setValue={setIssue}>Please tell us about your issue, what concerns you?</ClassicTextArea>
                <ClassicButton onClick={sendReport}>Send</ClassicButton>
            </div>
        </form>
    );
};

export default Form;