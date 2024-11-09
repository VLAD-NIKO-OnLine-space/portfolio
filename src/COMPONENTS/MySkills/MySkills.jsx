import React from 'react';
import styles from './MySkills.module.scss';

const MySkills = () => {
    return (
        <div className={styles.main}>

            <div className={styles.mainWrapper}>
                <div className={styles.w1}>
                    <div className={styles.item} style={{backgroundImage: "url('./AmazingImg/react.jpg')"}}></div>
                    <div className={styles.item} style={{backgroundImage: "url('./AmazingImg/axios.jpg')"}}></div>
                    <div className={styles.item} style={{backgroundImage: "url('./AmazingImg/ph.jpg')"}}></div>
                    <div className={styles.item} style={{backgroundImage: "url('./AmazingImg/js.jpg')"}}></div>
                </div>

                <div className={styles.w1}>
                    <div className={styles.item2} style={{backgroundImage: "url('./AmazingImg/xml.jpg')"}}></div>
                    <div className={styles.item2} style={{backgroundImage: "url('./AmazingImg/html.jpg')"}}></div>
                    <div className={styles.item2} style={{backgroundImage: "url('./AmazingImg/scss.jpg')"}}></div>
                    <div className={styles.item2} style={{backgroundImage: "url('./AmazingImg/mobx.jpg')"}}></div>
                </div>

                <div className={styles.w1}>
                    <div className={styles.item} style={{backgroundImage: "url('./AmazingImg/git.jpg')"}}></div>
                    <div className={styles.item} style={{backgroundImage: "url('./AmazingImg/api.jpg')"}}></div>
                    <div className={styles.item} style={{backgroundImage: "url('./AmazingImg/design.jpg')"}}></div>
                    <div className={styles.item} style={{backgroundImage: "url('./AmazingImg/frontend.jpg')"}}></div>
                </div>

                <div className={styles.w1}>
                    <div className={styles.item2} style={{backgroundImage: "url('./AmazingImg/sql.jpg')"}}></div>
                    <div className={styles.item2} style={{backgroundImage: "url('./AmazingImg/css.jpg')"}}></div>
                    <div className={styles.item2} style={{backgroundImage: "url('./AmazingImg/animation.jpg')"}}></div>
                    <div className={styles.item2} style={{backgroundImage: "url('./AmazingImg/ts.jpg')"}}></div>
                </div>

            </div>
        </div>
    );
};


export default MySkills;