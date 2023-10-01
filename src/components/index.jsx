import React from 'react'
import { motion } from 'framer-motion'
import Card from "./card"
import Title from "./title"
import Footer from './footer'

const pageVariants = {
    initial: {
        opacity: 0,
        y: -50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    exit: {
        opacity: 0,
        y: -50,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

const cardVariants = {
    initial: {
        opacity: 0,
        scale: 0.5,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.2, // Delay the animation by 0.2 seconds
            ease: "easeInOut",
        },
    },
    exit: {
        opacity: 0,
        scale: 0.5,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

const index = () => {
    return (
        <div>
            <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Title></Title>
            </motion.div>

            <motion.div
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Card></Card>
            </motion.div>

            <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Footer></Footer>
            </motion.div>
        </div>
    )
}

export default index
