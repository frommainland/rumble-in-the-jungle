import React from 'react'
import './SvgMask.css'
import { motion } from 'framer-motion'
import { smooth, flow, bouncy } from './easing'

const path = "M 0 100 V 100 Q 50 100 100 100 V 100 z"
const path1 = "M 0 100 V 50 Q 50 0 100 50 V 100 z"
const path2 = "M 0 100 V 0 Q 50 0 100 0 V 100 z"

const path3 = "M 0 0 V 100 Q 50 100 100 100 V 0 z"
const path4 = "M 0 0 V 50 Q 50 0 100 50 V 0 z"
const path5 = "M 0 0 V 0 Q 50 0 100 0 V 0 z"

const SvgMask = (props) => {
    return (

        <svg className='overlay' width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
                // initial={false} will cause react-dom.development.js:630 Error: <path> attribute d: Expected path command, "…50 0 100 0 V 0 z,M 0 0 V 50 Q 50…".
                // so add initial={false} outside path, not in the attribute
                // 12.07 update framer motion to latest could solve it, but right now install framermotion@latest not working
                initial={false}
                d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
                animate={{
                    d: props.status ? [path, path1, path2, path3, path4, path5] : [path5, path4, path3, path2, path1, path]
                }}
                transition={{
                    duration: 2.2,
                    times: [0, 0.3, 0.5, 0.5, 0.8, 1],
                    ease: smooth
                }}
            />
        </svg>

    )
}

export default SvgMask


