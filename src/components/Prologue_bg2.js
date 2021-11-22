import './Prologue_bg2.css'
import { motion, useTransform, useViewportScroll, useMotionTemplate } from 'framer-motion';

const Prologue_bg2 = () => {

    const { scrollXProgress, scrollX } = useViewportScroll();
    const rotate = useTransform(scrollX, [100, 700], [0, 40]);
    const filter = useTransform(scrollX, [100, 200], [1, 0]);
    const bg3Filter = useMotionTemplate`blur(${filter}px)`;
    const Z = useTransform(scrollX, [100, 700], [0, 400])
    const background = useTransform(scrollX, [70, 150], ["rgba(0,0,0,0.3)", "rgba(0,0,0,0)"]);

    return (
        <div className='bgImgWrap-bg2'>
            <motion.div
                className='bgImgWrap-bg2-img'
                style={{
                    // scale: bg3Scale,
                    rotate: rotate,
                    filter: bg3Filter,
                    z: Z
                }} />
            <motion.div
                className='bgImgWrap-bg2-mask'
                style={{
                    backgroundColor: background
                }}
            />
        </div>
    )
}

export default Prologue_bg2