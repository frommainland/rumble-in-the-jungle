import { motion, useViewportScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useEffect, useState } from "react";
import '../font.css'
import './Prologue.css'
import bg1 from '../img/prologueBg1.svg'
import bg2 from '../img/prologueBg2.svg'
import bg3 from '../img/prologueBg3.svg'


export default function Prologue() {

    const { scrollXProgress, scrollX } = useViewportScroll();

    const [currentX, setCurrentX] = useState(0)

    // bg3 anim
    const bg3Scale = useTransform(scrollX, [0, 700], [1, 5])
    const rotate = useTransform(scrollX, [0, 700], [1, 40])
    const filter = useTransform(scrollX, [0, 700], [0, 20])
    const bg3Filter = useMotionTemplate`blur(${filter}px)`

    // bg2 anim
    const bg2Scale = useTransform(scrollX, [0, 900], [1, 3])
    const bg2Opacity = useTransform(scrollX, [0, 900], [.6, 1])
    const bg2Rotate = useTransform(scrollX, [0, 900], [1, 60])
    const filter2 = useTransform(scrollX, [0, 200, 700], [0, 0, 1])
    const bg2Filter = useMotionTemplate`blur(${filter2}px)`

    // bg1 anim
    const bg1Scale = useTransform(scrollX, [0, 400], [.7, 2])
    const bg1Opacity = useTransform(scrollX, [0, 900], [0, 1])
    const bg1Left = useTransform(scrollX, [0, 400], [0, 200])

    // text anim
    const textScale = useTransform(scrollX, [0, 400], [1, 25])
    const textLeft = useTransform(scrollX, [0, 400], [0, 400], { clamp: false })


    useEffect(() => {
        const unsubscribeX = scrollX.onChange((v) => setCurrentX(v.toFixed()))
        return () => {
            unsubscribeX()
        }
    })

    return (
        <div>
            {/* bg1 */}
            {/* <div className='bgImgWrap'>
                <motion.div
                    className='bg1'
                    style={{
                        width: '118vw',
                        height: '142vh',
                        backgroundImage: `url(${bg1})`,
                        backgroundSize: 'auto auto',
                        position: 'absolute',
                        left: '-5%',
                        top: '-18%',
                        x: bg1Left,
                        opacity: bg1Scale,
                        scale: bg1Opacity
                    }} />
            </div> */}


            {/* bg2 */}
            <motion.div className='bgImgWrap'>
                <motion.div
                    className='bg2'
                    style={{
                        width: '120vw',
                        height: '150vh',
                        backgroundImage: `url(${bg2})`,
                        backgroundSize: 'cover',
                        position: 'absolute',
                        left: '-9%',
                        top: '-28%',
                        opacity: bg2Opacity,
                        scale: bg2Scale,
                        rotate: bg2Rotate,
                        filter: bg2Filter
                    }} />
            </motion.div>

            {/* bg3 */}
            <div className='bgImgWrap'>
                <motion.div
                    className='bg3'
                    style={{
                        width: '100vw',
                        height: '100vh',
                        backgroundImage: `url(${bg3})`,
                        backgroundSize: 'cover',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        scale: bg3Scale,
                        rotate: rotate,
                        filter: bg3Filter
                    }} />
            </div>


            <motion.div
                className='textOverflowWrap'
                style={{
                    color: 'white',
                    fontFamily: 'CyrulikRounded',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden',
                    x: textLeft
                }}>
                <motion.div
                    className='textScaleAll'
                    style={{
                        width: '100vw',
                        height: '100vh',
                        display: "flex",
                        flexWrap: 'nowrap',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        scale: textScale,
                        originY: 0.25,
                    }}>
                    <motion.h1 style={{
                        fontSize: 80,
                        margin: 0,
                    }}>RUMBLE</motion.h1>
                    <motion.h3 style={{
                        fontSize: 60,
                        margin: 0,
                    }}>In The Jungle</motion.h3>
                </motion.div>
            </motion.div>

            {/* scrollX text output test */}
            <h1
                style={{
                    position: "fixed",
                    color: 'white'
                }}>{currentX}</h1>
        </div >
    )
}