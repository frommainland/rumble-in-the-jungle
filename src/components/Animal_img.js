import React, { useState, useEffect, useRef } from "react";
import useInView from "react-cool-inview";
import useWindowSize from "./useWindowSize";
import {
    motion,
    useViewportScroll,
    useTransform,
    useMotionTemplate,
    useMotionValue,
} from "framer-motion";
import "./Animal_img.css";
// import elephant from "../img/AnimalDetail-elephant1.png";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const Animal_img = (props) => {
    const { observe, inView } = useInView({
        // Stop observe when the target enters the viewport, so the "inView" only triggered once
        unobserveOnEnter: false,
        // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
        // rootMargin: "-50px",
    });

    const wrapperRef = useRef();

    const [scale, setScale] = useState();
    const [rotate, setRotate] = useState(0);
    const [boxTop, setBoxTop] = useState();

    useEffect(() => {
        setScale(getRandomInt(9, 10) / 10);
        setRotate(getRandomInt(-5, 5));
        setBoxTop(wrapperRef.current.getBoundingClientRect().y);
    }, []);

    const size = useWindowSize();
    const { scrollY } = useViewportScroll();
    const y = useTransform(scrollY, [boxTop, boxTop + size.height], [0, 50], {
        clamp: false,
    });

    return (
        <motion.div
            className="animal-img-wrapper"
            ref={wrapperRef}
            style={{
                rotate: rotate,
                scale: scale,
            }}
        >
            <motion.img
                src={props.img}
                className="animal-img-item"
                ref={observe}
                style={{
                    y: inView ? y : 0,
                }}
            />
        </motion.div>
    );
};

export default Animal_img;
