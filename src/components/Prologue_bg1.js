import './Prologue_bg1.css'
import { motion, useTransform, useViewportScroll, useMotionTemplate } from 'framer-motion';

const Prologue_bg1 = () => {

    const { scrollXProgress, scrollX } = useViewportScroll();
    const bg3Scale = useTransform(scrollX, [0, 700], [1, 5]);
    const rotate = useTransform(scrollX, [10, 700], [0, 20]);
    const filter = useTransform(scrollX, [0, 700], [0, 20]);
    const bg3Filter = useMotionTemplate`blur(${filter}px)`;
    const Z = useTransform(scrollX, [10, 700], [0, 400])
    const translateZ = useMotionTemplate`translateZ(${Z}px)`

    console.log(Z)
    return (
        <div className='bgImgWrap-bg1'>
            <motion.div
                className='bgImgWrap-bg1-img'
                style={{
                    // scale: bg3Scale,
                    rotate: rotate,
                    // filter: bg3Filter,
                    z: Z
                }} />
        </div>
    )
}

export default Prologue_bg1