import React from 'react';
import styles from '../styles/person.module.scss';
import {useRouter} from "next/navigation";
import {ClassicButton} from "../../../shared/buttons/api";

const Person = ({}) => {
    const navigate = useRouter();
    const formatTextLength = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }

        return text;
    }

    const toProfile = () => {
        navigate.push(`/${'danil_o'}`);
    }
    return (
        <div className={styles.person}>
            <div className={styles.person__avatar}>
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g id="user-circle-2" transform="translate(-2 -2)">
                            <path id="secondary" fill="#2ca9bc" d="M12,3A9,9,0,0,0,5.55,18.27a7,7,0,0,1,4.28-3.92h0a4,4,0,1,1,4.34,0h0a7,7,0,0,1,4.28,3.92A9,9,0,0,0,12,3Z"></path>
                            <path id="primary" d="M16,11a4,4,0,1,1-4-4A4,4,0,0,1,16,11Zm-1.83,3.35a3.95,3.95,0,0,1-4.34,0,7,7,0,0,0-4.28,3.92,9,9,0,0,0,12.81.09l.09-.09a7,7,0,0,0-4.28-3.92ZM21,12h0a9,9,0,0,0-9-9h0a9,9,0,0,0-9,9H3a9,9,0,0,0,9,9h0a9,9,0,0,0,9-9Z" fill="none" stroke={'#797c7b'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        </g>
                    </g>
                </svg>
            </div>
            <div className={styles.person__info}>
                <div className={styles.person__info_block}>
                    <p className={styles.person__name}>Kolya</p>
                    <p className={styles.person__surname}>Prymachenko</p>
                </div>
                <div className={styles.person__info_block}>
                    <p className={styles.person__role}>Player</p>
                    <p className={styles.person__years}>18 y.o.</p>
                </div>
                <p className={styles.person__description}>{formatTextLength('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 250)}</p>
                <div className={styles.person__profile__link}>
                    <ClassicButton onClick={toProfile}>Go to profile</ClassicButton>
                </div>
            </div>
        </div>
    );
};

export default Person;