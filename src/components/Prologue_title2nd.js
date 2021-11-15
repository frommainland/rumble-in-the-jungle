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

    return (
        <div className='title-wrap-6jh'>
            <h3>There’s a <span style={{
                color: color[0],
            }}>rumble</span> in the jungle,</h3>
            <h3>There’s a <span style={{
                color: color[1],
            }}>whisper</span> in the trees,</h3>
            <h3>The animals are <span style={{
                color: color[2],
            }}>waking up</span> and <span style={{
                color: color[3],
            }}>rustling</span> the leaves.</h3>
        </div>
    )
}

export default Prologue_title2nd
