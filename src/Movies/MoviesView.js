import React from 'react'
import { View, StatusBar } from 'react-native'
import { observer } from 'mobx-react/native'
import PropTypes from 'prop-types'
import AwesomeList from 'react-native-awesome-list'
import styles from './styles'
import Header from './Views/Header'
import Item from './Views/Item'
const OAwesomeList = observer(AwesomeList)
const OHeader = observer(Header)
const OItem = observer(Item)

const MoviesView = ({ 
  state, 
  onAdd,
  onDelete
}) => {
  const renderHeader = () => {
    return (
      <OHeader
        text={state.text}
        onChangeText={state.onChangeText}
        onAdd={onAdd}
      />
    );
  };

  const renderItem = (rowData) => {
    return (
      <OItem
        rowData={rowData}
        onDelete={onDelete}
      />
    )
  }

  return (
    <View style={styles.main}>
      <StatusBar barStyle={"light-content"} />
      <OAwesomeList
        headerHeight={140}
        data={state.movies}
        disableScaleAnimation
        renderItem={renderItem}
        renderAnimatingHeader={renderHeader}
      />
    </View>
  );
};

MoviesView.propTypes = {
  state: PropTypes.any,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
}

export default MoviesView
