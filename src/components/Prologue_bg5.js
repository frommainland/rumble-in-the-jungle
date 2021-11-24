import './Prologue_bg5.css'
import { motion, useTransform, useViewportScroll, useMotionTemplate, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';

const Prologue_bg5 = () => {

    const { scrollXProgress, scrollX } = useViewportScroll();
    const rotate = useTransform(scrollX, [300, 600], [0, -20]);
    const filter = useTransform(scrollX, [200, 700], [1, 0]);
    const bg3Filter = useMotionTemplate`blur(${filter}px)`;
    const Z = useTransform(scrollX, [300, 600], [0, 40])
    const background = useTransform(scrollX, [250, 300], ["rgba(0,0,0,0.3)", "rgba(0,0,0,0)"]);


    const minBase = 1500
    const maxBase = 2000
    const dis = 200

    const [eye1Anim, setEye1Anim] = useState(false)
    const [eye2Anim, setEye2Anim] = useState(false)
    const [eye3Anim, setEye3Anim] = useState(false)
    const [eye4Anim, setEye4Anim] = useState(false)
    const [eye5Anim, setEye5Anim] = useState(false)

    useEffect(() => {
        scrollX.onChange((v) => {
            if (v > minBase && v < maxBase) {
                setEye1Anim(true)
            } else {
                setEye1Anim(false)
            }
        });
        scrollX.onChange((v) => {
            if (v > minBase + dis && v < maxBase + dis) {
                setEye2Anim(true)
            } else {
                setEye2Anim(false)
            }
        });
        scrollX.onChange((v) => {
            if (v > minBase + dis * 2 && v < maxBase + dis * 2) {
                setEye3Anim(true)
            } else {
                setEye3Anim(false)
            }
        });
        scrollX.onChange((v) => {
            if (v > minBase + dis * 3 && v < maxBase + dis * 3) {
                setEye4Anim(true)
            } else {
                setEye4Anim(false)
            }
        });
        scrollX.onChange((v) => {
            if (v > minBase + dis * 4 && v < maxBase + dis * 4) {
                setEye5Anim(true)
            } else {
                setEye5Anim(false)
            }
        });
    }, [scrollX]);

    const initial = {
        scale: 0
    }
    const show = {
        scale: eye1Anim ? 1 : 0,
    }

    return (
        <div className='bgImgWrap-bg5'>
            <motion.div className={`bgImgWrap-bg5-eye1 ${eye1Anim ? 'blink' : ''}`}
                initial={initial}
                animate={show}
            />

            <motion.div className={`bgImgWrap-bg5-eye2 ${eye3Anim ? 'blink delay1' : ''}`}
                initial={initial}
                animate={{ scale: eye3Anim ? 1 : 0 }} />

            <motion.div className='bgImgWrap-bg5-eye3-wrap'
                initial={initial}
                animate={{ scale: eye5Anim ? 1 : 0 }}>
                <div className={`bgImgWrap-bg5-eye3 ${eye5Anim ? 'blink delay2' : ''}`} />
                <div className={`bgImgWrap-bg5-eye3 ${eye5Anim ? 'blink delay2 delay-2' : ''}`} />
            </motion.div>

            <motion.div className='bgImgWrap-bg5-eye4-wrap'
                initial={initial}
                animate={{ scale: eye4Anim ? 1 : 0 }}>
                <div className={`bgImgWrap-bg5-eye4 ${eye4Anim ? 'blink delay3' : ''}`} />
                <div className={`bgImgWrap-bg5-eye4 ${eye4Anim ? 'blink delay3' : ''}`} />
            </motion.div>

            <motion.div className='bgImgWrap-bg5-eye5-wrap'
                initial={initial}
                animate={{ scale: eye2Anim ? 1 : 0 }}>
                <div className={`bgImgWrap-bg5-eye5 ${eye2Anim ? 'blink delay4' : ''}`} />
                <div className={`bgImgWrap-bg5-eye5 ${eye2Anim ? 'blink delay4' : ''}`} />
            </motion.div>

            {/* <motion.div
                className='bgImgWrap-bg5-mask'
                style={{
                    backgroundColor: background
                }}
            /> */}
        </div>
    )
}

export default Prologue_bg5