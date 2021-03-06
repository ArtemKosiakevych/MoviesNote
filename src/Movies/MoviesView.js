// @flow

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

type Props = {
  state: Object,
  onAdd: () => void,
  onDelete: (string) => void,
  onClick: () => void,
}

const MoviesView = ({
  state,
  onAdd,
  onDelete,
  onClick,
}: Props) => {
  const { query, onChangeText } = state
  const renderHeader = () => {
    return (
      <OHeader
        text={query}
        onChangeText={onChangeText}
        onAdd={onAdd}
      />
    )
  }

  const renderItem = (rowData) => {
    return (
      <OItem
        rowData={rowData}
        onDelete={onDelete}
        onClick={onClick}
      />
    )
  }

  return (
    <View style={styles.main}>
      <StatusBar barStyle={'light-content'} />
      <OAwesomeList
        headerHeight={140}
        data={state.movies}
        disableScaleAnimation
        renderItem={renderItem}
        renderAnimatingHeader={renderHeader}
        contentContainerStyle={styles.padding}
      />
    </View>
  )
}

MoviesView.propTypes = {
  state: PropTypes.any,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
}

export default MoviesView
