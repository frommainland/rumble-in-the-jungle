// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import 'swiper/swiper.scss';
import "./swiper-bundle.css";
import "./AnimalDetails.css";

import Animal from "./Animal";

const AnimalDetails = () => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={"auto"}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <Animal />
            </SwiperSlide>
            <SwiperSlide>
                <Animal />
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
};

export default AnimalDetails;
