import React from 'react';
import styles from './KinostocsWork.module.scss'

const KinostocsWork = () => {
    return (
        <div className={styles.main}>
            <img src="./WorkPic/k1.png" className={styles.fonImg} />

            <div className={styles.content}>

                <div className={styles.leftContent}>
                    <img src='./WorkPic/k2.png' className={styles.k2}/>

                    <ul>
                        <li>React | JSX | AXIOS | MobX | API Kinopoisk | SCSS | Swiper JS</li>
                        <li>adaptability to mobile devices</li>
                        <li>pagination is implemented</li>
                        <li>search for a movie by words</li>
                        <li>a pop-up window with information about the movie</li>
                        <li>adding and removing from favorites</li>
                        <li>custom elements</li>
                    </ul>
                </div>

                <div className={styles.rigthContent}>
                    <img src="./WorkPic/k3.png" className={styles.k3}/>
                    <img src="./WorkPic/k4.png" className={styles.k4}/>
                </div>

            </div>
        </div>
    );
};


export default KinostocsWork;