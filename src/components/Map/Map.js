import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const Map = ({ markers, onMapClick, mapProps, onMarkerClick }) => {
  const renderMarker = (markerKey) => {
    const {lat, lng } = markers[markerKey]
    return <Marker key={markerKey} onClick={() => onMarkerClick(markerKey)} position={ { lat, lng } }/>
  }

  const renderMarkers = () => {
    if(!markers) {
      return null
    }

    return (
      <>
        {Object.keys(markers).map(renderMarker)}
      </>
    )
  }
  return (
    <GoogleMap
      onClick={ onMapClick }
      defaultZoom={ 8 }
      defaultCenter={ { lat: -34.397, lng: 150.644 } }
      { ...mapProps }
  >
    { renderMarkers() }
  </GoogleMap>
  )
}
export default withScriptjs(withGoogleMap(Map))

