import React from 'react'
import './SvgMask.css'
import { motion } from 'framer-motion'

const path = "M 0 100 V 100 Q 50 100 100 100 V 100 z"  // empty
const path1 = 'M 0 100 V 50 Q 50 0 100 50 V 100 z' // middle
const path2 = 'M 0 100 V 0 Q 50 0 100 0 V 100 z' // full

const path3 = 'M 0 0 V 100 Q 50 100 100 100 V 0 z'
const path4 = 'M 0 0 V 50 Q 50 0 100 50 V 0 z'
const path5 = 'M 0 0 V 0 Q 50 0 100 0 V 0 z'

const SvgMask1 = (props) => {
    return (
        <svg className='overlay' width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path vector-effect="non-scaling-stroke" d={0} fill="#F80404"
                animate={{
                    // d: props.status ? [props.path, path1, path2] : props.path
                    d: [path2, path3, path4, path5]
                }}
                transition={{
                    duration: 1,
                    times: [0, 0, 0.5, 0.8, 1],
                }}
            />
        </svg>
    )
}

{/* <svg width="219" height="99" viewBox="0 0 219 99" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M54 45L63 22H76C85.6667 22 107.2 24.2 116 33C124.8 41.8 126.333 49.3333 126 52L86 62L54 45Z" fill="#F80404" stroke="black" />
</svg> */}


export default SvgMask1

