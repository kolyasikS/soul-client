'use client'
import React, {useEffect} from 'react';
import styles from './layoutContainer.module.scss';
import '@radix-ui/themes/styles.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MainTheme from "../theme/MainTheme";
import {Provider, useDispatch} from "react-redux";
import store from "../../lib/store/store";
import {setUser} from "../../lib/store/slices/user.slice";
import {usePathname} from "next/navigation";

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
        console.log(1);
        dispatch(setUser(user));
    }, [user]);

    return (
        <>
            {!isHeaderAndFooterHidden && <Header/>}
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