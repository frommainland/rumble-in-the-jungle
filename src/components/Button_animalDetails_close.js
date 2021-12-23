import './Button_animalDetails_close.css'
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

const Button_animalDetails_close = (props) => {

    return (
        <AnimatePresence>
            {props.status && (
                <motion.button 
                style={{
                    scale: 0
                }}
                animate={{
                    scale: 1,
                    transition: {
                        delay: 2
                    }
                }}
                exit={{
                    scale: 0
                }}
                className='button_animalDetails_close' 
                onClick={() => props.buttonOpen(!props.status)} />)}
        </AnimatePresence>
    )
}

export default Button_animalDetails_close