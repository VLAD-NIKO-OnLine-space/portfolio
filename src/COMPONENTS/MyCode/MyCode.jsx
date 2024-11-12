import React from 'react';
import { FancyDoodle } from './Doodle';
import styles from './MyCode.module.scss';

const MyCode = () => {

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.glitch}>something from the my code game</h2>
            <p className={styles.par}>some hover effect</p>
            <p className={styles.par2}>see more in desktop version</p>
            <div className={styles.items}>
                <div className={styles.item} style={{backgroundImage: "url('./photos/1.jpg')"}}></div>
                <div className={styles.item} style={{backgroundImage: "url('./photos/2.jpg')"}}></div>
                <div className={styles.item} style={{backgroundImage: "url('./photos/3.jpg')"}}></div>
                <div className={styles.item} style={{backgroundImage: "url('./photos/4.jpg')"}}></div>
                <div className={styles.item} style={{backgroundImage: "url('./photos/5.jpg')"}}></div>
                <div className={styles.item} style={{backgroundImage: "url('./photos/6.jpg')"}}></div>
                <div className={styles.item} style={{backgroundImage: "url('./photos/7.jpg')"}}></div>
                <div className={styles.item} style={{backgroundImage: "url('./photos/8.jpg')"}}></div>
                <div className={styles.item} style={{backgroundImage: "url('./photos/9.jpg')"}}></div>
                <div className={styles.item} style={{backgroundImage: "url('./photos/10.jpg')"}}></div>
                <div className={styles.item} style={{backgroundImage: "url('./photos/11.jpg')"}}></div>
                <div className={styles.item} style={{backgroundImage: "url('./photos/12.jpg')"}}></div>
                <div className={styles.item} style={{backgroundImage: "url('./photos/13.jpg')"}}></div> 
            </div>

            <div className={styles.effectForMobile}>
                <span>
                    <FancyDoodle/>
                </span>
            </div>
        </div>
    );
};


export default MyCode;