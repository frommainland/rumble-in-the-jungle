import { motion, useViewportScroll, useTransform } from "framer-motion";
import useWindowSize from './useWindowSize'
import { useEffect, useRef, useState } from "react";
import './AnimalParallax.css'
import TextPathAnim from "./TextPathAnim";

const AnimalParallax = () => {

    const { scrollXProgress, scrollX } = useViewportScroll();
    const size = useWindowSize()
    const scrollDis = size.height * (2625 / 375) - size.width

    const x1 = useTransform(scrollX, [0, scrollDis], [0, -scrollDis / 2.5])
    const x2 = useTransform(scrollX, [0, scrollDis], [0, -scrollDis / 4])
    const x3 = useTransform(scrollX, [0, scrollDis], [0, -scrollDis / 5])
    const x4 = useTransform(scrollX, [0, scrollDis], [0, -scrollDis / 6])
    const x5 = useTransform(scrollX, [0, scrollDis], [0, -scrollDis / 9])

  
    return (
        <div className='animalParallax-wrap'>
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

            <TextPathAnim color="#EB3136" />


            <motion.div className='animalParallax-item animalParallax-item-bg2'
                style={{
                    x: x2
                }}
            />
            <motion.div className='animalParallax-item animalParallax-item-bg1'
                style={{
                    x: x1
                }} />

        </div>
    )
}

export default AnimalParallax;