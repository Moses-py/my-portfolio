import React, {useEffect, useState} from 'react'
import LoadScreen from '../LoadScreen';
import { Navigation } from '../../components/Navigation/Navigation'
import Portfolio from './portfolio'
import { ListingContainer } from './style'
import useWindowDimensions from '../../components/window/dimensions';
import { hamburgerStyle } from '../../components/Navigation/hamburgerStyle';
import MobileNav from '../../components/Navigation/MobileNav';
import MenuIcon from '@mui/icons-material/Menu';
function PortfolioListing() {
    const [loading, setLoading] = useState(true);
    const {width} = useWindowDimensions()
    const [showNav, setShowNav] = useState(false)
    const mobileSizeChange = 1300;

    useEffect(()=> {
      setTimeout(() => {
        setLoading(false)
      }, 600)
  
    }, [])
  return (
    <>
        {loading ? <LoadScreen /> : 
        <ListingContainer>
          <MobileNav toggle={setShowNav} isOpen={showNav} />
          {width < mobileSizeChange ? <MenuIcon onClick={() => setShowNav(true)} style={hamburgerStyle} /> : 
            <Navigation /> }
            <Portfolio />
        </ListingContainer>
        }
    </>
  )
}

export default PortfolioListing