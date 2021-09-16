import { motion, useViewportScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useEffect, useState } from "react";
import '../font.css'
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

    // bg1 anim
    const bg1Scale = useTransform(scrollX, [0, 400], [.7, 2])
    const bg1Opacity = useTransform(scrollX, [0, 400], [.4, 1])
    const bg1Left = useTransform(scrollX, [0, 400], [0, 100])

    // text anim
    const textScale = useTransform(scrollX, [0, 400], [1, 25])


    useEffect(() => {
        const unsubscribeX = scrollX.onChange((v) => setCurrentX(v.toFixed()))
        return () => {
            unsubscribeX()
        }
    })

    return (
        <div style={{
            position: 'absolute',
            width: '100vw',
            height: '100vh',
        }}>
            <div
                className='bg1Wrap'
                style={{
                    width: '100vw',
                    height: '100vh',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                }}>
                <motion.div
                    className='bg1'
                    style={{
                        width: '118vw',
                        height: '142vh',
                        backgroundImage: `url(${bg1})`,
                        backgroundSize: 'auto auto',
                        position: 'absolute',
                        left: bg1Left,
                        top: '-18%',
                        opacity: bg1Scale,
                        scale: bg1Opacity
                    }} />
            </div>
            <div
                className='bg2Wrap'
                style={{
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden',
                    position: 'absolute',
                }}>
                <motion.div
                    className='bg2'
                    style={{
                        width: '120vw',
                        height: '120vh',
                        backgroundImage: `url(${bg2})`,
                        backgroundSize: 'cover',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        marginLeft: '-60vw',
                        marginTop: '-60vh',
                        opacity: bg2Opacity,
                        scale: bg2Scale,
                        rotate: bg2Rotate
                    }} />
            </div>
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

            <motion.div style={{
                color: 'white',
                fontFamily: 'CyrulikRounded',
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100vw',
                height: '100vh',
                display: "flex",
                flexWrap: 'nowrap',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                scale: textScale,
                originY: 0.25,
                overflow: 'hidden'
            }}>
                <h1 style={{
                    fontSize: 80,
                    margin: 0
                }}>RUMBLE</h1>
                <h3 style={{
                    fontSize: 60,
                    margin: 0
                }}>In The Jungle</h3>
            </motion.div>
            <h1
                style={{
                    position: "fixed",
                    color: 'white'
                }}>{currentX}</h1>
        </div>
    )
}