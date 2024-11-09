import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { pop } from './particle';
import TapCount from '../../STORE/TapCount';
import CVButton from '../../UI/CVButton/CVButton';
import styles from './AboutMe.module.scss';
import './particle.css';

const AboutMe = observer(() => {
    
    const [click, setClick] = useState(false)

    const rootStyleImg = [styles.image]
    const rootStyleColorCount = [styles.tap]
    
    const imageClick = () => {
        setClick(true)
        TapCount.plusCount()
        
    }
    const imageDisClick = () => setClick(false)
    const dopClick = () => setClick(false)

    if(click){
        rootStyleImg.push(styles.imageClick)
        rootStyleColorCount.push(styles.tapActive)

    }

    return (

        <div className={styles.main}>
            
            <div className={styles.linksWrapper}>
                <a href='https://t.me/VLadNIkOonline' target='_blank' className={styles.link}>
                    <img src="./icons/whiteIcons/telegram.svg"/>
                </a>

                <a href='https://vk.com/vladnikoonline'  target='_blank' className={styles.link}>
                    <img src="./icons/whiteIcons/vk.svg"/>
                </a>

                <a href='#' className={styles.link}>
                    <img src="./icons/whiteIcons/github.svg"/>
                </a>

                <a href='https://api.whatsapp.com/send?phone=79001354142' target='_blank' className={styles.link}>
                    <img src="./icons/whiteIcons/whatsapp.svg"/>
                </a>

            </div>


           <div className={styles.tapBlock}>
            <h5>you can tap me</h5>
            <p className={styles.par}>all taps:</p>
            <p className={rootStyleColorCount.join(' ')}>{TapCount.tapCount}</p>
           </div>
           
            <img src='./photo/1.png' className={rootStyleImg.join(' ')} />
            
            <button
                className={styles.buttonMusk} 
                onMouseDown={imageClick} 
                onMouseUp={imageDisClick} 
                onMouseOut={dopClick}
                onTouchStart={imageClick}
                onTouchEnd={imageDisClick}
                data-type="logo"
                onClick={pop}
            ></button>

            <div className={styles.infoBlock}>
                <h3>welcome</h3>
                <h4>to</h4>
                <h1>Vlad Niko</h1>
                <CVButton>download CV</CVButton>
            </div>
        </div>
    );
});


export default AboutMe;


