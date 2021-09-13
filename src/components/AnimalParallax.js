
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import bg0 from '../img/animalBg-0.svg'
import bg1 from '../img/animalBg-1.svg'
import bg2 from '../img/animalBg-2.svg'
import bg3 from '../img/animalBg-3.svg'
import bg4 from '../img/animalBg-4.svg'

const Parallax = () => {

    const { scrollXProgress, scrollX } = useViewportScroll();
    const [currentX, setCurrentX] = useState(0)
    const [currentXProgress, setCurrentXProgress] = useState(0)

    useEffect(() => {
        const unsubscribeX = scrollX.onChange((v) => setCurrentX(Math.round(v)))
        const unsubscribeXProgress = scrollXProgress.onChange((v) => setCurrentXProgress(Math.round(v)))
        return () => {
            unsubscribeX()
            unsubscribeXProgress()
        }
    }, [])

    return (
        <div>
            <motion.div
                style={{
                    width: 1888,
                    height: 375,
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: '100% 100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    display: 'inline-block'
                }} />
            <motion.div
                style={{
                    width: 1888,
                    height: 375,
                    backgroundImage: `url(${bg1})`,
                    backgroundSize: '100% 100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    display: 'inline-block'
                }} />
            <motion.div
                style={{
                    width: 1888,
                    height: 375,
                    backgroundImage: `url(${bg0})`,
                    backgroundSize: '100% 100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    display: 'inline-block'
                }} />
            <p style={{
                position: 'fixed'
            }}>scrollX: {currentX} {currentXProgress}</p>
        </div>
    )
}

export default Parallax

