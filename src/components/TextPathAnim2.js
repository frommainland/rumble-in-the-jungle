import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import './TextPathAnim.css'
import useInView from "react-cool-inview";
import useWindowSize from './useWindowSize';
import { useScrollData } from "scroll-data-hook";
import useWindowDimensions from './useWindowDimensions';


const map = (x, a, b, c, d, clamp) => {
    const map_result = (x - a) * (d - c) / (b - a) + c;
    if (clamp) {
        const clamp_result = Math.max(Math.min(map_result, Math.max(a, b)), Math.min(a, b));
        return clamp_result
    }

    return map_result;
}

const color = [
    "#FCD342",
    "#ED93ED",
    "#EB3136",
    "#1C60E3",
    "#FFFFFF",
    "#5BC07E",
    "#FA5F1D",
];


const TextPathAnim2 = (props) => {

    const { speed } = useScrollData()

    const svgBlur = map(speed.x, 0, 1800, 0, 6)

    const size = useWindowSize();
    const { height } = useWindowDimensions()
    const [currentX, setCurrentX] = useState(0);
    const { scrollXProgress, scrollX } = useViewportScroll();
    useEffect(() => {
        const unsubscribeX = scrollX.onChange((v) => setCurrentX(v.toFixed()));
        return () => {
            unsubscribeX();
        };
    });


    const [pathLength, SetPathLength] = useState();
    const pathRef = useRef();
    const svgWrap = useRef()

    const [boxLeft, setBoxLeft] = useState()

    useEffect(() => {
        // console.log(svgRef.current.getBoundingClientRect().y / window.innerHeight)
        SetPathLength(pathRef.current.getTotalLength());
        setBoxLeft(svgWrap.current.getBoundingClientRect().x)
    }, []);


    // const calStartOffset = boxLeft > size.width ? currentX - (boxLeft - size.width) : currentX
    const calStartOffset = map(props.x.current, 0, -height * 7 * 1.2 / 8, pathLength, 0)


    const fontScale = map(calStartOffset, 0, pathLength, 1, 32, true)
    const letterSpacing = map(calStartOffset, 0, pathLength, 2, 0)
    const { observe, inView } = useInView({
        // Stop observe when the target enters the viewport, so the "inView" only triggered once
        unobserveOnEnter: false,
        // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
        // rootMargin: "0px 0px 0px -40px",
    });

    return (
        <motion.div className="svg-hiss" ref={svgWrap} style={{
            x: props.x,
            top: props.top,
            left: '50vw'
        }}>
        
            <svg ref={observe} viewBox="0 -50 482 297" fill="none" xmlns="http://www.w3.org/2000/svg">
                <filter id="f1">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={svgBlur} />
                </filter>
                <path id="text-hiss2" ref={pathRef} d="M1 17.0003C149 -20.333 452.2 -16.7997 481 296" stroke="none" />

                {/* ------filter blur causes performance issue----------- */}
                {/* <text filter="url(#f1)" fontSize={`${inView ? fontScale / size.height * 100 : 0}vh`} fill={props.color}>
                    <textPath startOffset={calStartOffset} href="#text-hiss">
                        Walking in the jungle. Walking in the jungle <tspan fontSize="30">Hiss</tspan> Hiss
                    </textPath>
                </text> */}

                <text fill={props.color}>
                    <textPath startOffset={inView ? calStartOffset : 0} href="#text-hiss2" fontSize={inView ? fontScale * props.fontScaleFactor : 0} letterSpacing={props.letterSpacing}>
                        {props.text}
                    </textPath>
                </text>
            </svg>

            {/* test for item inView */}
            {/* <h1 style={{ position: 'fixed', zIndex: 100, top: 100, left: 100, color: 'white' }}>{inView ? 'yes' : 'no'}</h1> */}

        </motion.div>
    )
}

export default TextPathAnim2

