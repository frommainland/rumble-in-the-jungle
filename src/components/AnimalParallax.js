import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import './AnimalParallax.css'
import bg0 from '../img/animalBg-0.svg'
import bg1 from '../img/animalBg-1.svg'
import bg2 from '../img/animalBg-2.svg'
import bg3 from '../img/animalBg-3.svg'
import bg4 from '../img/animalBg-4.svg'

const AnimalParallax = () => {

    const { scrollXProgress, scrollX } = useViewportScroll();

    const bg4Left = useTransform(scrollX, [0, 100], [0, -180], { clamp: false })
    const bg3Left = useTransform(scrollX, [0, 100], [0, -160], { clamp: false })
    const bg2Left = useTransform(scrollX, [0, 100], [0, -140], { clamp: false })
    const bg1Left = useTransform(scrollX, [0, 100], [0, -120], { clamp: false })
    const bg0Left = useTransform(scrollX, [0, 100], [0, -100], { clamp: false })

    const left = useTransform(
        scrollX,
        [0, 200, 500],
        [0, 100, 400]
    );

    return (
        <div style={{
            marginLeft: '0vw',
            position: 'absolute',
            overflow: 'hidden',
            width: 1200,
            height: '100vh'
        }}>
            {/* bg4 */}
            <motion.div
                className='animalBg'
                style={{
                    backgroundImage: `url(${bg4})`,
                    x: bg4Left,
                }} />

            {/* bg3 */}
            <motion.div
                className='animalBg'
                style={{
                    backgroundImage: `url(${bg3})`,
                    x: bg3Left,
                }} />

            {/* bg2 */}
            <motion.div
                className='animalBg'
                style={{
                    backgroundImage: `url(${bg2})`,
                    x: bg2Left,
                }} />

            {/* bg1 */}
            <motion.div
                className='animalBg'
                style={{
                    backgroundImage: `url(${bg1})`,
                    x: bg1Left,
                }} />

            {/* bg0 */}
            <motion.div
                className='animalBg'
                style={{
                    backgroundImage: `url(${bg0})`,
                    x: bg0Left,
                }} />
        </div>
    )
}

export default AnimalParallax;