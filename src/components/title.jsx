import React from 'react';
import { motion } from 'framer-motion';

function CustomTitle() {
  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      <div className='text-4xl lg:text-[2.6rem] md:font-extrabold lg:leading-[2.9rem] font-bold text-white leading-10'>
        <motion.span
          className='text-green-400 mx-2'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          Web
        </motion.span>
        <motion.span
          className='text-pink-500 mx-2'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          Technologies
        </motion.span>
        <br></br>
      </div>
    </div>
  );
}

export default CustomTitle;
