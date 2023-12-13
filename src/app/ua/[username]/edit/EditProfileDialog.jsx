'use client';

import React, {useState} from 'react';
import styles from '../styles/edit-profile-dialog.module.scss';
import {ClassicInput, ClassicTextArea} from "@shared/inputs/api";
import {ClassicButton} from "@shared/buttons/api";

const EditProfileDialog = ({name, surname, username, bio, cancel, apply}) => {
    const [editUser, setEditUser] = useState({
        name,
        surname,
        bio
    })
    return (
        <div className={styles.dialog}>
            <h1 className={styles.dialog__title}>Редагування</h1>
            <div className={styles.dialog__block}>
                <ClassicInput
                    value={editUser.name}
                    setValue={(name) => setEditUser({...editUser, name})}
                >
                    Ім'я
                </ClassicInput>
                <ClassicInput
                    value={editUser.surname}
                    setValue={(surname) => setEditUser({...editUser, surname})}
                >
                    Прізвище
                </ClassicInput>
                <div className={styles.dialog__block_description}>
                    <h3>Опис</h3>
                    <ClassicTextArea
                        value={editUser.bio}
                        setValue={(bio) => setEditUser({...editUser, bio})}
                    >
                        Опис
                    </ClassicTextArea>
                </div>
            </div>
            <div className={styles.dialog__options}>
                <ClassicButton variant={'danger'} onClick={cancel}>Відминити</ClassicButton>
                <ClassicButton onClick={() => apply(editUser)}>Прийняти</ClassicButton>
            </div>
        </div>
    );
};

export default EditProfileDialog;