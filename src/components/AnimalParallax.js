
import { motion, useMotionValue } from "framer-motion"
import bg0 from '../img/animalBg-0.svg'
import bg1 from '../img/animalBg-1.svg'
import bg2 from '../img/animalBg-2.svg'
import bg3 from '../img/animalBg-3.svg'
import bg4 from '../img/animalBg-4.svg'


import React, { useEffect, useRef } from 'react';

const Comp = () => {
    const ref = useRef();
    const offset = useMotionValue(0)

    const handleScroll = () => {
        const posX = ref.current.getBoundingClientRect().left;
        offset = window.pageXOffset - posX;
        console.log(offset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

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
}

export default Comp;