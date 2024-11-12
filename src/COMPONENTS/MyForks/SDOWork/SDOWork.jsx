import React from 'react';
import styles from './SDOWork.module.scss';

const SDOWork = () => {
    return (
        <div className={styles.main}>
            <img src="./WorkPic/sdoFon.jpg" className={styles.fonImg} loading='lazy'/>

            <div className={styles.TextContent}>
                <h2>Smart SDO - a web application that I created to solve one of the tasks related to the monthly passing of tests to confirm professional suitability. The user only entered the username and password from his profile, paid and received the completed tests for the entire month. This saved time plus minutes for a couple of hours of each employee.</h2>
                <h2>All this is created on React. From what can be noted here, it is that here I implemented the payment process using API 'Y-Kassa'.</h2>
            </div>

            <div className={styles.picContainer}>
                <img src='./WorkPic/sdo1.png' className={styles.picLeft} loading='lazy'/>
                <img src='./WorkPic/sdo2.png' className={styles.picCenter} loading='lazy'/>
                <img src='./WorkPic/sdo3.png' className={styles.picRight} loading='lazy'/>
            </div>
        </div>
    );
};


export default SDOWork;