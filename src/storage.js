import { observable, action, } from 'mobx'
import { persist } from 'mobx-persist'
import autobind from 'autobind-decorator'

@autobind
class store {
  @persist('list') @observable movies = [];

  @action addMovie(val){
    this.movies.push(val)
  }

  @action deleteMovie(index){
    this.movies.splice(index, 1)
  }
}

export default new store();
