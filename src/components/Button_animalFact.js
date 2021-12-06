import './Button_animalFact.css'
import { motion, useViewportScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { prologueEndDis } from "./Prologue_bg5";
import useWindowDimensions from "./useWindowDimensions";

const Button_animalFact = (props) => {
    const { height, width } = useWindowDimensions()
    const smooth = [0.4, 0, 0, 1]
    const [anim, setAnim] = useState(false)
    const { scrollX } = useViewportScroll()
    useEffect(() => {
        scrollX.onChange((value) => {
            if (value >= prologueEndDis + 7 * height - width) {
                setAnim(true)
            } else {
                setAnim(false)
            }
        });
    }, [scrollX]);

    const start = {
        y: -30,
        scale: 1,
        opacity: 1,
        transition: {
            ease: smooth,
        }
    }


    return (
        <motion.button
            style={{
                left: '50%',
                x: '-50%',
                opacity: 0,
                scale: 0.8
            }}
            animate={anim ? start : {}}
            className='animalFact'
            onClick={() => {
                props.buttonOpen(!props.status);
            }
            }>
            Animal fun facts ↓ <br />
            {props.status ? "true" : 'false'}
        </motion.button >
    )

}

export default Button_animalFact