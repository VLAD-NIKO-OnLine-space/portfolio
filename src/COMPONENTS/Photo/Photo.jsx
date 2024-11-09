import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import styles from './Photo.module.scss'
import './styles.scss'
import 'swiper/css/scrollbar';


const Photo = () => {
    const numberPh = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.glitch}>A little bit of magic, hah</h2>


    <Swiper 
        slidesPerView={3} 
        spaceBetween={1}
        className="mySwiper"
    
    >

    {
        numberPh.map(element => 
            <SwiperSlide key={element}>    
                    <img src={`./myPH/${element}.jpg`} className={styles.image}/>
            </SwiperSlide>)
    }

      </Swiper>
        </div>

    );
};


export default Photo;