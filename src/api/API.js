// @flow

import { Alert } from 'react-native'
import Config from './Config'

export default async function getMovie(query: string, lang: string = 'en-US') {
  try {
    /* eslint-disable no-undef */
    const response = await fetch(`${Config.BASE_URL}search/movie?api_key=${Config.API_KEY}&language=${lang}&query=${query}`)
    const responseJson = await response.json()
    return responseJson
  } catch (error) {
    Alert.alert('Unexpected Error', error.toString())
  }
}
