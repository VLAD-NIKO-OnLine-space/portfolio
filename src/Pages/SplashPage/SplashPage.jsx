import React from 'react';
import styles from './SplashPage.module.scss';

const SplashPage = () => {


    return (
        <div className={styles.main}>
            <span className={styles.fon}></span>
            <img src="./CV/test.png" className={styles.logo}/>
            <p>vlad niko</p>
        </div>
    );
};


export default SplashPage;