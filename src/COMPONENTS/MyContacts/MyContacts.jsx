import React from 'react';
import styles from './MyContacts.module.scss';
import Form from '../Form/Form';
import SocialLink from '../../UI/SocialLink/SocialLink';


const MyContacts = () => {

    return (
        <div className={styles.main}>
            <img src="./photo/smsFon.jpg" className={styles.smsFon} />
            
            <h1 className={styles.title}>my contacts</h1>
            <div className={styles.content}>
                <Form/>
                <div className={styles.links}>
                    <SocialLink 
                        Href={'https://t.me/VLadNIkOonline'} 
                        icon={'./icons/telegram.svg'} 
                        linkName={'telegram'} 
                        Color={'#1594d4'}
                    />

                    <SocialLink 
                        Href={'https://vk.com/vladnikoonline'} 
                        icon={'./icons/vk.svg'} 
                        linkName={'VK'} 
                        Color={'#2787f5'}
                    />

                    <SocialLink 
                        Href={'#'} 
                        icon={'./icons/github.svg'} 
                        linkName={'Github'} 
                        Color={'#000'}
                    />

                    <SocialLink 
                        Href={'https://api.whatsapp.com/send?phone=79001354142'} 
                        icon={'./icons/whatsapp.png'} 
                        linkName={"What's app"} 
                        Color={'#00c256'}
                    />

                </div>
            </div>
            
        </div>
    );
};


export default MyContacts;