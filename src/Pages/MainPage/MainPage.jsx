import React from 'react';
import styles from './MainPage.module.scss';
import AboutMe from '../../COMPONENTS/AboutMe/AboutMe';
import MyHobbies from '../../COMPONENTS/MyHobbies/MyHobbies';
import MyContacts from '../../COMPONENTS/MyContacts/MyContacts';
import MySkills from '../../COMPONENTS/MySkills/MySkills';
import MyWorks from '../../COMPONENTS/MyForks/MyWorks';
import EndBlock from '../../COMPONENTS/EndBlock/EndBlock';
import SplashPage from '../SplashPage/SplashPage';


const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <div className={styles.splash}>
                <SplashPage/>
            </div>
            <div className={styles.allContent}>   
                <AboutMe/>
                <MyHobbies/>
                <MySkills/>
                <MyWorks/>
                <MyContacts/>
                <EndBlock/>
            </div>

        </div>
    );
};

export default MainPage;