import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

function Loading() {
  return (
    <div className='Load'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
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
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="load-img">
            <Skeleton height={253.13} baseColor='#212121' highlightColor='#424242' />
          </div>           
          <div className="load-title" style={{marginTop: 20}}>
            <Skeleton height={23.2} baseColor='#212121' highlightColor='#424242' />
          </div>
          <div className="load-devs" style={{marginTop: 2.5}}>
            <Skeleton height={23.2} baseColor='#212121' highlightColor='#424242' />
          </div>
          <div className="load-price" style={{marginTop: 20, width: "50%"}}>
            <Skeleton height={23.2} baseColor='#212121' highlightColor='#424242' />
          </div>
        </SwiperSlide> 
        <SwiperSlide>
          <div className="load-img">
            <Skeleton width={450} height={253.13} baseColor='#212121' highlightColor='#424242' />
          </div>           
          <div className="load-title" style={{marginTop: 20}}>
            <Skeleton width={450} height={23.2} baseColor='#212121' highlightColor='#424242' />
          </div>
          <div className="load-devs" style={{marginTop: 2.5}}>
            <Skeleton width={450} height={23.2} baseColor='#212121' highlightColor='#424242' />
          </div>
          <div className="load-price" style={{marginTop: 20, width: "50%"}}>
            <Skeleton height={23.2} baseColor='#212121' highlightColor='#424242' />
          </div>
        </SwiperSlide> 
        <SwiperSlide>
          <div className="load-img">
            <Skeleton width={450} height={253.13} baseColor='#212121' highlightColor='#424242' />
          </div>           
          <div className="load-title" style={{marginTop: 20}}>
            <Skeleton width={450} height={23.2} baseColor='#212121' highlightColor='#424242' />
          </div>
          <div className="load-devs" style={{marginTop: 2.5}}>
            <Skeleton width={450} height={23.2} baseColor='#212121' highlightColor='#424242' />
          </div>
          <div className="load-price" style={{marginTop: 20, width: "50%"}}>
            <Skeleton height={23.2} baseColor='#212121' highlightColor='#424242' />
          </div>
        </SwiperSlide> 
      </Swiper>
    </div>
  )
}

export default Loading