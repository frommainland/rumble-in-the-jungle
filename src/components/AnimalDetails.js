// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import 'swiper/swiper.scss';
import "./swiper-bundle.css";
import "./AnimalDetails.css";
import Animal_data from "./Animal_data";
import Animal_title from "./Animal_title";
import Animal from "./Animal";
import React, { useEffect, useState } from "react";

const AnimalDetails = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };
    }, []);

    return (
        <div>
            <Animal_title currentPage={currentPage} offset={offset} />
            <Swiper
                spaceBetween={0}
                slidesPerView={"auto"}
                onActiveIndexChange={(current) => {
                    setCurrentPage(current.activeIndex);
                }}
                onSlideChange={() => window.scrollTo(0, 0)}

                // onActiveIndexChange={(current) =>
                //     console.log(current.activeIndex)
                // }
                // onSwiper={(swiper) => console.log(swiper)}
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
                <SwiperSlide>
                    <Animal
                        title={Animal_data.monkey.title}
                        animal_quotes={Animal_data.monkey.animal_quotes}
                        animal_essay_top={Animal_data.monkey.animal_essay_top}
                        animal_essay_bot={Animal_data.monkey.animal_essay_bot}
                        animal_metrics={Animal_data.monkey.animal_metrics}
                        img={Animal_data.monkey.img}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Animal
                        title={Animal_data.giraffe.title}
                        animal_quotes={Animal_data.giraffe.animal_quotes}
                        animal_essay_top={Animal_data.giraffe.animal_essay_top}
                        animal_essay_bot={Animal_data.giraffe.animal_essay_bot}
                        animal_metrics={Animal_data.giraffe.animal_metrics}
                        img={Animal_data.giraffe.img}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Animal
                        title={Animal_data.crocodile.title}
                        animal_quotes={Animal_data.crocodile.animal_quotes}
                        animal_essay_top={
                            Animal_data.crocodile.animal_essay_top
                        }
                        animal_essay_bot={
                            Animal_data.crocodile.animal_essay_bot
                        }
                        animal_metrics={Animal_data.crocodile.animal_metrics}
                        img={Animal_data.crocodile.img}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Animal
                        title={Animal_data.toucan.title}
                        animal_quotes={Animal_data.toucan.animal_quotes}
                        animal_essay_top={Animal_data.toucan.animal_essay_top}
                        animal_essay_bot={Animal_data.toucan.animal_essay_bot}
                        animal_metrics={Animal_data.toucan.animal_metrics}
                        img={Animal_data.toucan.img}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default AnimalDetails;
