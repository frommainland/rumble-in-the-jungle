import React, { useState, useEffect } from "react";
import useInView from "react-cool-inview";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./Animal_metric.css";

const Animal_metric = (props) => {
    const smooth = [0.4, 0, 0, 1];
    const { observe, inView } = useInView({
        // Stop observe when the target enters the viewport, so the "inView" only triggered once
        unobserveOnEnter: true,
        // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
        // rootMargin: "0px 0px -20px 0px",
    });

    return (
        <div className="animal-metrics-item" ref={observe}>
            <motion.div className="animal-metric-item-number">
                <motion.p
                    initial={{
                        y: "4.4vw",
                    }}
                    animate={{
                        y: inView ? 0 : "5vw",
                        transition: {
                            ease: smooth,
                            duration: 0.4,
                            delay: props.index * 0.1,
                        },
                    }}
                >
                    {props.quantity}
                </motion.p>
                <div>
                    <motion.p
                        initial={{
                            y: "2vw",
                        }}
                        animate={{
                            y: inView ? 0 : "3vw",
                            transition: {
                                ease: smooth,
                                duration: 0.25,
                                delay: props.index * 0.1 + 0.1,
                            },
                        }}
                    >
                        {props.unit}
                    </motion.p>
                </div>
            </motion.div>
            <p>{props.prop}</p>
        </div>
    );
};

export default Animal_metric;
