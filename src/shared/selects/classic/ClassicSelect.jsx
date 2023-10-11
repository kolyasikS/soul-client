'use client';
import React from 'react';
import {Select, Theme} from "@radix-ui/themes";
import styles from './classic-select.module.scss';

const ClassicSelect = ({placeholder,
                           label,
                           defaultValue,
                           items,
                           setSelectedItem
                       }) => {

    return (
        <div className={styles.select}>
            <Select.Root defaultValue={defaultValue}
                         onValueChange={(value) => setSelectedItem(value)} size={'3'}>
                <Select.Trigger
                    className={styles.select__trigger}
                    placeholder={placeholder}
                />
                <Select.Content
                    position="popper"
                    color={'cyan'}
                >
                    <Select.Group>
                        <Select.Label>{label}</Select.Label>
                        {items.length && items.map((item, ind) =>
                            <Select.Item key={ind}
                                         value={item.value ?? item}
                                         style={{cursor: 'pointer'}}
                            >
                                {item.title ?? item}
                            </Select.Item>
                        )}
                    </Select.Group>
                </Select.Content>
            </Select.Root>
        </div>
    );
};

export default ClassicSelect;