import React from 'react';
import styles from './SpeedCodeWork.module.scss';

const SpeedCodeWork = () => {
    return (
        <div className={styles.main}>
            <img src="./WorkPic/speedCodeFon.jpg" className={styles.fonImg} />


            <img src="./WorkPic/speedcode2.png" className={styles.img2} />


            <div className={styles.imgWrapper}>
                <img src="./WorkPic/speedcode1.png" className={styles.img1} />
                <p>SPEED CODE - a website where you can check the printing speed. In addition to plain text, you can choose the JSX code writing mode.</p>
            </div>
        </div>
    );
};


export default SpeedCodeWork;