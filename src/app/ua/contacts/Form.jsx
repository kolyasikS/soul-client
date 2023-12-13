'use client';
import React, {useState} from 'react';
import {ClassicInput, ClassicTextArea} from "@shared/inputs/api";
import {ClassicSelect} from "@shared/selects/api";
import {UserTypesArray} from "../../../lib/enums/auth";
import styles from './styles/form.module.scss';
import ClassicButton from "@shared/buttons/classic/ClassicButton";

const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        role: '',
        issue: '',
        club: ''
    });

    const sendReport = async () => {

    }

    return (
        <form className={styles.form}>
            <div className={styles.form__inner}>
                <div className={styles.form__block}>
                    <ClassicInput value={formData.name}
                                  setValue={(value) => setFormData({...formData, name: value})}
                    >
                        Ім'я
                    </ClassicInput>
                    <ClassicInput value={formData.surname}
                                  setValue={(value) => setFormData({...formData, surname: value})}
                    >
                        Прізвище
                    </ClassicInput>
                </div>
                <ClassicInput value={formData.email}
                              setValue={(value) => setFormData({...formData, email: value})}
                >
                    Ел. Пошта
                </ClassicInput>
                <div className={styles.form__block}>
                    <ClassicSelect items={UserTypesArray}
                                   label={'Job role'}
                                   placeholder={'Job role'}
                                   triggerStyle={{height: 55, fontSize: 16, fontWeight: 700, color: '#EDEEF0'}}
                                   setSelectedItem={(value) => setFormData({...formData, role: value})}
                    />
                    <ClassicInput value={formData.club}
                                  setValue={(value) => setFormData({...formData, club: value})}
                    >
                        Клуб
                    </ClassicInput>
                </div>
                <ClassicTextArea value={formData.issue}
                                 setValue={(value) => setFormData({...formData, issue: value})}
                >
                    Розкажіть, будь ласка, про вашу проблему, що вас хвилює?
                </ClassicTextArea>
                <ClassicButton onClick={sendReport}>Відправити</ClassicButton>
            </div>
        </form>
    );
};

export default Form;