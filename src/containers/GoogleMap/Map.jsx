import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps"
import { mapStyleBig } from './styles'
import useWindowDimensions from '../../components/window/dimensions';

function SiteMap() {
  return (
    <GoogleMap 
      defaultZoom={13}
      defaultCenter={{lat: 5.028730, lng: 7.927710}}
      defaultOptions={{styles:  mapStyleBig}}
    >
      <Marker 
        position={{lat: 5.028730, lng: 7.927710}}
      />
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(SiteMap))

export default function Map() {
  const {width} = useWindowDimensions()
  const style ={
    height: `${width < 900 ? "60vh" : "100vh"}`,
    width: "100%",
  }

  return (
    <>
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCYOoKt29H5bPA3d41nxAOB76Hwcq6ou3Q`} 
        loadingElement={<div style={style} />}
        containerElement={<div style={style} />}
        mapElement={<div style={style} />}
      />
    </>
  )
}

