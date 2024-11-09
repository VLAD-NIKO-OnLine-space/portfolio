import React from 'react';
import styles from './CVButton.module.scss';

const CVButton = ({children, ...props}) => {
    return (
        <a className={styles.button} {...props} href='./CV/resume.jpg' download>
            {children}
        </a>
    );
};


export default CVButton;