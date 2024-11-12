import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AnimatedArrow from '../../UI/AnimatedArrow/AnimatedArrow';
import styles from './Photo.module.scss';
import 'swiper/css';
import './styles.scss';

const Photo = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.glitch}>A little bit of magic, hah</h2>
        <Swiper  
            slidesPerView={'auto'} 
            spaceBetween={1}
            className="mySwiper"
        >
            {
                Array.from({length:20}, (_, i)=>i+1).map(element => 
                    <SwiperSlide key={element}>    
                            <img src={`./myPH/${element}.jpg`} className={styles.image} loading="lazy"/>
                    </SwiperSlide>)
            }
        </Swiper>
            <div className={styles.arrow}>
                <AnimatedArrow/>
            </div>
        </div>

    );
};


export default Photo;