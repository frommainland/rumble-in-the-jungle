import { motion, useViewportScroll, useTransform } from "framer-motion";

export const Example = () => {
    const { scrollXProgress } = useViewportScroll();
    const scale = useTransform(scrollXProgress, [0, 1], [1, 2]);

    return (
        <motion.div style={{
            width: 200,
            height: 200,
            backgroundColor: 'red',
            scale: scale,
            position: 'fixed'
        }}>
        </motion.div>
    );
};