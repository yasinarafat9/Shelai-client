import { Link } from 'react-router-dom';
import './TrendingProducts.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';


const TrendingProducts = () => {
    return (
        <div className='trending-products-container'>
            <h1 className='title'>Trending Products</h1>
            {/* DEXTOP VIEW LARGE DEVICE */}
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={true}
                modules={[FreeMode, Pagination, Autoplay]}
                className="swiper-container lg"
            >
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>
                            <img src="https://i.pinimg.com/564x/da/90/47/da9047a15a5693e17a4d54a2290fcafe.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>
                            <img src="https://i.pinimg.com/564x/1c/e0/53/1ce053123bfaf353dcd5e51611e539ea.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>
                            <img src="https://i.pinimg.com/736x/16/bd/68/16bd681e7d6a3c03c89ff5856ac434df.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>
                            <img src="https://i.pinimg.com/564x/00/db/dc/00dbdcaf451ebfeb0e10a917b482952e.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>
                            <img src="https://i.pinimg.com/736x/b0/b4/7f/b0b47f0513c2dd257d1dbbacb5a262d0.jpg" alt="" />
                            {/* <div className='text-container'>
                                <h4>Panjabi Green with stripes</h4>
                                <p>Brand Name: Yellow</p>
                                <h4>Price: 1190 BDT</h4>
                            </div> */}
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>
                            <img src="https://i.pinimg.com/564x/27/3b/06/273b06b3c4b62fa5992048b78e1c8ebf.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>
                            <img src="https://i.pinimg.com/564x/c3/fa/3c/c3fa3ca755b4f680912c370cad321af1.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>
                            <img src="https://i.pinimg.com/736x/4b/68/f8/4b68f8258780b379dfcd22fc302c277a.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>
                            <img src="https://i.pinimg.com/564x/bd/88/54/bd88542a3d567bb2ec597c97e5ca6c7c.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>
                            <img src="https://i.pinimg.com/564x/1b/f4/34/1bf4342b029a47bf05e8c0423e6416d1.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>
                            <img src="https://i.pinimg.com/564x/50/0b/42/500b4254285debc7f245fc6ce4f111bf.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>


            </Swiper>

            {/* MOBILE VIEW SMall Devicee */}
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={true}
                modules={[FreeMode, Pagination, Autoplay]}
                className="swiper-container sm"
            >
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>
                            <img src="https://i.pinimg.com/564x/da/90/47/da9047a15a5693e17a4d54a2290fcafe.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>
                            <img src="https://i.pinimg.com/564x/1c/e0/53/1ce053123bfaf353dcd5e51611e539ea.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>

                            <img src="https://i.pinimg.com/736x/16/bd/68/16bd681e7d6a3c03c89ff5856ac434df.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>

                            <img src="https://i.pinimg.com/564x/00/db/dc/00dbdcaf451ebfeb0e10a917b482952e.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>

                            <img src="https://i.pinimg.com/736x/b0/b4/7f/b0b47f0513c2dd257d1dbbacb5a262d0.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>

                            <img src="https://i.pinimg.com/564x/27/3b/06/273b06b3c4b62fa5992048b78e1c8ebf.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>

                            <img src="https://i.pinimg.com/564x/c3/fa/3c/c3fa3ca755b4f680912c370cad321af1.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>

                            <img src="https://i.pinimg.com/736x/4b/68/f8/4b68f8258780b379dfcd22fc302c277a.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>

                            <img src="https://i.pinimg.com/564x/bd/88/54/bd88542a3d567bb2ec597c97e5ca6c7c.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>

                            <img src="https://i.pinimg.com/564x/1b/f4/34/1bf4342b029a47bf05e8c0423e6416d1.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className='navlink' to="/">
                        <div className='trending-card'>

                            <img src="https://i.pinimg.com/564x/50/0b/42/500b4254285debc7f245fc6ce4f111bf.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default TrendingProducts;