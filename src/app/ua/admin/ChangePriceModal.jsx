import React, {useState} from 'react';
import styles from "../authentication/styles/sign-up-form.module.scss";
import {ClassicInput} from "@shared/inputs/api";
import {ValidationError} from "@shared/errors/api";
import ClassicButton from "@shared/buttons/classic/ClassicButton";
import {ClassicDialog} from "@shared/dialogs/api";
import {DirectorController} from "../../../lib/controllers/director.controller";
import {AuthController} from "../../../lib/controllers/auth.controller";

const ChangePriceModal = ({close}) => {
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState({});

    const apply = async (e) => {
        e.preventDefault();
        const res = await AuthController.changePrice(price);
        if (!res.error) {
            window.location.reload();
        } else {
            setErrors(res.error)
        }
    }

    const cancel = async (e) => {
        e.preventDefault();
        close();
    }

    return (
        <ClassicDialog zIndex={9999999}>
            <form className={styles.form}>
                <div className={styles.form__block}>
                    <ClassicInput
                        value={price}
                        setValue={setPrice}
                    >New price $</ClassicInput>
                    {errors.price && <ValidationError className={styles.form__block_error}>{errors.price}</ValidationError>}
                </div>
                <div className={'flex gap-3 mt-5'}>
                    <ClassicButton onClick={cancel} variant={'danger'}>Cancel</ClassicButton>
                    <ClassicButton onClick={apply}>Change</ClassicButton>
                </div>
            </form>
        </ClassicDialog>
    );
};

export default ChangePriceModal;