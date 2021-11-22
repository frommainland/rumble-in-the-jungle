import './Prologue_bg4.css'
import { motion, useTransform, useViewportScroll, useMotionTemplate } from 'framer-motion';

const Prologue_bg4 = () => {

    const { scrollXProgress, scrollX } = useViewportScroll();
    const rotate = useTransform(scrollX, [300, 600], [0, -20]);
    const filter = useTransform(scrollX, [200, 700], [1, 0]);
    const bg3Filter = useMotionTemplate`blur(${filter}px)`;
    const Z = useTransform(scrollX, [300, 600, 1000, 1600], [0, 40, 40, 150]);
    const opacity = useTransform(scrollX, [0, 1000, 1600], [1, 1, 0]);
    const background = useTransform(scrollX, [250, 300], ["rgba(0,0,0,0.3)", "rgba(0,0,0,0)"]);

    return (
        <div className='bgImgWrap-bg4'>
            <motion.div
                className='bgImgWrap-bg4-img'
                style={{
                    filter: bg3Filter,
                    rotate: rotate,
                    z: Z,
                    opacity: opacity
                }} />
            <motion.div
                className='bgImgWrap-bg4-mask'
                style={{
                    backgroundColor: background
                }}
            />
        </div>
    )
}

export default Prologue_bg4