import React from 'react';
import styles from './classic-button.module.scss';
const ClassicButton = ({
                           children,
                           onClick
                       }) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default ClassicButton;