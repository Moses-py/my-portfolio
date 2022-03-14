import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion';
import {SkillContainer, SkillSection, SkillChart, JourneySection, PageContainer} from "./style"
import { Journey } from './Journey';
import LoadScreen from '../LoadScreen';
import { Navigation } from '../../components/Navigation/Navigation';
import useWindowDimensions from '../../components/window/dimensions';
import MobileNav from '../../components/Navigation/MobileNav';
import MenuIcon from '@mui/icons-material/Menu';
import { hamburgerStyle } from '../../components/Navigation/hamburgerStyle';

export const Skill = () => {
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false)
  const {width} = useWindowDimensions();
  const mobileSizeChange = 1300;
  useEffect(()=> {
    setTimeout(() => {
      setLoading(false)
    }, 600)
  }, [])


  return (
      <>
      {loading ? <LoadScreen />: 
      <PageContainer>
        <MobileNav toggle={setShowNav} isOpen={showNav} />
        {width < mobileSizeChange ? <MenuIcon onClick={() => setShowNav(true)} style={hamburgerStyle} /> :
        <Navigation /> }
        <SkillContainer>
          <SkillSection>
            <motion.h1 initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ delay: 0.2, duration: 1 }} className='skillHeading'>Skills & <br /> Experience</motion.h1>
            <motion.p initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ delay: 0.6, duration: 1 }} className='skillText'>
              <p>
              In the last 4 years, I’ve had the opportunity to work for agencies remotely, as well as startups, and even collaborated with talented stars to create web products for both business and consumer use.
              </p>
              <p>
              I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts
              </p>
              <p>
              I also have full-stack developer experience with popular backend technologies (Node JS, Express, Mongo DB, among others) </p>
            </motion.p>
          </SkillSection>
          <SkillChart>
            <div className='chart'>
                <span>Frontend</span>
                <footer>
                    <motion.div initial={{width: 0}} animate={{width: "95%"}} transition={{duration: 1.1, ease: "easeInOut"}}  data-width="95%" style={{background: "#08fdd8", height: "100%"}}></motion.div>
                </footer>
            </div>

            <div className='chart'>
                <span>Back-end</span>
                <footer>
                    <motion.div initial={{width: 0}} animate={{width: "85%"}} transition={{duration: 1.1, ease: "easeInOut"}} data-width="85%" style={{background: "rgb(255, 34, 83)", height: "100%"}}></motion.div>
                </footer>
            </div>

            <div className='chart'>
                <span>React JS</span>
                <footer>
                    <motion.div initial={{width: 0}} animate={{width: "80%"}} transition={{duration: 1.1, ease: "easeInOut"}} data-width="90%" style={{ background: "rgb(210, 108, 213)", height: "100%"}}></motion.div>
                </footer>
            </div>

            <div className='chart'>
                <span>Node JS</span>
                <footer>
                    <motion.div initial={{width: 0}} animate={{width: "90%"}} transition={{duration: 1.1, ease: "easeInOut"}} data-width="88%" style={{ background: "#ee7652b6", height: "100%"}}></motion.div>
                </footer>
            </div>

            <JourneySection>
                <Journey 

                    role="Frontend Developer" 
                     company="Garmatsch Software" 
                     date="2021 - Present" 
                     description="A responsive, SEO Optimized, single-page application with Server-side rendering enabling searching and visualization of data from Real estate databases"
                / >
                <Journey 
                    role="Backend Developer" 
                     company="McMakler GmBH" 
                     date="07/2021 - 01/2022" 
                     description="A responsive, SEO Optimized, single-page application with Server-side rendering enabling searching and visualization of data from Real estate databases"
                / >
                
                <Journey 
                    role="Fullstack Developer" 
                     company="Kodegenic Technologies" 
                     date="2018 - 2020" 
                     description="A responsive, SEO Optimized, single-page application with Server-side rendering enabling searching and visualization of data from Real estate databases"
                / >
                
                <Journey 
                    role="Backend Developer Intern" 
                     company="Somewhere far away :D" 
                     date="2015 - 2017" 
                     description="A responsive, SEO Optimized, single-page application with Server-side rendering enabling searching and visualization of data from Real estate databases"
                / >
            </JourneySection>
          </SkillChart>
        </SkillContainer>
      </PageContainer>
      }
  </>
  )
}

