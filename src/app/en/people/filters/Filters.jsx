'use client';

import React, {useState} from 'react';
import styles from '../styles/filters.module.scss';
import {ClassicInput} from "@shared/inputs/api";
import {ClassicSelect} from "@shared/selects/api";
import {UserTypesArray} from "../../../../lib/enums/auth";
import ClassicButton from "@shared/buttons/classic/ClassicButton";
import {MemberController} from "../../../../lib/controllers/member.controller";
const Filters = ({setPeople}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [role, setRole] = useState('Any');

    const find = async () => {
        const {members} = await MemberController.find({
            limit: 100,
            offset: 0,
            name: name ?? null,
            surname: surname ?? null,
            role: (role.toUpperCase() && role.toUpperCase() !== 'ANY') ? role.toUpperCase() : null
        });

        setPeople(members)
    }

    const clear = async () => {
        setSurname('')
        setName('')
        setRole('Any')
        const {members} = await MemberController.find({
            limit: 100,
            offset: 0,
        });

        setPeople(members)
    }

    return (
        <aside className={styles.filters}>
            <div className={styles.filters__inner}>
                <h3 className={styles.filters__title}>Filters</h3>
                <div className={styles.filters__list}>
                    <ClassicInput
                        value={name}
                        setValue={setName}
                    >
                        Name
                    </ClassicInput>
                    <ClassicInput
                        value={surname}
                        setValue={setSurname}
                    >
                        Surname
                    </ClassicInput>
                    <ClassicSelect items={[...UserTypesArray, 'Any']}
                                   label={'Role'}
                                   placeholder={'Role'}
                                   defaultValue={role}
                                   setSelectedItem={setRole}
                    />
                </div>
                <div className={styles.filters__options}>
                    <ClassicButton onClick={find}>Find</ClassicButton>
                    <ClassicButton variant={'danger'} onClick={clear}>Clear</ClassicButton>
                </div>
            </div>
        </aside>
    );
};

export default Filters;