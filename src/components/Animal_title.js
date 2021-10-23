import { motion } from "framer-motion";
import { useEffect, useState } from "react/cjs/react.development";
import "./Animal_title.css";

export default function Animal_title(props) {
    const smooth = [0.4, 0, 0, 1];
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

    // const string = Array.from(animalName_data[0]);

    // const [name, setName] = useState(string);

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
                    scale: props.offset > 50 ? 0.5 : 1,
                    originX: 0,
                    originY: 0,
                    transition: {
                        duration: 1,
                        ease: smooth,
                    },
                },
            }}
            initial="initial"
            animate="start"
            // staggerChildren not working, so put all divs in delay controls
            // transition={{
            //     staggerChildren: 0.1,
            // }}
        >
            {animalName.map((item, i) => (
                <motion.div
                    className="animal-title-item"
                    style={{
                        color: color[i%7],
                    }}
                    key={`${animalName}${i}`}
                    variants={{
                        initial: {
                            y: "12vw",
                        },
                        start: {
                            y: 0,
                            transition: {
                                duration: 0.35,
                                ease: [0.34, 0.3, 0.1, 1],
                                delay: 0.1 * i,
                            },
                        },
                    }}
                    onClick={() => console.log(`${name}${i}`)}
                >
                    {item}
                </motion.div>
            ))}
        </motion.div>
    );
}
