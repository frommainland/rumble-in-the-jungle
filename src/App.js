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

    return (
        <div className="App">

            {/* scrollX text output test */}
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

            {/* {!svgOpen && <AnimalParallax />}
                {!svgOpen && <Prologue />}
                {svgOpen && <AnimalDetails />} */}
            {/* <AnimatePresence>
                {!svgOpen &&
                    <motion.div
                        style={{
                            position: 'fixed',
                            height: '100px',
                            width: '100px',
                            backgroundColor: 'red',
                            zIndex: 22
                        }}
                        exit={{
                            scale: 0,
                            transition: {
                                duration: 5
                            }
                        }}
                        
                    ></motion.div>}
            </AnimatePresence>

            <AnimatePresence>
                {!svgOpen &&
                    <motion.div
                        style={{
                            position: 'fixed',
                            right: 0,
                            height: '100px',
                            width: '100px',
                            backgroundColor: 'red',
                            zIndex: 22
                        }}
                        exit={{
                            scale: 0,
                            transition: {
                                duration: 5
                            }
                        }}
                        
                    ></motion.div>}
            </AnimatePresence> */}
            <AnimalParallax status={svgOpen} />
            <Prologue status={svgOpen} />
            <AnimalDetails status={svgOpen} />


            <Button_animalFact buttonOpen={setSvgOpen} status={svgOpen} />
            <Button_animalDetails_close buttonOpen={setSvgOpen} status={svgOpen} />
            <SvgMask status={svgOpen} />

        </div>

    );
}

export default App;
