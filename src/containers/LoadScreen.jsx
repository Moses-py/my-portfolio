import React from 'react'
import { motion } from 'framer-motion'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import useWindowDimensions from '../components/window/dimensions';
function LoadScreen() {
  const {width} = useWindowDimensions()
    let style = {
        height: "100vh",
        width: "100%",
        fontSize: `${width < 600 ? "1rem" : "1.5rem" }`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 1000,
        color: "white",
        textAlign: "center",
        fontWeight: 300,
        fontFamily: "Raleway, sans-serif"
    }

    const barStyle = {
      background: "-webkit-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"
    }

    const imageStyle = {
      height: "50px",
      width: "50px",
    }
  
    return (
      <motion.div style={ style }>
          <Box sx={{ width: '50%' }}>
            <img src='/images/my logo2.png' alt='logo' style={imageStyle} />
            <p style={{margin: "1.5rem 0"}}>Loading Awesomeness...</p>
            <LinearProgress style={barStyle} />
          </Box>
      </motion.div>
    );
} 

export default LoadScreen
