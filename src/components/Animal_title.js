import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./Animal_title.css";

export default function Animal_title(props) {
    const smooth = [0.4, 0, 0, 1];

    //reverse cubic-bezier
    // from
    // x1, y1, x2, y2
    // to
    // (1 - x2), (1 - y2), (1 - x1), (1 - y1)

    const smooth_reverse = [1 - 0, 1 - 1, 1 - 0.4, 1 - 0];

    const animalName_data = [
        "Elephant",
        "Tiger",
        "Monkey",
        "Giraffe",
        "Crocodile",
        "Toucan",
    ];

    const color = [
        "#FCD342",
        "#ED93ED",
        "#EB3136",
        "#1C60E3",
        "#FFFFFF",
        "#5BC07E",
        "#FA5F1D",
    ];

    const [anim, setAnim] = useState(false);

    useEffect(() => {
        setAnim(props.offset > 50 ? true : false);
    }, [props.offset]);

    // const string = Array.from(animalName_data[0]);

    // const [name, setName] = useState(string);
    // console.log(name)

    let animalName = Array.from(animalName_data[props.currentPage]);

    // useEffect(() => {
    //     setName(animalName);
    // }, [props.currentPage]);

    return (
        <motion.div
            className="animal-title-wrap"
            variants={{
                initial: {},
                start: {
                    scale: anim ? 0.6 : 1,
                    transition: {
                        duration: 0.3,
                        ease: anim ? smooth : smooth_reverse,
                    },
                },
            }}
            style={{
                originX: 0,
                originY: 0,
            }}
            initial="initial"
            animate="start"
            // staggerChildren not working, so put all divs in delay controls
            // transition={{
            //     staggerChildren: 0.1,
            // }}
        >
            <AnimatePresence>
                {animalName.map((item, i) => (
                    <motion.div
                        className="animal-title-item"
                        style={{
                            color: color[i % 7],
                        }}
                        key={`${animalName}${i}`}
                        variants={{
                            initial: {
                                y: "13vw",
                            },
                            start: {
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: smooth,
                                    delay:
                                        0.05 * i +
                                        animalName.length * 0.05 +
                                        0.45,
                                },
                            },
                        }}
                        onClick={() => console.log(`${animalName}${i}`)}
                        exit={{
                            y: "13vw",
                            transition: {
                                delay: 0.05 * i,
                                ease: smooth_reverse,
                            },
                        }}
                    >
                        {item}
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
}
