import React from 'react';
import styles from './header.module.scss';
import Logo from "../../shared/logos/main/Logo";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Logo/>
            </div>
            <nav className={styles.header__navbar}>
                <li className={styles.header__navbar_item}><Link href={''}>People</Link></li>
                <li className={styles.header__navbar_item}><Link href={''}>Club</Link></li>
                <li className={styles.header__navbar_item}><Link href={'/contacts'}>Contact us</Link></li>
            </nav>
            <div className={styles.header__features}>
                <button className={styles.header__features_letters}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.70911 17.0192L4.44911 13.5392C4.92911 12.5692 4.92911 11.4392 4.44911 10.4692L2.70911 6.97924C1.21911 3.99924 4.42911 0.849241 7.37911 2.40924L8.91911 3.22924C9.13911 3.33924 9.30911 3.51924 9.39911 3.73924L15.0891 16.3892C15.3191 16.9092 15.1091 17.5192 14.6091 17.7792L7.36911 21.5892C4.42911 23.1492 1.21911 19.9992 2.70911 17.0192Z" fill="#d9dbde"></path> <path d="M16.3093 15.6004L12.5793 7.32045C12.1593 6.39045 13.1593 5.45045 14.0593 5.93045L19.8293 8.97045C22.2793 10.2604 22.2793 13.7604 19.8293 15.0504L17.7893 16.1204C17.2393 16.4004 16.5693 16.1704 16.3093 15.6004Z" fill="#d9dbde"></path> </g></svg>
                </button>
                <button className={styles.header__features_chats}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157ZM18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2837 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60271 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986Z" fill="#e8e8e8"></path> </g></svg>
                    <span className={styles.header__features_letters_new}>2</span>
                </button>
            </div>
            <div>
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="user-circle-2" transform="translate(-2 -2)"> <path id="secondary" fill="#2ca9bc" d="M12,3A9,9,0,0,0,5.55,18.27a7,7,0,0,1,4.28-3.92h0a4,4,0,1,1,4.34,0h0a7,7,0,0,1,4.28,3.92A9,9,0,0,0,12,3Z"></path> <path id="primary" d="M16,11a4,4,0,1,1-4-4A4,4,0,0,1,16,11Zm-1.83,3.35a3.95,3.95,0,0,1-4.34,0,7,7,0,0,0-4.28,3.92,9,9,0,0,0,12.81.09l.09-.09a7,7,0,0,0-4.28-3.92ZM21,12h0a9,9,0,0,0-9-9h0a9,9,0,0,0-9,9H3a9,9,0,0,0,9,9h0a9,9,0,0,0,9-9Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> </g> </g></svg>
            </div>
        </header>
    );
};

export default Header;