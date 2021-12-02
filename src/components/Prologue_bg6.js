import './Prologue_bg6.css'
import { motion, useTransform, useViewportScroll, useMotionTemplate } from 'framer-motion';
import { minBase, maxBase, dis } from './Prologue_bg5';

const Prologue_bg6 = () => {

    const { scrollXProgress, scrollX } = useViewportScroll();
    const bg3Scale = useTransform(scrollX, [minBase, maxBase + dis * 4], [1, 5]);
    const rotate = useTransform(scrollX, [10, 700], [0, 20]);
    const filter = useTransform(scrollX, [0, 700], [0, 20]);
    const bg3Filter = useMotionTemplate`blur(${filter}px)`;
    const Z = useTransform(scrollX, [maxBase + dis * 5 + 100, maxBase + dis * 7], [0, 200])
    const Opacity = useTransform(scrollX, [maxBase + dis * 4, maxBase + dis * 5], [0, 1])



    return (
        <div className='bgImgWrap-bg6'>
            <motion.div
                className='bgImgWrap-bg6-img'
                style={{
                    // rotate: rotate,
                    // filter: bg3Filter,
                    z: Z,
                    opacity: Opacity,
                }} />
        </div>
    )
}

export default Prologue_bg6