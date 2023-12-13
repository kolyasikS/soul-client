'use client';

import React, {useEffect, useState} from 'react';
import styles from "./styles/profile.module.scss";
import {ClubController} from "../../../lib/controllers/club.controller";

const Club = ({clubId}) => {
    const [club, setClub] = useState(null);
    useEffect(() => {
        ClubController.findOne(clubId).then(res => setClub(res));
    }, []);
    return (
        <p className={styles.profile__info_item}><span>Club:</span> {club?.name ?? <span className={styles.profile__info_noClub}>has no club</span>}</p>
    );
};

export default Club;