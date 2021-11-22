import './Prologue_bg3.css'
import { motion, useTransform, useViewportScroll, useMotionTemplate } from 'framer-motion';

const Prologue_bg3 = () => {

    const { scrollXProgress, scrollX } = useViewportScroll();
    const rotate = useTransform(scrollX, [250, 550], [0, 10]);
    const filter = useTransform(scrollX, [250, 300, 500], [2, 0, 1]);
    const bg3Filter = useMotionTemplate`blur(${filter}px)`;
    const Z = useTransform(scrollX, [200, 550, 1000, 1600], [0, 120, 120, 200])
    const background = useTransform(scrollX, [250, 350], ["rgba(0,0,0,0.6)", "rgba(0,0,0,0)"]);
    const opacity = useTransform(scrollX, [250, 350], [0.6, 0]);


    return (
        <div className='bgImgWrap-bg3'>
            <motion.div
                className='bgImgWrap-bg3-img'
                style={{
                    rotate: rotate,
                    filter: bg3Filter,
                    z: Z,
                }} />
            <motion.div
                className='bgImgWrap-bg3-mask'
                style={{
                    // backgroundColor: background
                    opacity
                }}
            />
        </div>
    )
}

export default Prologue_bg3