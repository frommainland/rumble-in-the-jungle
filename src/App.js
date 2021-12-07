import "./App.css";
import { useState, useEffect } from "react";
import { motion, useViewportScroll, AnimatePresence } from "framer-motion";
import useWindowDimensions from "./components/useWindowDimensions";

import Prologue from "./components/Prologue";
import AnimalDetails from './components/AnimalDetails'
import AnimalParallax from "./components/AnimalParallax";
import Button_animalFact from "./components/Button_animalFact";
import Button_animalDetails_close from "./components/Button_animalDetails_close";
import SvgMask from "./components/SvgMask";
import { smooth } from "./components/easing";
import { prologueEndDis } from "./components/Prologue_bg5";

function App() {
    const { width, height } = useWindowDimensions()
    const scrollDis = height * (2625 / 375) - width
    const [currentX, setCurrentX] = useState(0);
    const { scrollXProgress, scrollX } = useViewportScroll();
    useEffect(() => {
        const unsubscribeX = scrollX.onChange((v) => setCurrentX(v.toFixed()));
        return () => {
            unsubscribeX();
        };
    });


    const [svgOpen, setSvgOpen] = useState(false)






    {/* ------------Button_animalFact below------------- */ }

    const [anim, setAnim] = useState(false)
    // useEffect(() => {
    //     scrollX.onChange((value) => {
    //         if (value >= prologueEndDis + 7 * height - width) {
    //             setAnim(true)
    //         } else {
    //             setAnim(false)
    //         }
    //     });
    // }, [scrollX]);

    useEffect(() => {
        scrollX.onChange((value) => {
            if (value >= 200) {
                setAnim(true)
            } else {
                setAnim(false)
            }
        });
    }, [scrollX]);

    return (
        <div className="App">

            <h1
                style={{
                    position: "fixed",
                    color: "red",
                    fontSize: 16,
                    zIndex: 20
                }}
            >
                {currentX} & (window.width: {width} windows.height: {height} *** {scrollDis} ***)
            </h1>

            {/* ------------test above------------- */}




            <AnimatePresence initial={false}>
                {!svgOpen && (
                    <motion.div
                        style={{
                            position: 'relative',
                            opacity: 0,
                            y: -20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 1,
                                duration: 1,
                                ease: smooth
                            }
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                            transition: {
                                duration: 1,
                                ease: smooth
                            }
                        }}>
                        <AnimalParallax />
                        <Prologue />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {svgOpen && (
                    <motion.div className='svgOpen-animaldetails'
                        style={{
                            position: 'relative',
                            opacity: 0,
                            y: 20
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 1,
                                duration: 1,
                                ease: smooth
                            }
                        }}
                        exit={{
                            position: 'relative',
                            opacity: 0,
                            y: 20,
                            transition: {
                                duration: 1,
                                ease: smooth
                            }
                        }}
                    >
                        <AnimalDetails />
                    </motion.div>
                )}
            </AnimatePresence>

            <Button_animalFact buttonOpen={setSvgOpen} status={svgOpen} />

            <Button_animalDetails_close buttonOpen={setSvgOpen} status={svgOpen} />
            <SvgMask status={svgOpen} />

        </div>

    );
}

export default App;
