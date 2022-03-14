import React from 'react'
import "./style"
import { motion } from 'framer-motion'
import {BsFacebook, BsLinkedin, BsGithub} from "react-icons/bs"
import { MobileNavContainer, NavigationLink, NavigationLinkTag } from './style'
import {useNavigate, useLocation} from "react-router-dom"
import CancelIcon from '@mui/icons-material/Cancel';

function MobileNav({toggle, isOpen}) {

  function usePathPattern() {

    const { pathname } = useLocation();

   return pathname
}
    const navigate = useNavigate()

    const closeMenuStyle = {
      position: "absolute",
      color: "white",
      fontSize: "2rem",
      top: "2%",
      right: "2%"
  
    }

    const navToggleStyle = {
      display: `${isOpen ? "flex" : "none"}`,
    }
  return (
    <>
        <MobileNavContainer initial={{x: 300 }} animate={{x: 0}} transition ={{duration: 1}} openNav={isOpen} style={navToggleStyle} >
          <CancelIcon onClick={() => toggle(false)} style={closeMenuStyle} />
          <div className='logoContainer'>
              <motion.img initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.2, duration: 0.8}} onClick={() => navigate("/")} src="/images/my logo2.png" alt="logo" className='logo' />
            </div>
            <nav className="navContent">
              <motion.ul>
                <NavigationLink initial={{x: 300}} animate={{x: 0}} transition={{duration: 0.3, delay: 0.2}} onClick={()=> navigate("/")} className="linklist"><NavigationLinkTag className='links'>Home</NavigationLinkTag></NavigationLink>
                <NavigationLink initial={{x: 300}} animate={{x: 0}} transition={{duration: 0.3, delay: 0.4}} onClick={()=> navigate("/about")} style={{borderLeft: usePathPattern() === "/about" && "5px solid #08fdd8"}} ><NavigationLinkTag className='links'>About Me</NavigationLinkTag></NavigationLink>
                <NavigationLink initial={{x: 300}} animate={{x: 0}} transition={{duration: 0.3, delay: 0.6}} onClick={()=> navigate("/skill")}  style={{borderLeft: usePathPattern() === "/skill" && "5px solid #08fdd8"}} ><NavigationLinkTag className='links'>My Skills</NavigationLinkTag></NavigationLink>
                <NavigationLink initial={{x: 300}} animate={{x: 0}} transition={{duration: 0.3, delay: 0.8}} onClick={()=> navigate("/works")}  style={{borderLeft: usePathPattern() === "/works" && "5px solid #08fdd8"}}><NavigationLinkTag className='links'>My Works</NavigationLinkTag></NavigationLink>
                <NavigationLink initial={{x: 300}} animate={{x: 0}} transition={{duration: 0.3, delay: 1}} onClick={()=> navigate("/contact")}  style={{borderLeft: usePathPattern() === "/contact" && "5px solid #08fdd8"}}><NavigationLinkTag className='links'>Contact Me</NavigationLinkTag></NavigationLink>
              </motion.ul>
            </nav>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.5, duration: 1.5}} className="socials">
              <hr />
              <motion.span animate="visible" initial="hidden" ><BsFacebook className='socialIcon' /></motion.span>
              <motion.span animate="visible" initial="hidden" ><BsGithub className='socialIcon' /></motion.span>
              <motion.span animate="visible" initial="hidden" ><BsLinkedin className='socialIcon' /></motion.span>
              <hr />
            </motion.div>
        </MobileNavContainer>
    </>
  )
}

export default MobileNav