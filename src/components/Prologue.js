import {
    motion,
    useViewportScroll,
    useTransform,
    useMotionTemplate,
} from "framer-motion";
import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";
import "../font.css";
import "./Prologue.css";
import bg1a from "../img/prologueBg1a.svg";
import bg1b from "../img/prologueBg1b.svg";
import bg2 from "../img/prologueBg2.svg";
import bg3 from "../img/prologueBg3.svg";

import Prologue_title from './Prologue_title'
import Prologue_title2nd from './Prologue_title2nd'

export default function Prologue() {
    const size = useWindowSize();
    const smooth = [0.4, 0, 0, 1]
    const { scrollXProgress, scrollX } = useViewportScroll();

    const [currentX, setCurrentX] = useState(0);

    // bg3 anim
    const bg3Scale = useTransform(scrollX, [0, 700], [1, 5]);
    const rotate = useTransform(scrollX, [0, 700], [1, 40]);
    const filter = useTransform(scrollX, [0, 700], [0, 20]);
    const bg3Filter = useMotionTemplate`blur(${filter}px)`;

    // bg2 anim
    const bg2Scale = useTransform(scrollX, [0, 900], [1, 5], { clamp: false });
    const bg2Rotate = useTransform(scrollX, [0, 900], [1, 60]);
    const filter2 = useTransform(scrollX, [0, 200, 700], [0, 0, 1]);
    const bg2Filter = useMotionTemplate`blur(${filter2}px)`;
    const bg2MaskOpacity = useTransform(scrollX, [0, 900], [0.3, 0]);

    // bg1 anim
    const bg1AScale = useTransform(scrollX, [0, 100, 900], [0.5, 0.5, 2.2]);
    const bg1BScale = useTransform(scrollX, [0, 900], [0.3, 2]);
    const bg1Opacity = useTransform(scrollX, [0, 900], [0, 1]);
    const bg1Left = useTransform(scrollX, [0, 400], [0, 200]);
    const bg1MaskOpacity = useTransform(scrollX, [0, 200, 900], [0.8, 0.3, 0]);
    const bg1Arotate = useTransform(scrollX, [0, 300, 900], [0, 0, 60]);
    const bg1Brotate = useTransform(scrollX, [0, 300, 900], [0, 0, 60]);

    // text anim
    const textScale = useTransform(scrollX, [0, 400], [1, 20]);
    const textLeft = useTransform(scrollX, [0, 400], [0, 400], {
        clamp: false,
    });

    // text 'good studio presents' anim, based on scrollx to trigger anim
    const [text2Anim, setText2Anim] = useState(false)

    useEffect(() => {
        const unsubscribeX = scrollX.onChange((v) => setCurrentX(v.toFixed()));
        return () => {
            unsubscribeX();
        };
    });

    useEffect(() => {
        scrollX.onChange((value) => {
            if (value >= 600) {
                setText2Anim(true)
            } else {
                setText2Anim(false)
            }
        });
    }, [scrollX]);


    return (
        <div>
            {/* bg1 */}
            {/* <div className="bgImgWrap">
                <motion.div
                    className="bg1"
                    style={{
                        width: "134vw",
                        height: "175vh",
                        backgroundImage: `url(${bg1a})`,
                        backgroundSize: "auto auto",
                        position: "absolute",
                        left: "-15%",
                        top: "-35%",
                        scale: bg1AScale,
                        rotate: bg1Arotate,
                    }}
                />
                <motion.div
                    className="bg1"
                    style={{
                        width: "134vw",
                        height: "175vh",
                        backgroundImage: `url(${bg1b})`,
                        backgroundSize: "auto auto",
                        position: "absolute",
                        left: "-15%",
                        top: "-35%",
                        scale: bg1BScale,
                        rotate: bg1Brotate,
                    }}
                />
                <motion.div
                    className="bg1Mask"
                    style={{
                        width: "100%",
                        height: "100%",
                        background: "black",
                        opacity: bg1MaskOpacity,
                        position: "absolute",
                        left: 0,
                        top: 0,
                    }}
                />
            </div> */}

            {/* bg2 */}
            {/* <motion.div className="bgImgWrap">
                <motion.div
                    className="bg2"
                    style={{
                        width: "120vw",
                        height: "150vh",
                        backgroundImage: `url(${bg2})`,
                        backgroundSize: "cover",
                        position: "absolute",
                        left: "-9%",
                        top: "-28%",
                        scale: bg2Scale,
                        rotate: bg2Rotate,
                        filter: bg2Filter,
                    }}
                />
                <motion.div
                    className="bg2Mask"
                    style={{
                        width: "100%",
                        height: "100%",
                        background: "black",
                        opacity: bg2MaskOpacity,
                        position: "absolute",
                        left: 0,
                        top: 0,
                    }}
                />
            </motion.div> */}

            {/* bg3 */}
            {/* <div className="bgImgWrap">
                <motion.div
                    className="bg3"
                    style={{
                        width: "100vw",
                        height: "100vh",
                        backgroundImage: `url(${bg3})`,
                        backgroundSize: "cover",
                        position: "absolute",
                        left: 0,
                        top: 0,
                        scale: bg3Scale,
                        rotate: rotate,
                        filter: bg3Filter,
                    }}
                />
            </div> */}

            {/* rumble in jungle text */}
            {/* <Prologue_title textScale={textScale} /> */}

            {/* good studio presents text */}
            <Prologue_title2nd />
            <motion.div
                className='text-2ndTitle'
                initial={{
                    opacity: 0,
                    scale: 0.8
                }}
                animate={{
                    opacity: text2Anim ? 1 : 0,
                    scale: text2Anim ? 1 : 0.8,
                }}
                transition={{
                    ease: smooth,
                    duration: 2,
                }}
            >
                <p>Good studio</p>
                <p>presents</p>
            </motion.div>



            {/* scrollX text output test */}
            <h1
                style={{
                    position: "fixed",
                    color: "red",
                    fontSize: 16,
                }}
            >
                {currentX} - window.width {size.width}
            </h1>
            <div style={{
                height: 10,
                width: '400vw'
            }}></div>

        </div >
    );
}
