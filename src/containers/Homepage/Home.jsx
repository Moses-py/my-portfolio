import React, {useEffect, useState} from 'react';

import { FlexContainer, HomeContainer, NavigationBox, TextBox } from './style';
import { Button } from '../../components/UI/Button';

import {AiOutlineArrowRight} from "react-icons/ai"
import {BsFacebook, BsLinkedin,BsGithub} from "react-icons/bs"
import {IoShareSocialSharp} from "react-icons/io5"
import {IoIosContact} from "react-icons/io"
import {MdWork, MdContactMail} from "react-icons/md"
import {motion} from "framer-motion"
import {
   strongVariant,
   paragraphVariant,
   navigationParagraph,
   navigationVariant, 
   socialIconVariant, 
   socialVariant, 
   navigationTextVariant, 
   navigationParagraphHidden, 
   navigationOverlayVariant
  } from "./animations"
import {Header} from '../../components/UI/Header';

import {useNavigate} from "react-router-dom"
import LoadScreen from '../LoadScreen';

export const Home = ({setNavigation, isNavigationOpen}) => {
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setTimeout(() => {
      setLoading(false)
    }, 600)
  }, [])
  const navigate = useNavigate()
  return <>
    {loading ? <LoadScreen /> : 
    <HomeContainer>
        <Header className="header" />
        <FlexContainer>
          <TextBox>
            <motion.div className="landingText" animate={{opacity: 1, y: 0}} initial={{opacity: 0, y: -50}} transition={{type: "spring", stiffness: 30, delay: 0.5}} >
              <motion.p variants={paragraphVariant} animate="visible" initial="hidden">
                <motion.strong variants={strongVariant} animate="visible" initial="hidden" >Highly-Motivated</motion.strong> and <motion.strong variants={strongVariant} animate="visible" initial="hidden"> Result-Driven </motion.strong> with hands-on experience in crafting <motion.strong variants={strongVariant} animate="visible" initial="hidden">beautiful</motion.strong> user interfaces.
              </motion.p>
              <div className="buttonContainer">
                <a href='/CV/Moses_CV.pdf' download="Moses_CV">
                  <Button title="Get my CV" />
                </a>
              </div>
            </motion.div>
            <motion.div variants={socialVariant} animate="visible" initial="hidden" className="socials">
              <hr />
              <motion.span variants={socialIconVariant} animate="visible" initial="hidden" ><BsFacebook className='socialIcon' /></motion.span>
              <motion.span variants={socialIconVariant} animate="visible" initial="hidden" ><BsGithub className='socialIcon' /></motion.span>
              <motion.span variants={socialIconVariant} animate="visible" initial="hidden" ><BsLinkedin className='socialIcon' /></motion.span>
              <hr />
            </motion.div>
          </TextBox>
          <NavigationBox>
            <motion.div onClick={() => navigate("/about")} variants={navigationVariant} whileHover= 'hover' animate="visible" initial="hidden" className="navigation about">
              <motion.div className='aboutOverlay' variants={navigationOverlayVariant}></motion.div>
              <motion.div className='navigationTextContainer' variants={navigationTextVariant} >
                <div className='navigationIconContainer'>
                  <IoIosContact className='navigationIcon' />
                </div>
                <motion.p className='navigationText' variants={navigationTextVariant}>A Patrick?... A SpongeBob? Come find out what makes this little man tinker </motion.p> 
              </motion.div>
              <motion.p className='navigationTitle' variants={navigationParagraph}>
                About Me 
              </motion.p>
              <AiOutlineArrowRight className='arrowIcon'/>
              <motion.p className='navigationTitle' variants={navigationParagraphHidden}>
                View
              </motion.p>
            </motion.div>

            <motion.div onClick={() => navigate("/works")} variants={navigationVariant}  whileHover={['hover', {backgroundColor: "hsla(14, 51%, 30%, 0.568)"}]} animate="visible" initial="hidden" className="navigation portfolio">
            <motion.div className='portfolioOverlay' variants={navigationOverlayVariant}></motion.div>
              <motion.div className='navigationTextContainer' variants={navigationTextVariant} >
                <div className='navigationIconContainer'>
                  <MdWork className='navigationIcon' />
                </div>
                <motion.p className='navigationText' variants={navigationTextVariant}>Lots of Classy Projects, plenty to see. Feast your eyes on some of 'em.</motion.p> 
              </motion.div>
              <motion.p className='navigationTitle' variants={navigationParagraph}>
                Portfolio
              </motion.p>
              <AiOutlineArrowRight className='arrowIcon'/>
              <motion.p className='navigationTitle' variants={navigationParagraphHidden}>
                View
              </motion.p>
            </motion.div>

            <motion.div onClick={() => navigate("/contact")} variants={navigationVariant} whileHover={['hover', {backgroundColor: "hsla(337, 86%, 30%, 0.227)"}]} animate="visible" initial="hidden" className="navigation contact">
            <motion.div className='contactOverlay' variants={navigationOverlayVariant}></motion.div>
              <motion.div className='navigationTextContainer' variants={navigationTextVariant} >
                <div className='navigationIconContainer'>
                  <MdContactMail className='navigationIcon' />
                </div>
                <motion.p className='navigationText' variants={navigationTextVariant}>Let's talk over a cup of coffee. Reach out, don't be shy.</motion.p> 
              </motion.div>
              <motion.p className='navigationTitle' variants={navigationParagraph}>
                Contact 
              </motion.p>
              <AiOutlineArrowRight className='arrowIcon'/>
              <motion.p className='navigationTitle' variants={navigationParagraphHidden}>
                View
              </motion.p>
            </motion.div>

            <motion.div onClick={() => navigate("/skill")} variants={navigationVariant} whileHover={['hover', {backgroundColor: "hsla(166, 96%, 30%, 0.239)"}]} animate="visible" initial="hidden" className="navigation socials">
            <motion.div className='skillsOverlay' variants={navigationOverlayVariant}></motion.div>
              <motion.div className='navigationTextContainer' variants={navigationTextVariant} >
                <div className='navigationIconContainer'>
                  <IoShareSocialSharp className='navigationIcon' />
                </div>
                <motion.p className='navigationText' variants={navigationTextVariant}>I've got quite the arsenal up my sleeves. check 'em out.</motion.p> 
              </motion.div>
              <motion.p className='navigationTitle' variants={navigationParagraph}>
                Skills 
              </motion.p>
              <AiOutlineArrowRight className='arrowIcon'/>
              <motion.p className='navigationTitle' variants={navigationParagraphHidden}>
                View
              </motion.p>
            </motion.div>
          </NavigationBox>
        </FlexContainer>
    </HomeContainer>
}
  </>;
}