import { motion, useViewportScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useEffect, useState } from "react";
import '../font.css'
import bg1 from '../img/prologueBg1.svg'
import bg2 from '../img/prologueBg2.svg'
import bg3 from '../img/prologueBg3.svg'


export default function Prologue() {

    const { scrollXProgress, scrollX } = useViewportScroll();

    const bg3Scale = useTransform(scrollX, [0, 700], [1, 5])
    const rotate = useTransform(scrollX, [0, 700], [1, 40])
    const filter = useTransform(scrollX, [0, 700], [0, 20])
    const bg3Filter = useMotionTemplate`blur(${filter}px)`



    return (
        <div style={{
            width: '100vw',
            height: '100vh',
        }}>
            <motion.div
                className='bg1'
                style={{
                    width: '100vw',
                    height: '100vh',
                    backgroundImage: `url(${bg1})`,
                    backgroundSize: 'cover',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    opacity: .4
                }} />
            <motion.div
                className='bg2'
                style={{
                    width: '100vw',
                    height: '100vh',
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: 'cover',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    opacity: .6
                }} />
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
                width: '100%',
                height: '100%',
                display: "flex",
                flexWrap: 'nowrap',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
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
        </div>
    )
}