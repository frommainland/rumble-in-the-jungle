import { motion } from "framer-motion"
import './Prologue_title.css'


const Prologue_title = (props) => {

    const title = Array.from('rumble1')
    const color = [
        "#FCD342",
        "#ED93ED",
        "#EB3136",
        "#1C60E3",
        "#5BC07E",
        "#FA5F1D",
    ];

    return (
        <motion.div
            className='title-wrap'
            style={{
                scale: props.textScale,
            }}>
            <div className='title-top-wrap'>
                {title.map((item, i) => (
                    <h1 className='title-top' key={i} style={{
                        color: color[i % color.length]
                    }}>
                        {item}
                    </h1>
                ))}
            </div>

            <h1 className='title-bottom'>in the jungle</h1>
        </motion.div >
    )
}

export default Prologue_title

