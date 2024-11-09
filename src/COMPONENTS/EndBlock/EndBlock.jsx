import React from 'react';
import styles from './EndBlock.module.scss';

const EndBlock = () => {
    return (
        <div className={styles.main}>
            <img src='./photo/me1.png' className={styles.me1}/>
            <img src='./photo/me2.png' className={styles.me2}/>
            <p className={styles.water}>vlad niko | 2024</p>
            <ul>
                <li>
                    <a href="#about_me">About ME</a>
                </li>
                <li>
                    <a href="#live">live</a>
                </li>
                <li>
                    <a href="#skills">skill's</a>
                </li>
                <li>
                    <a href="#works">work's</a>
                </li>
                <li>
                    <a href="#contacts">contact's</a>
                </li>
            </ul>


        </div>
    );
};


export default EndBlock;