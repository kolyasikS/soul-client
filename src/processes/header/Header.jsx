import React from 'react';
import styles from './header.module.scss';
import Logo from "@shared/logos/main/Logo";
import Link from "next/link";
import Menu from "./menu/Menu";
import MailboxHeader from "./mailbox/MailboxHeader";
import {useSelector} from "react-redux";
import {selectUser, selectUsername} from "../../lib/store/selectors/user.selectors";

const Header = () => {
    const username = useSelector(selectUsername);
    const user = useSelector(selectUser);
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Logo/>
            </div>
            <nav className={styles.header__navbar}>
                <li className={styles.header__navbar_item}><Link href={'/home'}>Home</Link></li>
                <li className={styles.header__navbar_item}><Link href={'/people'}>People</Link></li>
                {user.clubId && <li className={styles.header__navbar_item}><Link href={'/club'}>Club</Link></li>}
                <li className={styles.header__navbar_item}><Link href={'/contacts'}>Contact us</Link></li>
            </nav>
            <div className={styles.header__features}>
                <MailboxHeader username={username}/>
            </div>
            <div className={styles.header__profile_wrapper}>
                <Menu username={username}/>
            </div>
        </header>
    );
};

export default Header;