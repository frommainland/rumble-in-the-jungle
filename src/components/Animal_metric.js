import React, { useState, useEffect } from "react";
import useInView from "react-cool-inview";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./Animal_metric.css";

const Animal_metric = (props) => {
    const smooth = [0.4, 0, 0, 1];
    const { observe, inView } = useInView({
        // Stop observe when the target enters the viewport, so the "inView" only triggered once
        unobserveOnEnter: false,
        // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
        rootMargin: "-100px 0px",
    });

    return (
        <div className="animal-metrics-item">
            <div className="animal-metric-item-number">
                <div>{props.quantity}</div>
                <div>{props.unit}</div>
            </div>
            <p>{props.prop}</p>
        </div>
    );
};

export default Animal_metric;
