import React from 'react';
import styles from './FishWork.module.scss';

const FishWork = () => {
    return (
        <div className={styles.main}>
            <img src="./WorkPic/f1.png" className={styles.fonImg} />

            <ul>
                <li>React | JSX | MobX | SCSS | Swiper JS</li>
                <li>catalog of different varieties of fish</li>
                <li>react screen motion</li>
                <li>working with the server</li>
                <li>adding and removing from the trash</li>
                <li>react motion screen's</li>
            </ul>

            <div className={styles.content}>
                <img src="./WorkPic/f2.png" className={styles.f2} />
                <img src="./WorkPic/f3.png" className={styles.f3} />

            </div>
        </div>
    );
};


export default FishWork;