import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";
import Animal_img from "./Animal_img";
import Animal_metric from "./Animal_metric";
import Animal_quote from "./Animal_quote";
import Animal_illustration from "./Animal_illustration";
import Animal_sound from "./Animal_sound";
import Animal_fact from "./Animal_fact";

import "./Animal.css";

const Animal = (props) => {
    const smooth = [0.4, 0, 0, 1];
    const { scrollYProgress, scrollY } = useViewportScroll();

    // test
    // const [currentY, setCurrentY] = useState(0);
    // useEffect(() => {
    //     const unsubscribeY = scrollY.onChange((v) => setCurrentY(v.toFixed()));
    //     return () => {
    //         unsubscribeY();
    //     };
    // });
    // const testY = useTransform(scrollY, [0, 100], [0, 100], { clamp: false });
    // test

    const { width, height } = useWindowDimensions()

    // text title anim
    const [titleAnim, setTitleAnim] = useState(false);
    const titleY = useTransform(scrollY, [0, 100, 200], [0, 0, 100], {
        clamp: false,
    });
    const scaleY = useTransform(scrollY, [0, 100, 200], [1, 1, 0.5]);

    useEffect(() => {
        scrollY.onChange((value) => {
            if (value >= width / 10) {
                setTitleAnim(true);
            } else {
                setTitleAnim(false);
            }
        });
    }, [scrollY]);


    // animal audio 
    // const [animalOnPlay, setAnimalOnPlay] = useState('')

    return (
        <div className="animal-wrap">
            <Animal_quote animal_quotes={props.animal_quotes} />

            <Animal_illustration index={props.index} />

            <section className="animal-metrics">
                <Animal_metric
                    quantity={props.animal_metrics.left.quantity}
                    unit={props.animal_metrics.left.unit}
                    prop={props.animal_metrics.left.prop}
                    index={0}
                />
                <Animal_metric
                    quantity={props.animal_metrics.middle.quantity}
                    unit={props.animal_metrics.middle.unit}
                    prop={props.animal_metrics.middle.prop}
                    index={1}
                />
                <Animal_metric
                    quantity={props.animal_metrics.right.quantity}
                    unit={props.animal_metrics.right.unit}
                    prop={props.animal_metrics.right.prop}
                    index={2}
                />
            </section>

            <section className="animal-fact">
                <Animal_fact
                    offset={props.offset}
                    img={props.img.img1}
                    index={1}
                    fact={props.fact.fact1}
                    color={props.color}
                />
                <Animal_fact
                    offset={props.offset}
                    img={props.img.img2}
                    index={2}
                    fact={props.fact.fact2}
                    color={props.color}
                />
                <Animal_fact
                    offset={props.offset}
                    img={props.img.img3}
                    index={3}
                    fact={props.fact.fact3}
                    color={props.color}
                />
            </section>

            <Animal_sound color={props.color} sound={props.sound} title={props.title} audio={props.audio} getAnimalAudioName={props.getAnimalAudioName} />
        </div>
    );
};

export default Animal;
