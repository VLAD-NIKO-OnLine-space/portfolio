import React from 'react';
import styles from './WeatherWork.module.scss';

const WeatherWork = () => {
    return (
        <div className={styles.main}>
            <img src="./WorkPic/weatherFon.jpg" className={styles.fon} loading='lazy'/>
            <h1 className={styles.title}>4weather</h1>
            <img src='./WorkPic/weather1.png' className={styles.img1} loading='lazy'/>
            <div className={styles.contentBlock}>
                <img src='./WorkPic/weather2.png' className={styles.img2} loading='lazy'/>
                <ul className={styles.items}>
                    <li className={styles.item}>React JS</li>
                    <li className={styles.item}>Mob X</li>
                    <li className={styles.item}>Weather API (openweathermap)</li>
                    <li className={styles.item}>styled-components & Sass</li>
                    <li className={styles.item}>YARN</li>
                    <li className={styles.item}>AXIOS</li>
                    <li className={styles.item}>animation element's</li>
                </ul>
                <button className={styles.button} disabled={true}>live project</button>
            </div>
        </div>
    );
};


export default WeatherWork;