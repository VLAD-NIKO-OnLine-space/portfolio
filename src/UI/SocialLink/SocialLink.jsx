import React from 'react';
import styles from './SocialLink.module.scss';




const SocialLink = ({ Href, icon, linkName, Color }) => {

    return (
        <a 
            className={styles.link} 
            href={Href} 
            style={{'--c': Color}}
            target="_blank"
        >
            <img src={icon} className={styles.icon}/>
            <p className={styles.par}>{linkName}</p>
        </a>
    );
};


export default SocialLink;