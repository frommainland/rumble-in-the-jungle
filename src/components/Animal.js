
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";
import './Animal.css'
import elephant1 from '../img/AnimalDetail-elephant-1.png'
import elephant2 from '../img/AnimalDetail-elephant-2.png'
import elephant3 from '../img/AnimalDetail-elephant-3.png'

const Animal = () => {

    const smooth = [0.4, 0, 0, 1]
    const { scrollYProgress, scrollY } = useViewportScroll();

    // test
    const [currentY, setCurrentY] = useState(0);
    useEffect(() => {
        const unsubscribeY = scrollY.onChange((v) => setCurrentY(v.toFixed()));
        return () => {
            unsubscribeY();
        };
    });
    const testY = useTransform(
        scrollY,
        [0, 100],
        [0, 100],
        { clamp: false }
    )

    // test

    const size = useWindowSize();


    // text title anim
    const [titleAnim, setTitleAnim] = useState(false)
    const titleY = useTransform(scrollY, [0, 100], [0, 1], { clamp: false })
    const scaleY = useTransform(scrollY, [0, 100], [1, .5])

    useEffect(() => {
        scrollY.onChange((value) => {
            if (value >= size.width / 10) {
                setTitleAnim(true)
            } else {
                setTitleAnim(false)
            }
        });
    }, [scrollY]);


    return (
        <div className='animal-wrap'>
            <motion.section
                style={{
                    position: 'absolute',
                    color: 'red',
                    top: testY,
                    left: 0
                }}>
                {currentY}
            </motion.section>
            <motion.h1
                className='animal-title'
                style={{
                    top: testY,
                    position: 'relative',
                    scale: scaleY
                }}
            >
                ELEPHANT
            </motion.h1>
            <p className='animal-quotes'>
                “It’s great to be an elephant. All big and fat and round, and wander through the jungle just elephing around.”
            </p>
            <div className='animal-speech'>
            </div>

            <div className='animal-illustration'>
            </div>

            <section className='animal-metrics'>
                <div className='animal-metrics-item'>
                    <div className='animal-metric-item-number'>
                        <div>2-5</div>
                        <div>tons</div>
                    </div>
                    <p>weight</p>
                </div>
                <div className='animal-metrics-item'>
                    <div className='animal-metric-item-number'>
                        <div>8-10</div>
                        <div>feet</div>
                    </div>
                    <p>height</p>
                </div>
                <div className='animal-metrics-item'>
                    <div className='animal-metric-item-number'>
                        <div>60-70</div>
                        <div>years</div>
                    </div>
                    <p>life span</p>
                </div>
            </section>

            <section className='animal-essay'>
                African forest elephants live in family groups of up to 20 individuals and forage on leaves, grasses, seeds, fruit, and tree bark.
            </section>

            <div className='animal-images'>
                <motion.img
                    src={elephant1}
                    className='animal-images-item'
                    style={{
                        rotate: 5
                    }} />
                <motion.img
                    src={elephant2}
                    className='animal-images-item'
                    style={{
                        rotate: -2
                    }} />
                <motion.img
                    src={elephant3}
                    className='animal-images-item'
                    style={{
                        rotate: 0
                    }} />
            </div>

            <section className='animal-essay'>
                Since the diet of forest elephants is dominated by fruit, they play a crucial role in dispersing many tree species, particularly the seeds of large trees which tend to have high carbon content. They are therefore referred to as the 'mega-gardener of the forest'.
            </section>

            <section className='animal-sound'>
                <div></div>
                <p>What does elephant sound like?</p>
            </section>

        </div>
    )
}

export default Animal