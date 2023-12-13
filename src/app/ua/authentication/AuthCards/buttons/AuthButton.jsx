'use client';

import React from 'react';
import styles from './auth-button.module.scss';
import {AuthTypes} from "../../../../../lib/enums/auth";
const AuthButton = ({onClick, authType}) => {
    return (
        authType === AuthTypes.SIGN_IN
        ? <button className={`${styles.authButton} ${styles.authButton_signIn}`}
                  onClick={onClick}
            >Увійти</button>
        : <button className={`${styles.authButton} ${styles.authButton_signUp}`}
                  onClick={onClick}
            >Зареєструватися</button>
    );
};

export default AuthButton;