import './Button_animalDetails_close.css'
import { motion, useViewportScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

const Button_animalDetails_close = (props) => {

    return (
        <button className='button_animalDetails_close' onClick={() => props.buttonOpen(!props.status)} />
    )
}

export default Button_animalDetails_close