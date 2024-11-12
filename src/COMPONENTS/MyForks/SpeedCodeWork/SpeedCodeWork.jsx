import React from 'react';
import styles from './SpeedCodeWork.module.scss';

const SpeedCodeWork = () => {
    return (
        <div className={styles.main}>
            <img src="./WorkPic/speedCodeFon.jpg" className={styles.fonImg} loading='lazy'/>


            <img src="./WorkPic/speedcode2.png" className={styles.img2} loading='lazy'/>


            <div className={styles.imgWrapper}>
                <img src="./WorkPic/speedcode1.png" className={styles.img1} loading='lazy'/>
                <p>SPEED CODE - a website where you can check the printing speed. In addition to plain text, you can choose the JSX code writing mode.</p>
            </div>
        </div>
    );
};


export default SpeedCodeWork;