import "./Animal_sound.css";
import { motion } from "framer-motion";
import mp3 from "../sound/elephant1.mp3";
import { useAudio } from "react-use";

export default function Animal_sound(props) {
    const offset = props.offset;

    const [audio, state, controls, ref] = useAudio({
        // src: "../sound/elephant1.mp3",
        src: mp3,
        autoPlay: true,
    });

    return (
        <div>
            <div>
                {audio}
                <pre>{JSON.stringify(state, null, 2)}</pre>
                <button onClick={controls.pause}>Pause</button>
                <button onClick={controls.play}>Play</button>
                <br />
                <button onClick={controls.mute}>Mute</button>
                <button onClick={controls.unmute}>Un-mute</button>
                <br />
                <button onClick={() => controls.volume(0.1)}>
                    Volume: 10%
                </button>
                <button onClick={() => controls.volume(0.5)}>
                    Volume: 50%
                </button>
                <button onClick={() => controls.volume(1)}>Volume: 100%</button>
                <br />
                <button onClick={() => controls.seek(state.time - 5)}>
                    -5 sec
                </button>
                <button onClick={() => controls.seek(state.time + 5)}>
                    +5 sec
                </button>
            </div>
            <svg
                width="111"
                height="111"
                viewBox="0 0 111 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M55.5 110C85.5995 110 110 85.5995 110 55.5C110 39.1234 102.778 24.4348 91.342 14.4429C90.7004 13.8823 90.0455 13.3365 89.3779 12.806C80.0759 5.41478 68.3049 1 55.5 1C25.4005 1 1 25.4005 1 55.5C1 85.5995 25.4005 110 55.5 110ZM55.5 111C86.1518 111 111 86.1518 111 55.5C111 38.8228 103.644 23.8636 92 13.6899C91.3467 13.119 90.6798 12.5633 90 12.0231C80.5275 4.49635 68.5388 0 55.5 0C24.8482 0 0 24.8482 0 55.5C0 86.1518 24.8482 111 55.5 111Z"
                    id="Text"
                />
                <text
                    style={{
                        fill: "white",
                        fontFamily: "MagnatHead-ExtraBold",
                    }}
                >
                    <textPath href="#Text" startOffset="100">
                        Elephant sound
                    </textPath>
                </text>
            </svg>
        </div>
    );
}
