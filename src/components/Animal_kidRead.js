import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react/cjs/react.development";
import "./Animal_kidRead.css";
import Animal_kidRead_play from "./Animal_kidRead_play";
import Animal_kidRead_pause from "./Animal_kidRead_pause";
import mp3 from "../sound/elephant1.mp3";

export default function Animal_kidRead(props) {
    const [tapped, setTapped] = useState(false);
    const [playing, setPlaying] = useState(false);

    const [audio] = useState(new Audio(mp3));

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

    return (
        <div className="button-wrapper">
            <audio>
                <source src={mp3} />
            </audio>
            <AnimatePresence exitBeforeEnter>
                {!tapped && (
                    <motion.div
                        style={{
                            height: "100%",
                            width: "100%",
                        }}
                        onClick={() => {
                            setTapped(true);
                            setPlaying(true);
                        }}
                        key={"play"}
                        exit={{
                            opacity: 0,
                            scale: 0.5,
                            transition: {
                                duration: 0.1,
                            },
                        }}
                    >
                        <Animal_kidRead_play />
                    </motion.div>
                )}
                {tapped && (
                    <motion.div
                        style={{
                            height: "100%",
                            width: "100%",
                        }}
                        onClick={() => {
                            setTapped(false);
                            setPlaying(false);
                        }}
                        key={"pause"}
                        exit={{
                            scale: 0.5,
                            opacity: 0,
                            transition: {
                                duration: 0.1,
                            },
                        }}
                    >
                        <Animal_kidRead_pause />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
