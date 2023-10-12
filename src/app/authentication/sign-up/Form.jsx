'use client';
import React, {useState} from 'react';
import styles from '../styles/sign-up-form.module.scss';
import {ClassicInput, ClassicTextArea} from "../../../shared/inputs/api";
import {ClassicSelect} from "../../../shared/selects/api";
import {ClassicCalendar} from "../../../shared/calendars/api";
import {UserTypes} from "../../../lib/enums/auth";
import ClassicButton from "../../../shared/buttons/classic/ClassicButton";
import {PlayerController} from "../../../lib/controllers/player.controller";
import {useRouter} from "next/navigation";

const Form = ({
                  nations,
                  userRole,
                  positions
              }) => {

    const router = useRouter();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [nation, setNation] = useState('');
    const [description, setDescription] = useState('');

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
    const apply = async (e) => {
        e.preventDefault();

        const res = await PlayerController.signUp({});
        if (!res.error) {
            router.push('/home');
        }
    }
    return (
        <form className={styles.form}>
            <ClassicInput value={name} setValue={setName}>Name</ClassicInput>
            <ClassicInput value={name} setValue={setName}>Surname</ClassicInput>
            <ClassicInput value={name} setValue={setName}>Username</ClassicInput>
            <ClassicInput value={name} setValue={setName}>Password</ClassicInput>
            <ClassicInput value={name} setValue={setName}>Email</ClassicInput>
            {optionalFields}
            <ClassicSelect
                placeholder={'Nation'}
                label={'Nations'}
                setSelectedItem={setNation}
                items={nations}
            />
            <ClassicCalendar setDate={setBirthday} date={birthday}>Birthday</ClassicCalendar>
            <ClassicTextArea value={description} setValue={setDescription}>Description</ClassicTextArea>

            <ClassicButton onClick={apply}>Apply</ClassicButton>
        </form>
    );
};

export default Form;