// @flow

import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import Swipeout from 'react-native-swipeout'
import i18n from 'react-native-i18n'
import Colors from '../../theme/Colors'
import Images from '../../theme/Images'
import styles from '../styles'

type Props = {
    rowData: string,
    onDelete: (string) => void,
}
const Item = ({
  rowData,
  onDelete,
}: Props) => {
  const swipeoutBtns = [
    {
      text: i18n.t('DELETE'),
      type: 'delete',
      onPress: () => onDelete(rowData),
    }]

  return (
        <Swipeout autoClose backgroundColor={Colors.spaceGreyDark} right={swipeoutBtns}>
            <TouchableOpacity style={styles.listItem}>
                <Image style={styles.icon} source={Images.clapperboard} />
                <Text style={styles.listItemText}>{rowData}</Text>
            </TouchableOpacity>
        </Swipeout>
  )
}

export default Item
