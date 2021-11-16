import { motion } from "framer-motion"
import './Prologue_title2nd.css'


const Prologue_title2nd = (props) => {

    const color = [
        "#FCD342",
        "#ED93ED",
        "#EB3136",
        "#1C60E3",
        "#5BC07E",
        "#FA5F1D",
    ];

    const smooth = [0.4, 0, 0, 1]

    const variants = {
        initial: {
            y: 'calc((24/812)*100vw*40/24)',
            opacity: 0,
        },
        anim: props.text2Anim ? (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: .5,
                ease: smooth,
                delay: custom
            }
        }) : (custom) => ({
            y: 'calc((24/812)*100vw*40/24)',
            opacity: 0,
            transition: {
                duration: .5,
                ease: smooth,
                delay: custom
            }
        })
    }



    return (
        <motion.div className='title-wrap-6jh'>
            <div>
                <motion.h3
                    variants={variants}
                    initial='initial'
                    animate='anim'
                >There’s a <span style={{
                    color: color[0],
                }}>rumble</span> in the jungle,</motion.h3>
            </div>

            <div>
                <motion.h3
                    variants={variants}
                    initial='initial'
                    animate='anim'
                    custom={0.1}
                >There’s a <span style={{
                    color: color[1],
                }}>whisper</span> in the trees,</motion.h3>
            </div>

            <div>
                <motion.h3
                    variants={variants}
                    initial='initial'
                    animate='anim'
                    custom={0.2}
                >The animals are <span style={{
                    color: color[2],
                }}>waking up</span> and <span style={{
                    color: color[3],
                }}>rustling</span> the leaves.</motion.h3>
            </div>

        </motion.div>
    )
}

export default Prologue_title2nd
