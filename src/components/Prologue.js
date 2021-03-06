import {
    motion,
    useViewportScroll,
    useTransform,
    AnimatePresence
} from "framer-motion";
import { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";
import "../font.css";
import "./Prologue.css";

import SwiperIndicator from "./SwiperIndicator";
import Prologue_title from './Prologue_title'
import Prologue_title2nd from './Prologue_title2nd'

// lower bg number means index num is higer, closer to title text, earlier to anim
import Prologue_bg1 from "./Prologue_bg1";
import Prologue_bg2 from "./Prologue_bg2";
import Prologue_bg3 from "./Prologue_bg3";
import Prologue_bg4 from "./Prologue_bg4";
import Prologue_bg5 from "./Prologue_bg5";
import Prologue_bg6 from "./Prologue_bg6";
import { prologueEndDis } from "./Prologue_bg5";

import { map } from "./mathUtils";


export default function Prologue(props) {
    const { width, height } = useWindowDimensions()
    const smooth = [0.4, 0, 0, 1]
    const { scrollX } = useViewportScroll();

    // get the currentx 
    const [currentX, setCurrentX] = useState(0);
    useEffect(() => {
        const unsubscribeX = scrollX.onChange((v) => setCurrentX(v.toFixed()));
        return () => {
            unsubscribeX();
        };
    });

    // text 'rumble in the jungle' anim
    const textScale = useTransform(scrollX, [0, 250], [1, 32]);
    const opacity = useTransform(scrollX, [0, 250, 350], [1, 1, 0]);


    // text 'good studio presents' anim, based on scrollx to trigger anim
    const [text2Anim, setText2Anim] = useState(false)

    useEffect(() => {
        scrollX.onChange((value) => {
            if (value >= 600 && value <= 1000) {
                setText2Anim(true)
            } else {
                setText2Anim(false)
            }
        });
    }, [scrollX]);


    const scrollDis = map(7 * height, prologueEndDis + 400, prologueEndDis + 7 * height, 0, -7 * height * 1.4)


    return (

        <div className='prologueWrap'>

            {/* dark leaves */}
            <Prologue_bg6 />


            {/* bg5 blink eyes */}
            <Prologue_bg5 />

            <Prologue_bg4 />
            <Prologue_bg3 />
            <Prologue_bg2 />
            <Prologue_bg1 />

            {/* rumble in jungle text */}
            <Prologue_title textScale={textScale} opacity={opacity} />

            {/* subtitle - There???s a rumble in the... text */}
            <Prologue_title2nd text2Anim={text2Anim} />

            <div className='prologueSectionPadding'
                style={{
                    width: prologueEndDis + 7 * height
                }}></div>

            {/* hint user to swiper right */}
            {/* <SwiperIndicator currentX={currentX} /> */}

        </div>
    );
}
