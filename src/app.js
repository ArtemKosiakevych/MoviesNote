import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  LayoutAnimation,
  AsyncStorage
} from 'react-native';
import store from './storage'
import { create } from 'mobx-persist'
const hydrate = create({ storage: AsyncStorage })
hydrate('movies', store)
import {observer} from 'mobx-react/native';
import autobind from 'autobind-decorator';

import styles from './styles'
import Colors from './Colors';

@observer
export default class MoviesNote extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  @autobind
  onAdd(){
    const movie = this.state.text
    if (movie !== '') {
      store.addMovie(movie)
      this.setState({text: ''})
    }
  }

  @autobind
  onDelete(rowData){
    store.deleteMovie(store.movies.indexOf(rowData.item))
  }

  @autobind
  renderItem(rowData){
    return (
      <TouchableOpacity onPress={() => this.onDelete(rowData)} style={styles.listItem}>
        <Image style={styles.icon} source={require('./assets/clapperboard.png')}/>
        <Text style={styles.listItemText}>{rowData.item}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    let movies = store.movies
    return (
      <View style={styles.main}>
        <TextInput
          style={styles.inputText}
          autoFocus={true}
          autoCapitalize={'sentences'}
          placeholder={'Add movie...'}
          placeholderTextColor={Colors.spaceGrey}
          underlineColorAndroid={'transparent'}
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          />
        <TouchableOpacity onPress={this.onAdd} style={styles.btnWrapper}>
          <Text style={styles.btnText}>ADD</Text>
        </TouchableOpacity>
        <FlatList
          data={movies.reverse()}
          contentContainerStyle={styles.list}
          keyExtractor={(item, index) => index}
          renderItem={this.renderItem}
          ItemSeparatorComponent={()=> <View style={styles.separator}/>}
          />
      </View>
    );
  }
}

AppRegistry.registerComponent('MoviesNote', () => MoviesNote);
