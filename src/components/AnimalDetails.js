// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import 'swiper/swiper.scss';
import "./swiper-bundle.css";
import "./AnimalDetails.css";
import Animal_data from "./Animal_data";

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
                <Animal
                    title={Animal_data.elephant.title}
                    animal_quotes={Animal_data.elephant.animal_quotes}
                    animal_essay_top={Animal_data.elephant.animal_essay_top}
                    animal_essay_bot={Animal_data.elephant.animal_essay_bot}
                    animal_metrics={Animal_data.elephant.animal_metrics}
                    img={Animal_data.elephant.img}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Animal
                    title={Animal_data.tiger.title}
                    animal_quotes={Animal_data.tiger.animal_quotes}
                    animal_essay_top={Animal_data.tiger.animal_essay_top}
                    animal_essay_bot={Animal_data.tiger.animal_essay_bot}
                    animal_metrics={Animal_data.tiger.animal_metrics}
                    img={Animal_data.tiger.img}
                />
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
};

export default AnimalDetails;
