import './Button_animalFact.css'
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion'
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

    const inital = {
        left: '50%',
        x: '-50%',
        scale: 0.8,
        opacity: 0
    }
    const transition = {
        transition: {
            ease: smooth
        }
    }
    return (
        <AnimatePresence>
            {anim && (<motion.button
                style={inital}
                animate={{
                    scale: 1,
                    opacity: 1,
                    ...transition
                }}
                exit={{ ...inital, ...transition }}

                className='animalFact'
                onClick={() => {
                    props.buttonOpen(!props.status);
                }
                }>
                Animal fun facts ↓ <br />
                {props.status ? "true" : 'false'}
            </motion.button >)
            }
        </AnimatePresence >
    )

}

export default Button_animalFact