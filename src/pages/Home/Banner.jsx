
import './Banner.css';
import img1 from '../../assets/Images/Home/BannerImg/fabrilife.com.jpg'
import img2 from '../../assets/Images/Home/BannerImg/bata.webp'
import img3 from '../../assets/Images/Home/BannerImg/stridesco.com.png'
import img4 from '../../assets/Images/Home/BannerImg/gentlepark.com.jpg'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='banner-container'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;