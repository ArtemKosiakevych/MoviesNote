// @flow

import { observable, action } from 'mobx'
import { persist } from 'mobx-persist'

class MoviesState {
    @persist('list') @observable movies: Array<string> = []
    @observable query: string = ''

    @action addMovie(val: string) {
      this.movies.push(val)
    }

    @action deleteMovie(item: string) {
      this.movies = this.movies.filter(i => i !== item)
    }

    @action onChangeText = (val: string) => {
      this.query = val
    }
}

const store = new MoviesState()

export default store
