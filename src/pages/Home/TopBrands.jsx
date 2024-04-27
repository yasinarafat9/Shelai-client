import illiyeenLogo from '../../assets/Images/Home/TopBrandsForMen/illiyeen.png'
import aarongLogo from '../../assets/Images/Home/TopBrandsForMen/aarong.webp'
import gentleParkLogo from '../../assets/Images/Home/TopBrandsForMen/gentlePark.jpg'
import gorurGhashLogo from '../../assets/Images/Home/TopBrandsForMen/gorurGhash.png'
import fabriLifeLogo from '../../assets/Images/Home/TopBrandsForMen/fabriLife.png'
import './TopBrands.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'

const TopBrands = () => {
    return (
        <div className='top-brands-container'>
            <h1>Top Selling Brands</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={true}
                modules={[FreeMode, Pagination, Autoplay]}
                className="swiper-container"
            >
                <SwiperSlide>
                    <Link to="/"> <img src={illiyeenLogo} alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/"> <img src={aarongLogo} alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/"> <img src={gentleParkLogo} alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/"> <img src={gorurGhashLogo} alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/"> <img src={fabriLifeLogo} alt="" /></Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TopBrands;