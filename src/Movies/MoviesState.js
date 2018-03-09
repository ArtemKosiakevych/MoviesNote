import { observable, action } from 'mobx'
import { persist } from 'mobx-persist'

class MoviesState {
    @persist('list') @observable movies = []
    @observable text = ''

    @action addMovie(val) {
      this.movies.push(val)
    }

    @action deleteMovie(item) {
      this.movies = this.movies.filter(i => i !== item)
    }

    @action onChangeText = (val) => {
      this.text = val
    }

    get text() {
      return this.text
    }
}

const store = new MoviesState()

export default store
