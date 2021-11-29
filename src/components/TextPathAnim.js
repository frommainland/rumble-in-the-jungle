import { useState, useRef, useEffect } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import './TextPathAnim.css'
import useInView from "react-cool-inview";
import useWindowSize from './useWindowSize';
import { useScrollData } from "scroll-data-hook";

// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

const color = [
    "#FCD342",
    "#ED93ED",
    "#EB3136",
    "#1C60E3",
    "#FFFFFF",
    "#5BC07E",
    "#FA5F1D",
];


const TextPathAnim = (props) => {

    const { speed } = useScrollData()

    const svgBlur = map(speed.x, 0, 1800, 0, 6)

    const size = useWindowSize();
    const [currentX, setCurrentX] = useState(0);
    const { scrollXProgress, scrollX } = useViewportScroll();
    useEffect(() => {
        // const unsubscribeX = scrollX.onChange((v) => setCurrentX(v.toFixed()));
        const unsubscribeX = scrollX.onChange((v) => setCurrentX(v));
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



    const calStartOffset = boxLeft > size.width ? currentX - (boxLeft - size.width) : currentX

    // const fontScale = map(currentX - (boxLeft - size.width), 0, pathLength, 5, 16) * 2

    const fontScale = map(calStartOffset, 0, pathLength, 5, 16) * 2

    useEffect(() => {
        requestAnimationFrame(() => smoothScrollingHandler());
    }, []);

    const smoothScrollingHandler = () => {
        // Recursive call
        requestAnimationFrame(() => smoothScrollingHandler());
    };


    const { observe, inView } = useInView({
        // Stop observe when the target enters the viewport, so the "inView" only triggered once
        unobserveOnEnter: false,
        // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
        // rootMargin: "-50px",
    });


    //     <svg width="616" height="367" viewBox="0 0 616 367" fill="none" xmlns="http://www.w3.org/2000/svg">
    // <path d="M1 367C129.9 366.2 263.9 334.3 362.6 247.3C410.9 209.3 468.2 114.6 403.2 67.7C371.5 50.9 325.4 55.3 302.5 84C280 112.3 277.5 165.7 303.2 192.8C319.4 209.9 348.7 213.8 371 214.3C401.5 215.1 432.2 208.5 460.8 198.3C468.3 195.6 475.7 192.6 483 189.4C557.4 154.9 602.1 79.8 615 1" stroke="black"/>
    // </svg>




    return (
        <div className="svg-hiss" ref={svgWrap} >
            <svg ref={observe} viewBox="0 0 616 367" fill="none" xmlns="http://www.w3.org/2000/svg">
                <filter id="f1">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={svgBlur} />
                </filter>
                <path id="text-hiss" ref={pathRef} d="M1 367C129.9 366.2 263.9 334.3 362.6 247.3C410.9 209.3 468.2 114.6 403.2 67.7C371.5 50.9 325.4 55.3 302.5 84C280 112.3 277.5 165.7 303.2 192.8C319.4 209.9 348.7 213.8 371 214.3C401.5 215.1 432.2 208.5 460.8 198.3C468.3 195.6 475.7 192.6 483 189.4C557.4 154.9 602.1 79.8 615 1" stroke="none" />
                <text filter="url(#f1)" fontSize={`${inView ? fontScale / size.height * 100 : 0}vh`} fill={props.color}>
                    <textPath startOffset={inView ? calStartOffset : 0} href="#text-hiss">Hiss <tspan fontSize="30">Hiss</tspan> Hiss</textPath>
                </text>
            </svg>

            {/* test for item inView */}
            {/* <h1 style={{ position: 'fixed', zIndex: 100 }}>{inView ? 'yes' : 'no'}</h1> */}

        </div>
    )
}

export default TextPathAnim




