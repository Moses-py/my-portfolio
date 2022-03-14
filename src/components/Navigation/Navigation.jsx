import { motion } from 'framer-motion';
import React from 'react';
import {BsFacebook, BsLinkedin, BsGithub} from "react-icons/bs"
import {useNavigate, useLocation} from "react-router-dom"
// import { navigationGridVariant, navigationGridChildVariant, navigationLinkVariant } from './animation';
import {NavigationContainer, NavigationLink, NavigationLinkTag} from "./style"


export const Navigation = () => {
  function usePathPattern() {

    const { pathname } = useLocation();

   return pathname
}
    const navigate = useNavigate()
    return <>
        <NavigationContainer>
          <div className='logoContainer'>
            <motion.img initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.2, duration: 0.8}} onClick={() => navigate("/")} src="/images/my logo2.png" alt="logo" className='logo' />
          </div>
          <nav className="navContent">
            <motion.ul>
              <NavigationLink initial={{x: -300}} animate={{x: 0}} transition={{duration: 0.3, delay: 0.2}} onClick={()=> navigate("/")} className="linklist"><NavigationLinkTag className='links'>Home</NavigationLinkTag></NavigationLink>
              <NavigationLink initial={{x: -300}} animate={{x: 0}} transition={{duration: 0.3, delay: 0.4}} onClick={()=> navigate("/about")} style={{borderRight: usePathPattern() === "/about" && "5px solid #08fdd8"}} ><NavigationLinkTag className='links'>About Me</NavigationLinkTag></NavigationLink>
              <NavigationLink initial={{x: -300}} animate={{x: 0}} transition={{duration: 0.3, delay: 0.6}} onClick={()=> navigate("/skill")}  style={{borderRight: usePathPattern() === "/skill" && "5px solid #08fdd8"}} ><NavigationLinkTag className='links'>My Skills</NavigationLinkTag></NavigationLink>
              <NavigationLink initial={{x: -300}} animate={{x: 0}} transition={{duration: 0.3, delay: 0.8}} onClick={()=> navigate("/works")}  style={{borderRight: usePathPattern() === "/works" && "5px solid #08fdd8"}}><NavigationLinkTag className='links'>My Works</NavigationLinkTag></NavigationLink>
              <NavigationLink initial={{x: -300}} animate={{x: 0}} transition={{duration: 0.3, delay: 1}} onClick={()=> navigate("/contact")}  style={{borderRight: usePathPattern() === "/contact" && "5px solid #08fdd8"}}><NavigationLinkTag className='links'>Contact Me</NavigationLinkTag></NavigationLink>
            </motion.ul>
          </nav>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.5, duration: 1.5}} className="socials">
            <hr />
            <motion.span animate="visible" initial="hidden" ><BsFacebook className='socialIcon' /></motion.span>
            <motion.span animate="visible" initial="hidden" ><BsGithub className='socialIcon' /></motion.span>
            <motion.span animate="visible" initial="hidden" ><BsLinkedin className='socialIcon' /></motion.span>
            <hr />
          </motion.div>
        </NavigationContainer>
    </>
}

