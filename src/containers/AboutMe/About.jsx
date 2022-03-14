import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import {AboutContainer, AboutSection, SkillCanvas} from "./style"
import Skills from '../../TagCanvas';
import LoadScreen from '../LoadScreen';
import { PageContainer } from '../Skills/style';
import { Navigation } from '../../components/Navigation/Navigation';
import useWindowDimensions from '../../components/window/dimensions';
import MobileNav from '../../components/Navigation/MobileNav';
import MenuIcon from '@mui/icons-material/Menu';
import { hamburgerStyle } from '../../components/Navigation/hamburgerStyle';

export const About = () => {
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false)
  const mobileSizeChange = 1300;

  const {width} = useWindowDimensions()
  useEffect(()=> {
    setTimeout(() => {
      setLoading(false)
    }, 600)
  }, [])


  return <>
    {loading ? <LoadScreen /> :
    <PageContainer>
      <MobileNav toggle={setShowNav} isOpen={showNav} />
      {width < mobileSizeChange ? <MenuIcon onClick={() => setShowNav(true)} style={hamburgerStyle} /> : 
      <Navigation /> }
      <AboutContainer>
        <AboutSection>
          <motion.h1 initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ delay: 0.2, duration: 1 }} className='aboutHeading'>Who am I?</motion.h1>
          <motion.p initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ delay: 0.6, duration: 1 }} className='aboutText'>
            <p>
              I'm Moses, A Software Developer located somewhere in the southern suburbs of Nigeria. I love Coding, it sure does get me out of bed in the morning. I do have a deep passion for creating intuitive and dynamic user experiences.
            </p>
            <p>
                I consider myself a problem solver, an independent freak with high attention to detail. Big Fan of COD, outdoor activities, Extreme sports <em>(only on Television lol...)</em>
            </p>
            <p>
                My Tentacles connect both the Frontend spectrum and Backend Technologies. Needless to say, I really enjoy working on ambitious projects with positive people.    
            </p>
          </motion.p>
        </AboutSection>
        <SkillCanvas>
          <Skills />
        </SkillCanvas>
      </AboutContainer>
    </PageContainer>
}
  </>
}

