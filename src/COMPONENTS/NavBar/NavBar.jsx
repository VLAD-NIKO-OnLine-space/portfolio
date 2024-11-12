import React from 'react';
import styles from './NavBar.module.scss';
import { observer } from 'mobx-react-lite';
import HobbiesChoice from '../../STORE/HobbiesChoice';

const NavBar = observer(() => {
    const handleClick = (e) => {
        let a = e.target.id
        HobbiesChoice.changeChoice(a)
    }

    const rootStyleWrapper = [styles.wrapper]

    return (
        <nav className={styles.nav}>
            <div id='code' onClick={handleClick} className={HobbiesChoice.choice=='code'? styles.wrapperNone:rootStyleWrapper}>Write a code, sure</div>
            <div id='family' onClick={handleClick} className={HobbiesChoice.choice=='family'? styles.wrapperNone:rootStyleWrapper}>My Family</div>
            <div id='photo' onClick={handleClick} className={HobbiesChoice.choice=='photo'? styles.wrapperNone:rootStyleWrapper}>Photo Game's</div>
            <div id='sport' onClick={handleClick} className={HobbiesChoice.choice=='sport'? styles.wrapperNone:rootStyleWrapper}>Other</div>
        </nav>
    );
});


export default NavBar;