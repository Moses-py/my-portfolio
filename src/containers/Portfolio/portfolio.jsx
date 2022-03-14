import React from 'react'
import "./portfolio.scss"
import { motion } from 'framer-motion'
import PortfolioTile from './PortfolioTile'

function Portfolio() {
  return (
      <>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5, duration: 1}} className="flipContainer">
            <PortfolioTile 
                link="https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
                title="MOUNTAIN"
                flipType="flip-vertical"
             />
            <PortfolioTile 
                link="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
                title="LAKE"
             />
            <PortfolioTile 
                link="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
                title="OCEAN"
                flipType="flip-vertical"
             />
            <PortfolioTile 
                link="https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
                title="MOUNTAIN"
             />
            <PortfolioTile 
                link="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="RIVER"
                flipType="flip-vertical"
             />
            <PortfolioTile 
                link="https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
                title="FOREST"
             />
            <PortfolioTile 
                link="https://images.pexels.com/photos/34950/pexels-photo.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
                title="TRACK"
                flipType="flip-vertical"
             />
            <PortfolioTile 
                link="https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
                title="MOUNTAIN"
             />
            <PortfolioTile 
                link="https://images.pexels.com/photos/34546/sunset-lake-landscape-summer.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
                title="SWAMP"
                flipType="flip-vertical"
             />
            <PortfolioTile 
                link="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="BEACH"
             />
            <PortfolioTile 
                link="https://images.pexels.com/photos/1167021/pexels-photo-1167021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="RESORT"
                flipType="flip-vertical"
             />
            <PortfolioTile 
                link="https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
                title="MOUNTAIN"
             />
        </motion.div>
      </>
    )
}

export default Portfolio