import { motion, useViewportScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import './AnimalParallax.css'
import TextPathAnim from "./TextPathAnim";
import { prologueEndDis } from "./Prologue_bg5";
import useWindowDimensions from './useWindowDimensions'



const AnimalParallax = (props) => {

    const { scrollX } = useViewportScroll();
    const { height, width } = useWindowDimensions()
    // const scrollDis = size.height * (2625 / 375) - size.width

    const scrollDis = height * 7

    // const x1 = useTransform(scrollX, [0, scrollDis], [0, -scrollDis / 2.5], { clamp: false })
    // const x2 = useTransform(scrollX, [0, scrollDis], [0, -scrollDis / 4], { clamp: false })
    // const x3 = useTransform(scrollX, [0, scrollDis], [0, -scrollDis / 5], { clamp: false })
    // const x4 = useTransform(scrollX, [0, scrollDis], [0, -scrollDis / 6], { clamp: false })
    // const x5 = useTransform(scrollX, [0, scrollDis], [0, -scrollDis / 9], { clamp: false })

    // const x1 = useTransform(scrollX, [0, prologueEndDis - width, prologueEndDis + scrollDis], [0, 0, -scrollDis / 2])
    // const x2 = useTransform(scrollX, [0, prologueEndDis - width, prologueEndDis + scrollDis], [0, 0, -scrollDis / 4])
    // const x3 = useTransform(scrollX, [0, prologueEndDis - width, prologueEndDis + scrollDis], [0, 0, -scrollDis / 5])
    // const x4 = useTransform(scrollX, [0, prologueEndDis - width, prologueEndDis + scrollDis], [0, 0, -scrollDis / 6])
    // const x5 = useTransform(scrollX, [0, prologueEndDis - width, prologueEndDis + scrollDis], [0, 0, -scrollDis / 9])

    const x1 = useTransform(scrollX, [0, prologueEndDis + 400, prologueEndDis + scrollDis], [0, 0, -scrollDis * 1.4])
    const x2 = useTransform(scrollX, [0, prologueEndDis + 400, prologueEndDis + scrollDis], [0, 0, -scrollDis * 1.3])
    const x3 = useTransform(scrollX, [0, prologueEndDis + 400, prologueEndDis + scrollDis], [0, 0, -scrollDis * 1.2])
    const x4 = useTransform(scrollX, [0, prologueEndDis + 400, prologueEndDis + scrollDis], [0, 0, -scrollDis * 1.15])
    const x5 = useTransform(scrollX, [0, prologueEndDis + 400, prologueEndDis + scrollDis], [0, 0, -scrollDis * 1.1])


    const opacity = useTransform(scrollX, [0, prologueEndDis, prologueEndDis + 400], [1, 1, 0])




    return (
        <AnimatePresence>
            {!props.status && (
                <motion.div
                    className='animalParallax-wrap'
                    key='AnimalParallax'
                    initial={{
                        scale: 1
                    }}
                // exit={{
                //     scale: .2,
                //     transition: {
                //         duration: 5
                //     }
                // }}
                >
                    <motion.div className='animalParallax-item animalParallax-item-bg6' />
                    <motion.div className='animalParallax-item animalParallax-item-bg5'
                        style={{
                            x: x5
                        }}
                    />
                    <motion.div className='animalParallax-item animalParallax-item-bg4'
                        style={{
                            x: x4
                        }}
                    />
                    <motion.div className='animalParallax-item animalParallax-item-bg3'
                        style={{
                            x: x3
                        }}
                    />

                    {/* <TextPathAnim color="#EB3136" /> */}

                    <motion.div className='animalParallax-item animalParallax-item-bg2'
                        style={{
                            x: x2
                        }}
                    />
                    <motion.div className='animalParallax-item animalParallax-item-bg1'
                        style={{
                            x: x1
                        }} />

                    <motion.div
                        className='animalParallax-mask'
                        style={{
                            opacity: opacity
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default AnimalParallax;