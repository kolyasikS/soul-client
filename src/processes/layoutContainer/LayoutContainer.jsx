'use client'
import React, {useEffect, useState} from 'react';
import styles from './layoutContainer.module.scss';
import '@radix-ui/themes/styles.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MainTheme from "../theme/MainTheme";
import {Provider, useDispatch} from "react-redux";
import store from "../../lib/store/store";
import {setUser} from "../../lib/store/slices/user.slice";
import {usePathname} from "next/navigation";
import HeaderUA from "../header/HeaderUA";

const LayoutContainer = ({children, user}) => {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const isHeaderAndFooterHidden = pathname.includes('authentication');
    useEffect(() => {
        function checkVerticalScrollBarVisibility() {
            const isVerticalScrollBarVisible = document.body.scrollHeight >= document.documentElement.scrollHeight;
            if (isVerticalScrollBarVisible) {
                document.documentElement.style.scrollbarGutter = 'stable';
            } else {
                document.documentElement.style.scrollbarGutter = 'unset';
            }
        }

        checkVerticalScrollBarVisibility();

        window.addEventListener('scroll', checkVerticalScrollBarVisibility);
        window.addEventListener('resize', checkVerticalScrollBarVisibility);

        return () => {
            window.removeEventListener('scroll', checkVerticalScrollBarVisibility);
            window.removeEventListener('resize', checkVerticalScrollBarVisibility);
        }
    }, []);
    useEffect(() => {
        user = JSON.parse(localStorage.getItem('soul-user'));
        dispatch(setUser(user));
    }, [user]);
    const [language, setLanguage] = useState('en');
    useEffect(() => {
        if (window.location.href.includes('en')) {
            setLanguage('en')
        } else {
            setLanguage('ua')
        }
    }, []);
    return (
        <>
            {!isHeaderAndFooterHidden && language === 'en' ? <Header/> : <HeaderUA/>}
                <main className={styles.layoutContainer}>
                    <div className={styles.layoutContainer__inner}>
                        <MainTheme>
                            {children}
                        </MainTheme>
                    </div>
                </main>
            {!isHeaderAndFooterHidden && <Footer/>}
        </>
    );
};

export default LayoutContainer;