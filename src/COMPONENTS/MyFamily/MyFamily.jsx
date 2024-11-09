import React, { useState } from 'react';
import styles from './MyFamily.module.scss';
import { engText, rusText } from './parametrs';

const MyFamily = () => {
    const [lang, setLang] = useState('eng');

    const lanChoice = (e) => {
        let lan = e.target.id
        setLang(lan)
    }


    return (
        <div className={styles.wrapper}>
            
            <div className={styles.language}>
                <button onClick={lanChoice} id='eng' className={lang==='eng'? styles.setLanguage : styles.buttonLanguage}>en</button>
                <button onClick={lanChoice} id='ru' className={lang==='ru'? styles.setLanguage : styles.buttonLanguage}>ru</button>
            </div>

            <div className={styles.aboutFamily}>
                <p className={styles.info}>
                    {lang==='eng' ? engText : rusText}
                </p>
            </div>
                <div className={styles.container}>
                    <img src="./family/1.jpg" className={styles.img} />
                    <img src="./family/2.jpg" className={styles.img2} />
                    <img src="./family/3.jpg" className={styles.img3} />
                </div>

        </div>
    );
};


export default MyFamily;