'use client';
import React, {useEffect, useMemo, useState} from 'react';
import styles from './classic-input.module.scss';
import * as uuid from 'uuid';
const ClassicInput = ({
                          children,
                          value,
                          setValue,
                          minValue,
                          maxValue,
                          type,
                          placeholder,
                          py, px,
                      }) => {
    const [id, setId] = useState('')
    useEffect(() => {
        setId(uuid.v4());
    }, []);
    return (
        <div className={styles.input__wrapper}
        >
            <input
                id={id}
                type={type ?? 'text'}
                min={minValue}
                max={maxValue}
                className={styles.input}
                placeholder={placeholder ?? ''}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{
                    paddingTop: py,
                    paddingBottom: py,
                    paddingLeft: px,
                    paddingRight: px
                }}
            />
            <label htmlFor={id} className={styles.label}>{children}</label>
        </div>
    );
};

export default ClassicInput;