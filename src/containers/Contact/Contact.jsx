import React, {useEffect, useState} from 'react'
import { ContactBoardImageContainer, ContactContainer, ContactGrid, FloatingMapInfo, GetInTouchContainer } from './style'
import { motion } from 'framer-motion'
import {SiMinutemailer} from "react-icons/si"
import {IoLogoWhatsapp} from "react-icons/io"
import {MdFeedback} from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"
import { contactChildVariant } from './animation'
import Map from '../GoogleMap/Map'
import LoadScreen from '../LoadScreen'
import { PageContainer } from '../Skills/style'
import { Navigation } from '../../components/Navigation/Navigation'
import FeedbackForm from './FeedbackForm'
import useWindowDimensions from '../../components/window/dimensions';
import MobileNav from '../../components/Navigation/MobileNav';
import MenuIcon from '@mui/icons-material/Menu';
import { hamburgerStyle } from '../../components/Navigation/hamburgerStyle';

export const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const mobileSizeChange = 1300;

  const {width} = useWindowDimensions()
  useEffect(()=> {
    setTimeout(() => {
      setLoading(false)
    }, 600)
  }, [])
  
  return (
    <>
    {showForm && 
    <FeedbackForm closeForm={setShowForm} /> }
    {loading ? <LoadScreen /> : 
    <PageContainer>
      <MobileNav toggle={setShowNav} isOpen={showNav} />
      {width < mobileSizeChange ? <MenuIcon onClick={() => setShowNav(true)} style={hamburgerStyle} /> : 
      <Navigation /> }
      <ContactContainer>
        <GetInTouchContainer>
          <div className='contactTextContainer'>
          <motion.p className='contactTextSmall' animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.8, delay: 0.8}}> Fancy a chat? Let's grab some coffee. </motion.p>
          <motion.p animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.8, delay: 0.5}} className='contactText'>Get in touch</motion.p>
          </div>
        <ContactGrid animate={{opacity: 1, marginTop: 0}} initial={{opacity: 0, marginTop: "2rem"}} transition={{duration: 0.8, delay: 0.8}}>
        <motion.div className='navigationContactGrid'>
          <motion.a href="https://wa.me/+2348100676657?text=Hi%20there%20,%20let's%20talk%20business" variants={contactChildVariant} animate="ready" initial="before" className='navigationContactItem chatContact'>
            <div>
              <motion.span>
                    <IoLogoWhatsapp className='navigationContactIcon' />
              </motion.span>
              <motion.p >Send <br /> a Chat</motion.p>
            </div>
          </motion.a>

          <motion.div variants={contactChildVariant} onClick={() => setShowForm(!showForm)} animate="ready" initial="before" className='navigationContactItem chatContact'>
            <div>
              <motion.span>
                    <MdFeedback  className='navigationContactIcon' />
              </motion.span>
              <motion.p >Leave a <br /> Feedback</motion.p>
            </div>
          </motion.div>

          <motion.a href="mailto:dantereus1@gmail.com" variants={contactChildVariant} animate="ready" initial="before" className='navigationContactItem chatContact'>
            <div>
              <motion.span>
                    <SiMinutemailer  className='navigationContactIcon' />
              </motion.span>
              <motion.p >Send <br /> a Mail</motion.p>
            </div>
          </motion.a>

          <motion.a href="tel:+2348100676657" variants={contactChildVariant} animate="ready" initial="before" className='navigationContactItem chatContact'>
            <div>
              <motion.span>
                    <FaPhoneAlt  className='navigationContactIcon' />
              </motion.span>
              <motion.p >Give <br /> a Ring</motion.p>
            </div>
          </motion.a>
        </motion.div>
        </ContactGrid>
        </GetInTouchContainer>
        <ContactBoardImageContainer animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.8, delay: 1.3}}>
          <FloatingMapInfo>
            <p>Moses Chukwunekwu</p>
            <p>Uyo, Nigeria, 520101</p>
            <p>17/2, 82-786 Ekpri Nsukarra</p>
            <p className='mail'>
              <span>@</span> : dantereus1@gmail.com
            </p>
          </FloatingMapInfo>
          <Map />
       </ContactBoardImageContainer>
      </ContactContainer>
    </PageContainer>
    }
    </>
  )
}