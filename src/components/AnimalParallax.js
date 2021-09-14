
<<<<<<< HEAD
import { motion, useMotionValue } from "framer-motion"
=======
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
>>>>>>> parent of 5fc55d4 (wrap up for the day)
import bg0 from '../img/animalBg-0.svg'
import bg1 from '../img/animalBg-1.svg'
import bg2 from '../img/animalBg-2.svg'
import bg3 from '../img/animalBg-3.svg'
import bg4 from '../img/animalBg-4.svg'


import React, { useEffect, useRef } from 'react';

const Comp = () => {
    const ref = useRef();
    const offset = useMotionValue(0)

<<<<<<< HEAD
    const handleScroll = () => {
        const posX = ref.current.getBoundingClientRect().left;
        offset = window.pageXOffset - posX;
        console.log(offset);
    };

=======
>>>>>>> parent of 5fc55d4 (wrap up for the day)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

<<<<<<< HEAD
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <motion.div
            ref={ref}
            style={{
                background: 'red',
                height: 100,
                width: '300vw'
            }}>Contents of your component</motion.div>)
=======
    return (
        <div>
            <motion.div
                style={{
                    width: 1888,
                    height: 375,
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: '100% 100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    display: 'inline-block'
                }} />
            <motion.div
                style={{
                    width: 1888,
                    height: 375,
                    backgroundImage: `url(${bg1})`,
                    backgroundSize: '100% 100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    display: 'inline-block'
                }} />
            <motion.div
                style={{
                    width: 1888,
                    height: 375,
                    backgroundImage: `url(${bg0})`,
                    backgroundSize: '100% 100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    display: 'inline-block'
                }} />
            <p style={{
                position: 'fixed'
            }}>scrollX: {currentX} {currentXProgress}</p>
        </div>
    )
>>>>>>> parent of 5fc55d4 (wrap up for the day)
}

export default Comp;