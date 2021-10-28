import React, { useState, useEffect } from "react";
import useInView from "react-cool-inview";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./Animal_img.css";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const Animal_img = (props) => {
    const smooth = [0.4, 0, 0, 1];
    const { observe, inView } = useInView({
        // Stop observe when the target enters the viewport, so the "inView" only triggered once
        unobserveOnEnter: false,
        // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
        rootMargin: "-100px 0px",
    });

    const [scale, setScale] = useState();
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        setScale(getRandomInt(7, 9) / 10);
        setRotate(getRandomInt(-5, 5));
    }, []);
    
    return (
        <motion.img
            src={props.name}
            className="animal-images-item"
            animate={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : scale,
                rotate: rotate,
            }}
            transition={{
                ease: smooth,
                duration: inView ? 0.75 : 2,
            }}
            ref={observe}
        />
    );
};

export default Animal_img;
