import React from 'react'
import { motion } from 'framer-motion'
export const Journey = ({role, company, date, description}) => {
  return (
    <motion.div className='journey journey2'                     
    initial={{opacity: 0}} 
    animate={{opacity: 1}}
    transition={{duration: 3}}>
        <p className='role'>{role}</p>
        <section>
          <p className='company'>{company}</p>
          <p className='period'>{date}</p>
        </section>
        <p className='desc'>
            {description}
        </p>
    </motion.div>
  )
}

