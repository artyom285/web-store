import React from 'react';
import { Link } from 'react-router-dom';
import Loading from "./Loading";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import "./Banners.css";

function Banners({ banners, pending }) {
    const filtered = banners.filter(prod => {
        return prod.type === 'banner';
    })

  return (
    <div className='Banners'>
        {pending ? (
            <div><Loading></Loading></div>
        ) : (
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 0,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[Autoplay, EffectCoverflow]}
                    className="mySwiper"
                >
                    {filtered.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Link to={`/game-page/${product.id}`}>                
                                <div className="swiper-img">
                                    <img src={product.poster1} alt="banner" />
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

export default Banners