import React from 'react';
import styles from './MyCode.module.scss';

const MyCode = () => {
    const rootSt = [styles.item]
    rootSt.push(styles.active)
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.glitch}>something from the my code game</h2>
            <p className={styles.par}>some hover effect</p>
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
        </div>
    );
};


export default MyCode;