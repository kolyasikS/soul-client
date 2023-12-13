'use client';

import React from 'react';
import {DropdownMenu} from "@radix-ui/themes";
import styles from '../menu/menu.module.scss';
import MainTheme from "../../theme/MainTheme";
import {useRouter} from "next/navigation";
import {AuthController} from "../../../lib/controllers/auth.controller";
import {useDispatch, useSelector} from "react-redux";
import {clearUser} from "../../../lib/store/slices/user.slice";
import {DefaultAvatar} from "@shared/logos/api";

const MenuUa = ({username}) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const logout = async () => {
        const res = await AuthController.logout();
        if (res.ok) {
            window.localStorage.removeItem('soul-user');
            dispatch(clearUser());
            if (window.location.href.includes('en')) {
                router.push('/en/authentication');
            } else {
                router.push('/ua/authentication')
            }
        }
    }

    const toProfile = async () => {
        router.push(`/ua/${username}`);
    }
    return (
        <MainTheme zIndex={9999999}>
            <DropdownMenu.Root modal={false}>
                <DropdownMenu.Trigger className={styles.menu__trigger}>
                    <svg viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g id="user-circle-2" transform="translate(-2 -2)">
                                <path id="secondary" fill="#2ca9bc" d="M12,3A9,9,0,0,0,5.55,18.27a7,7,0,0,1,4.28-3.92h0a4,4,0,1,1,4.34,0h0a7,7,0,0,1,4.28,3.92A9,9,0,0,0,12,3Z"></path>
                                <path id="primary" d="M16,11a4,4,0,1,1-4-4A4,4,0,0,1,16,11Zm-1.83,3.35a3.95,3.95,0,0,1-4.34,0,7,7,0,0,0-4.28,3.92,9,9,0,0,0,12.81.09l.09-.09a7,7,0,0,0-4.28-3.92ZM21,12h0a9,9,0,0,0-9-9h0a9,9,0,0,0-9,9H3a9,9,0,0,0,9,9h0a9,9,0,0,0,9-9Z" fill="none" stroke={'#797c7b'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                            </g>
                        </g>
                    </svg>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content style={{zIndex: 999999}}>
                    <div className={`${styles.menu__profile_item} ${styles.menu__profile_account}`}>
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width={30} fill="#000000">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="user-circle-2" transform="translate(-2 -2)">
                                    <path id="secondary" fill="#2ca9bc" d="M12,3A9,9,0,0,0,5.55,18.27a7,7,0,0,1,4.28-3.92h0a4,4,0,1,1,4.34,0h0a7,7,0,0,1,4.28,3.92A9,9,0,0,0,12,3Z"></path>
                                    <path id="primary" d="M16,11a4,4,0,1,1-4-4A4,4,0,0,1,16,11Zm-1.83,3.35a3.95,3.95,0,0,1-4.34,0,7,7,0,0,0-4.28,3.92,9,9,0,0,0,12.81.09l.09-.09a7,7,0,0,0-4.28-3.92ZM21,12h0a9,9,0,0,0-9-9h0a9,9,0,0,0-9,9H3a9,9,0,0,0,9,9h0a9,9,0,0,0,9-9Z" fill="none" stroke={'#797c7b'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                </g>
                            </g>
                        </svg>
                        {username}
                    </div>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item onClick={toProfile}>Мій профиль</DropdownMenu.Item>
                    <div className={styles.menu__languages}>
                        <DropdownMenu.Item onClick={() => (window.location.href = window.location.href.replace('en', 'ua'))}>Укр</DropdownMenu.Item>
                        <DropdownMenu.Item onClick={() => (window.location.href = window.location.href.replace('ua', 'en'))}>Англ</DropdownMenu.Item>
                    </div>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item shortcut="⌘" color="red" onClick={logout}>
                        Вийти
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </MainTheme>
    );
};

export default MenuUa;