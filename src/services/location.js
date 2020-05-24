import axios from 'axios'

const apiKey = 'AIzaSyDovFJnSQpwGieJxNON65l11PKSWGbo9jw'

export const getLocation = async location => axios.get(
  `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${location}&inputtype=textquery&fields=name,geometry&key=${apiKey}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
)
