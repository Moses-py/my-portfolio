import React from 'react';
import { motion } from 'framer-motion';
import { HeaderBox } from './style';
import { logoVariant } from "../../containers/Homepage/animations"

export const Header = () => {
  return (
  <HeaderBox className="header">
    <motion.div variants={logoVariant} animate='visible' initial="hidden" className="logoContainer">
      <img src="/images/my logo2.png" alt='logo' />
      <div className="logoText">
        <motion.span className='name' initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{delay: 1.8}} >Moses Chukwunekwu</motion.span>
        <motion.p className='role' initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} transition={{delay: 2.2}}>Software Developer</motion.p>
      </div>
    </motion.div>
</HeaderBox>
)
}