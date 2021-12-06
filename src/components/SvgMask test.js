import React from 'react'
import './SvgMask.css'
import { motion, useAnimation } from 'framer-motion'

const path = "M 0 100 V 100 Q 50 100 100 100 V 100 z"  // empty
const path1 = 'M 0 100 V 50 Q 50 0 100 50 V 100 z' // middle
const path2 = 'M 0 100 V 0 Q 50 0 100 0 V 100 z' // full

const path3 = 'M 0 0 V 100 Q 50 100 100 100 V 0 z'
const path4 = 'M 0 0 V 50 Q 50 0 100 50 V 0 z'
const path5 = 'M 0 0 V 0 Q 50 0 100 0 V 0 z'

const SvgMask123 = (props) => {
    const anim = useAnimation()
    async function sequence() {
        await anim.start({
            scale: 2,
            transition: {
                duration: .1
            }
        })
        await anim.start({
            d: path2,
            transition: {
                duration: .1
            }
        })
        anim.start({
            d: path4,
            transition: {
                duration: 1,
                delay: 1
            }
        })
    }

    return (
        <svg className='overlay' width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path vector-effect="non-scaling-stroke" d={path1} fill="#F80404"
                animate={anim}
                onLoadStart={console.log(12345)}
            />
        </svg>
    )
}

{/* <svg width="219" height="99" viewBox="0 0 219 99" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M54 45L63 22H76C85.6667 22 107.2 24.2 116 33C124.8 41.8 126.333 49.3333 126 52L86 62L54 45Z" fill="#F80404" stroke="black" />
</svg> */}


export default SvgMask123

