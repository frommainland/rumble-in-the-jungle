// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/swiper.scss';
import './swiper-bundle.css'
import './AnimalDetails.css'

const AnimalDetails = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={'auto'}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div style={{
                    color: 'white',
                    fontSize: 30,
                    backgroundColor: 'red',
                    width: '20vw',
                    height: '200vh'

                }}>Slide 1</div>
            </SwiperSlide>
            <SwiperSlide>                <div style={{
                color: 'white',
                fontSize: 30,
                backgroundColor: 'green',
                width: '40vw'
            }}>Slide 2</div></SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
};

export default AnimalDetails;