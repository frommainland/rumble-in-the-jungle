import "./Animal_sound.css";
import { useRef, useEffect, useState } from "react";
import useInView from "react-cool-inview";
import { motion, AnimatePresence } from "framer-motion";


export default function Animal_sound(props) {

    const outerPath = "M100 198.901C154.622 198.901 198.901 154.622 198.901 100C198.901 45.3784 154.622 1.0989 100 1.0989C45.3784 1.0989 1.0989 45.3784 1.0989 100C1.0989 154.622 45.3784 198.901 100 198.901ZM100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200Z"

    const innerPath = "M67.5 133.866C104.153 133.866 133.866 104.153 133.866 67.5C133.866 30.8473 104.153 1.13445 67.5 1.13445C30.8473 1.13445 1.13445 30.8473 1.13445 67.5C1.13445 104.153 30.8473 133.866 67.5 133.866ZM67.5 135C104.779 135 135 104.779 135 67.5C135 30.2208 104.779 0 67.5 0C30.2208 0 0 30.2208 0 67.5C0 104.779 30.2208 135 67.5 135Z"

    const [textPath, SettextPath] = useState(0);
    const [innerTextPath, setInnerTextPath] = useState(0)
    const pathRef = useRef();
    const innerPathRef = useRef()
    useEffect(() => {
        // console.log(svgRef.current.getBoundingClientRect().y / window.innerHeight)
        SettextPath(pathRef.current.getTotalLength());
        setInnerTextPath(innerPathRef.current.getTotalLength())
    }, []);


    const { observe, inView } = useInView({
        unobserveOnEnter: false,
    });


    // play sound
    const [tapped, setTapped] = useState(false);
    const [playing, setPlaying] = useState(false);

    const [audio] = useState(new Audio(props.audio))

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
        audio.addEventListener("ended", () => {
            setPlaying(false);
            setTapped(false);
        });
        return () => {
            audio.removeEventListener("ended", () => {
                setPlaying(false);
                setTapped(false);
            });
        };
    }, []);


    // play and pause button svg path
    const playPath = "M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70ZM29.2762 19.1842C27.8758 18.2505 26 19.2545 26 20.9376V49.5893C26 51.2724 27.8758 52.2763 29.2762 51.3427L50.765 37.0168C52.0162 36.1827 52.0162 34.3442 50.765 33.51L29.2762 19.1842Z"

    const pausePath = "M70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35ZM27 26.75C27 25.2312 28.2312 24 29.75 24C31.2688 24 32.5 25.2312 32.5 26.75V43.25C32.5 44.7688 31.2688 46 29.75 46C28.2312 46 27 44.7688 27 43.25V26.75ZM40.25 24C38.7312 24 37.5 25.2312 37.5 26.75V43.25C37.5 44.7688 38.7312 46 40.25 46C41.7688 46 43 44.7688 43 43.25V26.75C43 25.2312 41.7688 24 40.25 24Z"

    return (
        <div className='svgWrapper' ref={observe}
            onClickCapture={() => {
                setTapped(!tapped);
                setPlaying(!playing);
                props.getAnimalAudioName(props.title)
            }}>
            <audio>
                <source type="audio/mp3" src={props.audio} />
            </audio>
            <div className='outerText'>
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={inView ? 'animate-reverse' : ''}>
                    <path fillRule="evenodd" clipRule="evenodd" d={outerPath} id="Text"
                        ref={pathRef} />
                    <text className="text" style={{
                        fill: props.color,
                        opacity: 0.5
                    }}>
                        <textPath href="#Text" textLength={textPath / 2}>&nbsp;⁛ {props.title} sound ⁛ {props.title} sound&nbsp;</textPath>
                    </text>
                </svg>
            </div>


            <div className='innerText' >
                <svg viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg" className={inView ? "animate" : ""}>
                    <path fillRule="evenodd" clipRule="evenodd" d={innerPath}
                        ref={innerPathRef} id='innerText'
                    />
                    <text className="innerText-text" style={{
                        fill: props.color
                    }}>
                        <textPath href="#innerText" textLength={innerTextPath / 2}>&nbsp;{props.sound} ⁕ {props.sound} ⁕</textPath>
                    </text>
                </svg>
            </div>


            <AnimatePresence>
                {!tapped && (
                    <motion.div className='play'
                        key={'play'}
                        style={{
                            scale: 0,
                            opacity: 0, 
                            x: '-50%',
                            y: '-50%'
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1
                        }}
                        exit={{
                            scale: 0,
                            opacity: 0
                        }}>
                        <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d={playPath}
                                fill={props.color} />
                        </svg>
                    </motion.div>
                )}
                {tapped && (
                    <motion.div className='pause'
                        key={'pause'}
                        style={{
                            scale: 0,
                            opacity: 0,
                            x: '-50%',
                            y: '-50%'
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1
                        }}
                        exit={{
                            scale: 0,
                            opacity: 0
                        }}>
                        <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d={pausePath}
                                fill={props.color} />
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}





