'use client';
import React, {createContext, useState} from 'react';
import styles from '../styles/sign-up-form.module.scss';
import {UserTypes} from "@enums/auth";
import {ClassicInput, ClassicTextArea} from "@shared/inputs/api";
import {ClassicSelect} from "@shared/selects/api";
import {ClassicCalendar} from "@shared/calendars/api";
import ClassicButton from "@shared/buttons/classic/ClassicButton";
import {PlayerController} from "@controllers/player.controller";
import {TrainerController} from "@controllers/trainer.controller";
import {MedicController} from "@controllers/medic.controller";
import {DirectorController} from "@controllers/director.controller";
import {useRouter} from "next/navigation";

const MemberControllers = {
    [UserTypes.PLAYER.toLowerCase()]: PlayerController,
    [UserTypes.TRAINER.toLowerCase()]: TrainerController,
    [UserTypes.MEDIC.toLowerCase()]: MedicController,
    [UserTypes.DIRECTOR.toLowerCase()]: DirectorController,
}
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

    const [position, setPosition] = useState('');
    const [number, setNumber] = useState('');
    const [experience, setExperience] = useState('');

    const getOptionalFields = (role) => {
        let fields;
        switch (role) {
            case UserTypes.PLAYER.toLowerCase():
                fields = <>
                    <ClassicInput
                        minValue={1}
                        maxValue={99}
                        type={'number'}
                        value={number}
                        setValue={setNumber}
                    >
                        Number
                    </ClassicInput>
                    <ClassicSelect
                        placeholder={'Pick a position'}
                        label={'Positions'}
                        items={positions}
                        setSelectedItem={setPosition}
                    />
                </>
                break;
            case UserTypes.MEDIC.toLowerCase():
                fields = <>
                    <ClassicInput
                        minValue={1}
                        maxValue={99}
                        type={'number'}
                        value={experience}
                        setValue={setExperience}
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
                        value={experience}
                        setValue={setExperience}
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

        const res = await MemberControllers[userRole].signUp({
            name,
            email,
            surname,
            username,
            password,
            birthday,
            experience,
            description,
            number,
            position,
            nation,
        });
        if (!res.error) {
            router.push('/home');
        } else {
            console.log(res);
        }
    }
    return (
        <form className={styles.form}>
            <ClassicInput value={name} setValue={setName}>Name</ClassicInput>
            <ClassicInput value={surname} setValue={setSurname}>Surname</ClassicInput>
            <ClassicInput value={username} setValue={setUsername}>Username</ClassicInput>
            <ClassicInput value={password} setValue={setPassword}>Password</ClassicInput>
            <ClassicInput value={email} setValue={setEmail}>Email</ClassicInput>
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