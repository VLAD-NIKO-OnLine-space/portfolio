import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Scrollbar } from 'swiper/modules';
import styles from './MyWorks.module.scss';
import WeatherWork from './WeatherWork/WeatherWork';
import KinostocsWork from './KinostocsWork/KinostocsWork';
import FishWork from './FishWork/FishWork';
import SDOWork from './SDOWork/SDOWork';
import SpeedCodeWork from './SpeedCodeWork/SpeedCodeWork';
import TimerWork from './TimerWork/TimerWork';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';

const MyWorks = () => {
    return (
        <div className={styles.main} id='works'>
            <h1 className={styles.title}>my works</h1>
            <Swiper 
                className={styles.swiper}
                effect={'fade'}
                scrollbar={{hide:false}}
                modules={[EffectFade, Scrollbar]}
            >
                <SwiperSlide className={styles.slide}>
                    <WeatherWork/>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                    <KinostocsWork/>
                </SwiperSlide>


                <SwiperSlide className={styles.slide}>
                    <SDOWork/>                       
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                    <FishWork/>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                    <SpeedCodeWork/>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                    <TimerWork/>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                    <p className={styles.soon}>new jobs coming soon...</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};


export default MyWorks;