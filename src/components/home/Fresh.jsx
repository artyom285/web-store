import React from 'react';
import Loading from "./Loading";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import "./Small.css";

import { BiPlusCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Fresh({ fresh, pending4 }) {
    const filtered = fresh.filter(prod => {
        return prod.type === 'new';
    })

  return (
    <div className='Small'>
        {pending4 ? (
            <div><Loading></Loading></div>
        ) : (
            <div>
                <div className="block-heading">
                    <p className='head'>New Releases</p>
                    <Link to="/new">
                        <i><BiPlusCircle /></i>
                    </Link>
                </div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    spaceBetween={25}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 0,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow]}
                    className="mySwiper"
                >
                    {filtered.map((product) => (
                        <SwiperSlide id='sm' key={product.id}>
                            <Link to={`/game-page/${product.id}`}>                
                                <div className="swiper-img small">
                                    <img src={product.poster2} alt="banner" />
                                </div>
                                <div className="swiper-text">
                                    <p className="title">{product.title}</p>
                                    <p className="devs">{product.devs}</p>
                                    <div className="price">
                                        <p className="sale">{product.price.sale}</p>
                                        <p className="old">{product.price.old}</p>
                                        <p className="new">{product.price.new}</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide> 
                    ))}
                </Swiper>
            </div>
        )}
    </div>
  )
}

export default Fresh