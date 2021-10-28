import { motion } from "framer-motion";
import "./Animal_kidRead_pause.css";

export default function Animal_kidRead_pause() {
    return (
        <div className="pause">
            <motion.div
                className="pause-outsideShape"
                animate={{
                    rotate: 360,
                    transition: {
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear",
                    },
                }}
            >
                <motion.svg
                    width="60"
                    height="57"
                    viewBox="0 0 60 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                        scale: 1.1,
                        transition: {
                            ease: "easeInOut",
                            duration: 0.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                        },
                    }}
                >
                    <path
                        d="M9.86559 4.41351C10.6508 1.86435 13.0247 0.13966 15.6917 0.180574L29.9999 0.400071L44.3081 0.180575C46.9752 0.13966 49.349 1.86435 50.1342 4.41351L54.347 18.0892L58.9772 31.6293C59.8403 34.1532 58.9335 36.9438 56.7518 38.4783L45.0472 46.7109L33.6007 55.2986C31.467 56.8994 28.5328 56.8994 26.3992 55.2986L14.9526 46.7109L3.24803 38.4783C1.06629 36.9438 0.159568 34.1532 1.02264 31.6293L5.65287 18.0892L9.86559 4.41351Z"
                        fill="white"
                    />
                </motion.svg>
                <motion.svg
                    width="60"
                    height="57"
                    viewBox="0 0 60 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                        scale: 1.1,
                        transition: {
                            ease: "easeInOut",
                            duration: 0.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 0.1,
                        },
                    }}
                >
                    <path
                        d="M26.3992 1.70145C28.5329 0.100694 31.4671 0.100694 33.6008 1.70145L45.0473 10.2892L56.7519 18.5217C58.9336 20.0563 59.8403 22.8469 58.9773 25.3708L54.347 38.9108L50.1343 52.5866C49.3491 55.1357 46.9752 56.8604 44.3082 56.8195L30 56.6L15.6918 56.8195C13.0248 56.8604 10.6509 55.1357 9.86567 52.5866L5.65295 38.9108L1.02273 25.3708C0.15965 22.8469 1.06638 20.0563 3.24811 18.5217L14.9527 10.2892L26.3992 1.70145Z"
                        fill="white"
                    />
                </motion.svg>
            </motion.div>
            <svg
                className="pause-insideShape"
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="3" height="12" rx="1.5" fill="#005A14" />
                <rect x="7" width="3" height="12" rx="1.5" fill="#005A14" />
            </svg>
        </div>
    );
}
