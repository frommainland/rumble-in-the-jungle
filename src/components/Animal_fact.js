import "./Animal_fact.css";
import Animal_img from "./Animal_img";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const Animal_fact = (props) => {
    return (
        <div className="animal-fact-wrapper">
            <Animal_img offset={props.offset} img={props.img} />
            <div className="animal-fact-text">
                <motion.h1
                style={{
                    color: `${props.color}`,
                }}
                >
                    {props.index}.
                </motion.h1>
                <p>{props.fact}</p>
            </div>
        </div>
    );
};

export default Animal_fact;
