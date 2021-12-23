import React, { useRef, useEffect, useState } from 'react'
import './Animal_end.css'
import { motion, useViewportScroll, useTransform, useMotionValue } from 'framer-motion'
import { ScrollerMotion, useScrollerMotion, ScrollerMotionRef } from 'scroller-motion'
import animalend1 from '../img/animal-end1.png'
import animalend2 from '../img/animal-end2.png'
import animalend3 from '../img/animal-end3.png'
import animalend4 from '../img/animal-end4.png'
import animalend5 from '../img/animal-end5.png'
import animalend6 from '../img/animal-end6.png'

const Animal_end = () => {
    const scrollerMotion = useRef()
    const scrollY = useMotionValue(0)
    const [currentY, setCurrentY] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollerMotion.current.scrollY.onChange((v) => {
            scrollY.set(v)
        }
        )
        return () => unsubscribe()
    }, [scrollY])

    // const { scrollY } = useViewportScroll()


    const tigerY = useTransform(scrollY, [0, 100], [0, 300], { clamp: false })
    const tigerR = useTransform(scrollY, [0, 1000], [0, 360])

    const monkeyY = useTransform(scrollY, [0, 100], [0, 200], { clamp: false })
    const monkeyR = useTransform(scrollY, [0, 1000], [0, -180])

    return (
        <ScrollerMotion ref={scrollerMotion}>
            <motion.div className='animal-end-wrap'>
                <motion.img
                    src={animalend1}
                    className='animal-end-tiger'
                    style={{
                        y: tigerY,
                        rotate: tigerR
                    }}
                />
                <motion.img
                    src={animalend2}
                    className='animal-end-monkey'
                    style={{
                        y: monkeyY,
                        rotate: monkeyR
                    }} />
                <motion.img src={animalend3} className='animal-end-toucan' />
                <motion.img src={animalend4} className='animal-end-giraf' />
                <motion.img src={animalend5} className='animal-end-elephant' />
                <motion.img src={animalend6} className='animal-end-aligator' />
            </motion.div>
        </ScrollerMotion>

    )
}

export default Animal_end
