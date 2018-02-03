import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  AsyncStorage
} from 'react-native';
import store from './storage'
import { create } from 'mobx-persist'
const hydrate = create({ storage: AsyncStorage })
hydrate('movies', store)
import { observer } from 'mobx-react/native';
import Swipeout from 'react-native-swipeout';

import AwesomeList from 'react-native-awesome-list'
import styles from './styles'
import Colors from './Colors';

@observer
export default class MoviesNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  onAdd = () => {
    const movie = this.state.text
    if (movie !== '') {
      store.addMovie(movie)
      this.setState({ text: '' })
    }
  }

  onDelete = (rowData) => {
    store.deleteMovie(store.movies.indexOf(rowData))
  }

  renderItem = (rowData) => {
    var swipeoutBtns = [
      {
        text: 'Delete',
        type: 'delete',
        onPress: () => this.onDelete(rowData)
      }
    ]
    return (
      <Swipeout autoClose backgroundColor={Colors.spaceGreyDark} right={swipeoutBtns}>
        <View style={styles.listItem}>
          <Image style={styles.icon} source={require('./assets/clapperboard.png')} />
          <Text style={styles.listItemText}>{rowData}</Text>
        </View>
      </Swipeout>
    )
  }

  render() {
    return (
      <AwesomeList
        style={styles.main}
        headerHeight={140}     
        data={store.movies}
        disableScaleAnimation
        renderItem={this.renderItem}
        renderAnimatingHeader={()=> this.renderAnimatingHeader('HEADER')}
      />
    );
  }

  renderAnimatingHeader(title){
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
          onChangeText={(text) => this.setState({ text })}
        />
        <TouchableOpacity onPress={this.onAdd} style={styles.btnWrapper}>
          <Text style={styles.btnText}>ADD</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AppRegistry.registerComponent('MoviesNote', () => MoviesNote);
