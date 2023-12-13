import React, {useCallback, useEffect, useState} from 'react';
import styles from "../header.module.scss";
import MailBox from "../../../widgets/mailbox/MailBox";
import {LetterController} from "../../../lib/controllers/letter.controller";
import MailBoxUa from "../../../widgets/mailbox-ua/MailBox";

const MailboxHeader = ({username}) => {
    const [mailbox, setMailbox] = useState(false);
    const [letters, setLetters] = useState([]);
    useEffect(() => {
        if (!username) return;

        LetterController.find(username).then((res) => {
            if (!res.error) {
                setLetters(res);
            }
        })
    }, [username]);

    const removeLetter = useCallback((id) => {
        setLetters(prev => prev.filter(letter => letter.id !== id));
    }, []);

    return (
        <>
            <button className={styles.header__features_chats} onClick={() => setMailbox(!mailbox)}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157ZM18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2837 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60271 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986Z" fill={mailbox ? '#00b8ee' : '#e8e8e8'}></path> </g></svg>
                {!!letters.length && <span className={styles.header__features_letters_new}>{letters.length}</span>}
            </button>
            {
                mailbox &&
                <div className={styles.header__mailbox_wrapper}>
                    <MailBoxUa letters={letters} remove={removeLetter}/>
                    <span className={styles.header__mailbox_close} onClick={() => setMailbox(false)}></span>
                </div>
            }
        </>
    );
};

export default MailboxHeader;