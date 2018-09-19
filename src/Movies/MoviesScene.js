// @flow

import React from 'react'
import { LayoutAnimation, AsyncStorage } from 'react-native'
import { observer } from 'mobx-react/native'
import { create } from 'mobx-persist'

import State from './MoviesState'
import MoviesView from './MoviesView'

const OMoviesView = observer(MoviesView)
const hydrate = create({ storage: AsyncStorage })
hydrate('movies', State)

type Props = {

}

@observer
export default class MoviesScene extends React.Component<Props> {
  /* eslint-disable class-methods-use-this */
  componentDidUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  onAdd = () => {
    const movie = State.query
    if (movie !== '') {
      State.addMovie(movie)
      State.onChangeText('')
    }
  }

  onDelete = (movie: string) => {
    State.deleteMovie(movie)
  }

  onClick = (movie: string) => {
    // navigate to Movie scene
  }

  render() {
    return (
      <OMoviesView
        state={State}
        onAdd={this.onAdd}
        onDelete={this.onDelete}
        onClick={this.onClick}
      />
    )
  }
}
