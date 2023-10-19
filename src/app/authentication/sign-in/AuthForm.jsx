import React, {useEffect, useRef, useState} from 'react';
import styles from "../styles/authentication.module.scss";
import {ClassicButton} from "../../../shared/buttons/api";
import {ClassicInput} from "../../../shared/inputs/api";
import {ValidationError} from "../../../shared/errors/api";
import {AuthController} from "../../../lib/controllers/auth.controller";

const AuthForm = ({authType, resetAuthType}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = async () => {
        const res = await AuthController.signIn({username, password, userType: authType.userType});
        if (res.error) {
            setError(res.error)
        } else {
            window.localStorage.setItem('access_token', res.access_token);
            resetAuthType();
        }
    }
    return (
        <div className={styles.authentication__form}
         >
            <div className={styles.authentication__form__inner}>
                <h2 className={styles.authentication__form__title}>Sign in as {authType.userType}</h2>
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
                        <ClassicButton onClick={resetAuthType}>Cancel</ClassicButton>
                        <ClassicButton onClick={auth}>Continue</ClassicButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;