import React, {useState} from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';
import Map from '../../components/Map'
import { getId } from '../../utils'
import { googleMapURL } from '../../services/maps'
import {getLocation} from '../../services/location'

const mapProps = {
  googleMapURL: googleMapURL ,
  loadingElement: <div style={ { height: `100%` } }/> ,
  containerElement: <div style={ { height: `400px` } }/> ,
  mapElement: <div style={ { height: `100%` } }/>
}


const Home = () => {
  const [markers, setMarkers] = useState({})
  const [suggestions, setSuggestions] = useState([])
  let timeout

  const onMapClick = ({ latLng }) => {
    const lat = latLng.lat()
    const lng = latLng.lng()
    const id = getId()
    setMarkers({...markers, [id]: { lat, lng }})
  }

  const onMarkerClick = (id) => {
    delete markers[id]
    setMarkers({ ...markers})
  }

  const onInputChange = ({ target }) => {
    const { value } = target
    clearTimeout(timeout)
    timeout = setTimeout(async () => {
      const response = await getLocation(value)
    }, 800)

  }


  return (
    <main>
      <Autocomplete
        options={suggestions}
        renderInput={(params) => <TextField {...params} label="Search" variant="filled" fullWidth onChange={onInputChange}/>}
      />
      <Map
        markers={markers}
        onMapClick={ onMapClick }
        onMarkerClick={onMarkerClick}
        {...mapProps}
      />
    </main>
  )
}

export default Home
