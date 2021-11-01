import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";
import Animal_img from "./Animal_img";
import Animal_metric from "./Animal_metric";
import Animal_quote from "./Animal_quote";
import Animal_illustration from "./Animal_illustration";

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

    return (
        <div className="animal-wrap">

            <Animal_quote animal_quotes={props.animal_quotes} />

            <Animal_illustration index={props.index}/>

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
