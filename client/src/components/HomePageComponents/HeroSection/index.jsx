import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './index.scss'

const HeroSection = () => {
    return (
        <section className='slider'>

            <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                <SwiperSlide>
                    <div className='slide slide1'>
                        <p className=' italic  text-lg'>Floral</p>
                        <h1>Excellent bouquets for you</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide slide2'>
                        <p className='italic  text-lg'>Floral</p>
                        <h1>Excellent bouquets for you</h1>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='slide slide3'>
                    <p className=' italic text-lg'>Floral</p>
                        <h1>Excellent bouquets for you</h1>
                    </div>
                </SwiperSlide>

                {/* <div class="swiper-button-prev">Prev</div>
                <div class="swiper-button-next">Next</div> */}
            </Swiper>
        </section>
    )
}

export default HeroSection