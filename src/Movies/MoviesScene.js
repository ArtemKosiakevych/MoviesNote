import React from 'react'
import { LayoutAnimation, AsyncStorage } from 'react-native'
import { observer } from 'mobx-react/native'
import { create } from 'mobx-persist'

import State from './MoviesState'
import MoviesView from './MoviesView'

const OMoviesView = observer(MoviesView)
const hydrate = create({ storage: AsyncStorage })
hydrate('movies', State)

@observer
export default class MoviesScene extends React.Component {
  /* eslint-disable class-methods-use-this */
  componentDidUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  onAdd = () => {
    const movie = State.text
    if (movie !== '') {
      State.addMovie(movie)
      State.onChangeText('')
    }
  }

  onDelete = (rowData) => {
    State.deleteMovie(rowData)
  }

  render() {
    return (
      <OMoviesView
        state={State}
        onAdd={this.onAdd}
        onDelete={this.onDelete}
      />
    )
  }
}
