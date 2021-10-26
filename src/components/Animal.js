import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";
import Animal_img from "./Animal_img";
import Animal_metric from "./Animal_metric";
import Animal_kidRead from "./Animal_kidRead";

import "./Animal.css";

const Animal = (props) => {
    const smooth = [0.4, 0, 0, 1];
    const { scrollYProgress, scrollY } = useViewportScroll();

    // test
    const [currentY, setCurrentY] = useState(0);
    useEffect(() => {
        const unsubscribeY = scrollY.onChange((v) => setCurrentY(v.toFixed()));
        return () => {
            unsubscribeY();
        };
    });
    const testY = useTransform(scrollY, [0, 100], [0, 100], { clamp: false });
    // test

    const size = useWindowSize();

    // text title anim
    const [titleAnim, setTitleAnim] = useState(false);
    const titleY = useTransform(scrollY, [0, 100, 200], [0, 0, 100], {
        clamp: false,
    });
    const scaleY = useTransform(scrollY, [0, 100, 200], [1, 1, 0.5]);

    useEffect(() => {
        scrollY.onChange((value) => {
            if (value >= size.width / 10) {
                setTitleAnim(true);
            } else {
                setTitleAnim(false);
            }
        });
    }, [scrollY]);

    // animal-images-item anim test

    return (
        <div className="animal-wrap">
            {/* show scrollY num */}
            {/* <motion.section
                style={{
                    position: "absolute",
                    color: "red",
                    top: testY,
                    left: 0,
                }}
            >
                {currentY}
            </motion.section> */}

            <motion.h1
                className="animal-title"
                style={{
                    top: titleY,
                    scale: scaleY,
                }}
            >
                {props.title}
            </motion.h1>

            

            <p className="animal-quotes">{props.animal_quotes}</p>

            {/* kid read animal-quotes with sound*/}
            <Animal_kidRead />

            <div className="animal-illustration"></div>

            <section className="animal-metrics">
                <Animal_metric
                    quantity={props.animal_metrics.left.quantity}
                    unit={props.animal_metrics.left.unit}
                    prop={props.animal_metrics.left.prop}
                />
                <Animal_metric
                    quantity={props.animal_metrics.middle.quantity}
                    unit={props.animal_metrics.middle.unit}
                    prop={props.animal_metrics.middle.prop}
                />
                <Animal_metric
                    quantity={props.animal_metrics.right.quantity}
                    unit={props.animal_metrics.right.unit}
                    prop={props.animal_metrics.right.prop}
                />
            </section>

            <section className="animal-essay">{props.animal_essay_top}</section>

            <div className="animal-images">
                <Animal_img name={props.img.img1} />
                <Animal_img name={props.img.img2} />
                <Animal_img name={props.img.img3} />
            </div>

            <section className="animal-essay">{props.animal_essay_bot}</section>

            <section className="animal-sound">
                <div></div>
                <p>What does elephant sound like?</p>
            </section>
        </div>
    );
};

export default Animal;
