import React from 'react';
import styles from './MyHobbies.module.scss';
import NavBar from '../NavBar/NavBar';
import { observer } from 'mobx-react-lite';
import HobbiesChoice from '../../STORE/HobbiesChoice';
import MyFamily from '../MyFamily/MyFamily';
import Photo from '../Photo/Photo';
import MyCode from '../MyCode/MyCode';
import './test.css';
import Other from '../Other/Other';

const MyHobbies = observer(() => {



    let contentChoice = HobbiesChoice.choice

    if(HobbiesChoice.choice=='sport'){
        contentChoice = <Other/>
    } if(HobbiesChoice.choice=='photo'){
        contentChoice = <Photo/>
    } if(HobbiesChoice.choice=='family'){   
        contentChoice = <MyFamily/>
    } if(HobbiesChoice.choice=='code'){
        contentChoice = <MyCode/>
    }


    return (
        <div className={styles.main} id='live'> 
            <h1 className={styles.title}>my live</h1>

            <div className={styles.content}>
                <div className={styles.hobbiesVariation}>
                    <div className={styles.contentChoiceWrapper}>

                 
                        { contentChoice }
              

                 
                    </div>
                <NavBar/>

                </div>

            </div>
        </div>
    );
});



export default MyHobbies;