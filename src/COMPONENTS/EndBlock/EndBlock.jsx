import React from 'react';
import styles from './EndBlock.module.scss';

const EndBlock = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>&lt;p&gt; thank's 4 watching &lt;/p&gt;</h1>
            <img src='./photo/me1.png' className={styles.me1}/>
            <img src='./photo/me2.png' className={styles.me2}/>
            <img src='./photo/me3.png' className={styles.me3}/>
        </div>
    );
};


export default EndBlock;