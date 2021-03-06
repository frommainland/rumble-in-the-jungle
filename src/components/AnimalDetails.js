// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import useWindowDimensions from "./useWindowDimensions";

// Import Swiper styles
// import 'swiper/swiper.scss';
import "./swiper-bundle.css";
import "./AnimalDetails.css";
import Animal_data from "./Animal_data";
import Animal_title from "./Animal_title";
import Animal from "./Animal";
import React, { useEffect, useState } from "react";
import { prologueEndDis } from "./Prologue_bg5";
import Animal_end from "./Animal_end";

const AnimalDetails = (props) => {
    const { width, height } = useWindowDimensions()

    const [currentPage, setCurrentPage] = useState(0);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // only one sound could be played at a time, get the current animal name which is playing
    const [animalAudioName, setAnimalAudioName] = useState(1)


    return (
        <motion.div
            className='animalDetails-wrap'
            key='AnimalDetails'
        >

            {/* animal title */}
            <Animal_title currentPage={currentPage} offset={offset} status={props.status} />

            <Swiper
                spaceBetween={0}
                slidesPerView={"auto"}
                autoHeight={true}
                onSlideChange={scrollToTop}
                onSlideChangeTransitionEnd={(e) => {
                    setCurrentPage(e.activeIndex)
                    props.sendCurrentPage(e.activeIndex)
                }}

            // onActiveIndexChange={(current) => {
            //     setCurrentPage(current.activeIndex);
            // }}
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
                        index={0}
                        offset={offset}
                        fact={Animal_data.elephant.animal_fact}
                        color={Animal_data.elephant.color}
                        sound={Animal_data.elephant.sound}
                        audio={Animal_data.elephant.audio}
                        getAnimalAudioName={setAnimalAudioName}
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
                        index={1}
                        offset={offset}
                        fact={Animal_data.tiger.animal_fact}
                        color={Animal_data.tiger.color}
                        sound={Animal_data.tiger.sound}
                        audio={Animal_data.tiger.audio}
                        getAnimalAudioName={setAnimalAudioName}

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
                        index={2}
                        offset={offset}
                        fact={Animal_data.monkey.animal_fact}
                        color={Animal_data.monkey.color}
                        sound={Animal_data.monkey.sound}
                        audio={Animal_data.monkey.audio}
                        getAnimalAudioName={setAnimalAudioName}

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
                        index={3}
                        offset={offset}
                        fact={Animal_data.giraffe.animal_fact}
                        color={Animal_data.giraffe.color}
                        sound={Animal_data.giraffe.sound}
                        audio={Animal_data.giraffe.audio}
                        getAnimalAudioName={setAnimalAudioName}

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
                        index={4}
                        offset={offset}
                        fact={Animal_data.crocodile.animal_fact}
                        color={Animal_data.crocodile.color}
                        sound={Animal_data.crocodile.sound}
                        audio={Animal_data.crocodile.audio}
                        getAnimalAudioName={setAnimalAudioName}

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
                        index={5}
                        offset={offset}
                        fact={Animal_data.toucan.animal_fact}
                        color={Animal_data.toucan.color}
                        sound={Animal_data.toucan.sound}
                        audio={Animal_data.toucan.audio}
                        getAnimalAudioName={setAnimalAudioName}

                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Animal_end current={currentPage} index={6} />
                </SwiperSlide>
            </Swiper>
        </motion.div>
    );
};

export default AnimalDetails;
