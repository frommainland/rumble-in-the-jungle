import React, { useRef, useEffect, useState } from 'react'
import './Animal_end.css'
import { smooth, flow, bouncy } from './easing'
import { motion, useViewportScroll, useTransform, useMotionValue } from 'framer-motion'
import animalend1 from '../img/animal-end1.png'
import animalend2 from '../img/animal-end2.png'
import animalend3 from '../img/animal-end3.png'
import animalend4 from '../img/animal-end4.png'
import animalend5 from '../img/animal-end5.png'
import animalend6 from '../img/animal-end6.png'
import animalend7 from '../img/animal-end7.png'
import animalend8 from '../img/animal-end7-back.png'

const h1 = Array.from('Hooray!')
const color = [
    "#FCD342",
    "#ED93ED",
    "#EB3136",
    "#1C60E3",
    "#FFFFFF",
    "#5BC07E",
    "#FA5F1D",
];

const delayBase = 0.6

function easeOutBounce(x) {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (x < 1 / d1) {
        return n1 * x * x;
    } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
}

const Animal_end = (props) => {
    const textRef = useRef()
    const [getTextHeight, setGetTextHeight] = useState(0)

    const [active, setActive] = useState(false)

    useEffect(() => {
        if (props.current === props.index) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [props.current])

    useEffect(() => {
        function handleResize() {
            setGetTextHeight(textRef.current.getBoundingClientRect().y + textRef.current.getBoundingClientRect().height + 100)
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])


    const initial = {
        opacity: 0
    }

    const animate = {
        scale: active ? 1 : 2,
        opacity: active ? 1 : 0,
    }


    return (
        <motion.div className='animal-end-wrap' style={{
            height: getTextHeight
        }}>
            <motion.img
                src={animalend1}
                className='animal-end-tiger'
                initial={initial}
                animate={animate}
                transition={{
                    ease: easeOutBounce,
                    duration: .6,
                    delay: active ? delayBase : 0
                }}
            />
            <motion.img
                src={animalend2}
                className='animal-end-monkey'
                initial={initial}
                animate={animate}
                transition={{
                    ease: easeOutBounce,
                    duration: active ? .6 : 0,
                    delay: active ? delayBase + .1 : 0
                }}
            />
            <motion.img src={animalend3} className='animal-end-toucan' initial={initial}
                animate={animate}
                transition={{
                    ease: easeOutBounce,
                    duration: active ? .6 : 0,
                    delay: active ? delayBase + .15 : 0
                }} />
            <motion.img src={animalend4} className='animal-end-giraf' initial={initial}
                animate={animate}
                transition={{
                    ease: easeOutBounce,
                    duration: active ? .6 : 0,
                    delay: active ? delayBase + 0.3 : 0
                }} />
            <motion.img src={animalend5} className='animal-end-elephant' initial={initial}
                animate={animate}
                transition={{
                    ease: easeOutBounce,
                    duration: active ? .6 : 0,
                    delay: active ? delayBase + 0.35 : 0
                }} />
            <motion.img src={animalend6} className='animal-end-aligator' initial={initial}
                animate={animate}
                transition={{
                    ease: easeOutBounce,
                    duration: active ? .6 : 0,
                    delay: active ? delayBase + 0.4 : 0
                }} />


            <div className='badgeScene'>
                <motion.div
                    className='badgeScene-badge'
                    initial={initial}
                    animate={{
                        scale: active ? 1 : 3,
                        opacity: active ? 1 : 0,
                        rotateY: active ? 360 : 0,
                    }}
                    transition={{
                        duration: active ? 1 : 0,
                        ease: 'circOut',
                        delay: active ? delayBase + 1 : 0
                    }}
                >
                    <img className='badgeScene-badege-front' src={animalend7}></img>
                    <img className='badgeScene-badege-back' src={animalend8}></img>
                </motion.div>
            </div>



            <div className='animal-end-textWrap'>
                <div className='animal-end-titleWrap'>
                    {h1.map((item, i) => (
                        <motion.h1
                            initial={{
                                y: '8vw'
                            }}
                            style={{
                                color: color[i]
                            }}
                            key={i}
                            animate={{
                                y: active ? 0 : '8vw'
                            }}
                            transition={{
                                delay: active ? delayBase + 2 + .05 * i : 0,
                                ease: smooth,
                                duration: 0.6
                            }}
                        >
                            {item}
                        </motion.h1>
                    ))}
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}>
                    <motion.p
                        initial={{
                            y: '8vw'
                        }}
                        animate={{
                            y: active ? 0 : '8vw'
                        }}
                        transition={{
                            delay: active ? delayBase + 2.3 : 0,
                            ease: smooth,
                            duration: 0.6
                        }}
                    >You got the jungle badge.</motion.p>
                </div>
            </div>
            <div className='animal-end-buttonWrap' ref={textRef}>
                <motion.button
                    initial={{
                        y: '10vw'
                    }}
                    animate={{
                        y: active ? 0 : '10vw'
                    }}
                    transition={{
                        duration: active ? 0.6 : 0,
                        delay: active ? delayBase + 2.3 : 0,
                    }}
                    className='animal-end-button1'
                >Read again?
                </motion.button>
                <motion.button
                    initial={{
                        y: '10vw'
                    }}
                    animate={{
                        y: active ? 0 : '10vw'
                    }}
                    transition={{
                        duration: active ? 0.6 : 0,
                        delay: active ? delayBase + 2.5 : 0,
                    }}
                    className='animal-end-button2'
                >Find more sounds</motion.button>
            </div>


        </motion.div>
    )
}

export default Animal_end
