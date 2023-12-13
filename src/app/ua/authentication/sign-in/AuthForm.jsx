import React, {useEffect, useRef, useState} from 'react';
import styles from "../styles/authentication.module.scss";
import {ClassicButton} from "@shared/buttons/api";
import {ClassicInput} from "@shared/inputs/api";
import {ValidationError} from "@shared/errors/api";
import {AuthController} from "../../../../lib/controllers/auth.controller";
import {useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {setUser} from "../../../../lib/store/slices/user.slice";

const AuthForm = ({authType, resetAuthType}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const router = useRouter();
    const auth = async () => {
        const res = await AuthController.signIn({username, password, userType: authType.userType});
        if (res.error) {
            setError('Неправильний юзернейм або пароль')
        } else {
            // window.localStorage.setItem('access_token', res.access_token);
            dispatch(setUser(res));
            window.localStorage.setItem('soul-user', JSON.stringify(res));
            router.push('/ua/home');
        }
    }
    return (
        <div className={styles.authentication__form} style={{minWidth: 500}}
         >
            <div className={styles.authentication__form__inner}>
                <h2 className={styles.authentication__form__title}>Увійти як {authType.userType}</h2>
                <div className={styles.authentication__form__fields}>
                    <ClassicInput value={username}
                                  setValue={setUsername}
                    >
                        Юзернейм
                    </ClassicInput>
                    <ClassicInput value={password}
                                  setValue={setPassword}
                    >
                        Пароль
                    </ClassicInput>
                    {error && <ValidationError>{error}</ValidationError>}
                    <div className={styles.authentication__form__buttons}>
                        <ClassicButton onClick={resetAuthType}>Відминити</ClassicButton>
                        <ClassicButton onClick={auth}>Продовжити</ClassicButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;