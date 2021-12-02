import "./App.css";
import { useState, useEffect } from "react";
import { useViewportScroll } from "framer-motion";
import useWindowSize from "./components/useWindowSize";

import Prologue from "./components/Prologue";
import AnimalDetails from './components/AnimalDetails'
import AnimalParallax from "./components/AnimalParallax";

function App() {
    const size = useWindowSize();
    const scrollDis = size.height * (2625 / 375) - size.width
    const [currentX, setCurrentX] = useState(0);
    const { scrollXProgress, scrollX } = useViewportScroll();
    useEffect(() => {
        const unsubscribeX = scrollX.onChange((v) => setCurrentX(v.toFixed()));
        return () => {
            unsubscribeX();
        };
    });
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
                {currentX} & (window.width: {size.width} windows.height: {size.height} *** {scrollDis} ***)
            </h1>

            {/* ------------test above------------- */}


            <AnimalParallax />
            <Prologue />
            {/* <AnimalDetails /> */}




        </div>

    );
}

export default App;
