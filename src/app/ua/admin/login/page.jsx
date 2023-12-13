'use client';

import React, {useState} from 'react';
import styles from "../../authentication/styles/authentication.module.scss";
import {ClassicInput} from "@shared/inputs/api";
import {ValidationError} from "@shared/errors/api";
import {ClassicButton} from "@shared/buttons/api";
import {useDispatch} from "react-redux";
import {useRouter} from "next/navigation";
import {AuthController} from "../../../../lib/controllers/auth.controller";
import {setUser} from "../../../../lib/store/slices/user.slice";

const Page = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();
    const dispatch = useDispatch();
    const signIn = async () => {
        const res = await AuthController.signInAdmin({username, password});
        if (!res.error) {
            dispatch(setUser(res))
            window.localStorage.setItem('soul-user', JSON.stringify(res));
            router.push('/ua/admin')
        } else {
            setError('Incorrect username or password')
        }
    }

    return (
        <div className={'w-full h-screen flex items-center justify-center'}>
            <div className={`${styles.authentication__form}`}
            >
                <div className={`${styles.authentication__form__inner}`}>
                    <h2 className={styles.authentication__form__title}>Administration</h2>
                    <div className={styles.authentication__form__fields}>
                        <ClassicInput value={username}
                                      setValue={setUsername}
                        >
                            Username
                        </ClassicInput>
                        <ClassicInput value={password}
                                      setValue={setPassword}
                        >
                            Password
                        </ClassicInput>
                        {error && <ValidationError>{error}</ValidationError>}
                        <div className={styles.authentication__form__buttons}>
                            <ClassicButton onClick={signIn}>Continue</ClassicButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;