import React from 'react';
import styles from './header.module.scss';
import Logo from "@shared/logos/main/Logo";
import Link from "next/link";
import Menu from "./menu/Menu";
import MailboxHeader from "./mailbox/MailboxHeader";
import {useSelector} from "react-redux";
import {selectUser, selectUsername} from "../../lib/store/selectors/user.selectors";
import MailboxHeaderUA from "./mailbox/MailboxHeaderUA";
import MenuUa from "./menu/MenuUa";

const HeaderUA = () => {
    const username = useSelector(selectUsername);
    const user = useSelector(selectUser);
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Logo/>
            </div>
            <nav className={styles.header__navbar}>
                <li className={styles.header__navbar_item}><Link href={'/ua/home'}>Головна</Link></li>
                <li className={styles.header__navbar_item}><Link href={'/ua/people'}>Користувачі</Link></li>
                {user.clubId && <li className={styles.header__navbar_item}><Link href={'/ua/club'}>Клуб</Link></li>}
                <li className={styles.header__navbar_item}><Link href={'/ua/contacts'}>Зв'язатися з нами</Link></li>
            </nav>
            <div className={styles.header__features}>
                <MailboxHeaderUA username={username}/>
            </div>
            <div className={styles.header__profile_wrapper}>
                <MenuUa username={username}/>
            </div>
        </header>
    );
};

export default HeaderUA;