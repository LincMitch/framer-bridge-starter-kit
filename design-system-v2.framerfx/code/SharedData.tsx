// @ts-ignore
import { createData } from "framer"
export const useData = createData(false)

export const animations = {
    slideIn: {
        transition: { duration: 0.5 },
        initial: { x: 375 },
        animate: { x: 0 },
        exit: { x: -375 },
    },
    fadeIn: {
        transition: { duration: 0.5 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    },
}
