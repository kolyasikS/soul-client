import React from 'react';
import Form from "../Form";
import styles from '../../styles/sign-up.module.scss';
import {PlayerController} from "../../../../lib/controllers/player.controller";
import {AuthController} from "../../../../lib/controllers/auth.controller";
import {useSearchParams} from "next/navigation";
import {ClassicSelect} from "../../../../shared/selects/api";
import {UserTypes} from "../../../../lib/enums/auth";
import {ClassicInput} from "../../../../shared/inputs/api";

async function getData(role) {
    let positions;
    if (role === UserTypes.PLAYER.toLowerCase()) {
        positions = await PlayerController.getPositions();
    }
    const nations = await AuthController.getNations();
    return {positions, nations};
}
const Page = async ({params}) => {
    const {positions, nations} = await getData(params.role);
    // const searchParams = useSearchParams();
    // const userRole = searchParams.get('role');
    console.log(params);
    const userRole = params.role.split('').map((item, ind) => !ind ? item.toUpperCase() : item).join('');

    return (
        <section className={styles.section}>
            <div className={styles.section__content}>
                <h1 className={styles.section__content__title}>Sign up as {userRole ?? '_'}</h1>
                <Form
                    nations={nations}
                    positions={positions}
                    userRole={params.role}
                >
                </Form>
            </div>
        </section>
    );
};

export default Page;