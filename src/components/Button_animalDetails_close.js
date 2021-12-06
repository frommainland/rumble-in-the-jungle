import './Button_animalDetails_close.css'
import { motion, useViewportScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

const Button_animalDetails_close = (props) => {

    const smooth = [0.4, 0, 0, 1]
    const [anim, setAnim] = useState(false)
    const { scrollX } = useViewportScroll()
    useEffect(() => {
        scrollX.onChange((value) => {
            if (value >= 20) {
                setAnim(true)
            } else {
                setAnim(false)
            }
        });
    }, [scrollX]);

    const start = {
        y: 30,
        scale: .8,
        opacity: 0,
        transition: {
            ease: smooth,
        }
    }


    return (
        <button className='button_animalDetails_close' onClick={() => props.buttonOpen(true)}>
            {props.status ? "true" : 'false'}
        </button>
    )

}

export default Button_animalDetails_close