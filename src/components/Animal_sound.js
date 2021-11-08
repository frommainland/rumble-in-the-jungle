import "./Animal_sound.css";
import { motion } from "framer-motion";
import mp3 from "../sound/elephant1.mp3";
import { useRef, useEffect, useState } from "react";

export default function Animal_sound(props) {
    const offset = props.offset;
    const [startOffset, SetStartoffset] = useState(0);
    const pathRef = useRef();
    const svgRef = useRef();
    useEffect(() => {
        // console.log(pathRef.current.getTotalLength());
        // console.log(svgRef.current.getBoundingClientRect().y / window.innerHeight)
        SetStartoffset(pathRef.current.getTotalLength());
    }, [offset]);
    return (
        <div>
            <svg
                width="111"
                height="111"
                viewBox="0 0 111 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                ref={svgRef}
            >
                <path
                    d="M55.5 110C85.5995 110 110 85.5995 110 55.5C110 39.1234 102.778 24.4348 91.342 14.4429C90.7004 13.8823 90.0455 13.3365 89.3779 12.806C80.0759 5.41478 68.3049 1 55.5 1C25.4005 1 1 25.4005 1 55.5C1 85.5995 25.4005 110 55.5 110ZM55.5 111C86.1518 111 111 86.1518 111 55.5C111 38.8228 103.644 23.8636 92 13.6899C91.3467 13.119 90.6798 12.5633 90 12.0231C80.5275 4.49635 68.5388 0 55.5 0C24.8482 0 0 24.8482 0 55.5C0 86.1518 24.8482 111 55.5 111Z"
                    id="Text"
                    ref={pathRef}
                />
                <text
                    style={{
                        fill: "white",
                        fontFamily: "MagnatHead-ExtraBold",
                    }}
                >
                    <textPath href="#Text" startOffset={startOffset - 200}>
                        Elephant&emsp;Sound&emsp;Elephant&emsp;Sound
                    </textPath>
                </text>
            </svg>
        </div>
    );
}
