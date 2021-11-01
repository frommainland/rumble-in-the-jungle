import "./Animal_illustration.css";
import { motion } from "framer-motion";
import elephant from "../img/animal-elephant.svg";
import tiger from "../img/animal-tiger.svg";
import monkey from "../img/animal-monkey.svg";
import giraffe from "../img/animal-giraffe.svg";
import crocodile from "../img/animal-crocodile.svg";
import toucan from "../img/animal-toucan.svg";

const illustrations = [elephant, tiger, monkey, giraffe, crocodile, toucan];
const heights = [360, 350, 227, 495, 208, 211];

export default function Animal_illustration(props) {
    return (
        <motion.div
            className="animal-illustration"
            style={{
                backgroundImage: `url(${illustrations[props.index]})`,
                height: `${(heights[props.index] / 812) * 100}vw`,
            }}
        ></motion.div>
    );
}
