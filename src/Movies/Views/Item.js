import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import PropTypes from 'prop-types'
import Swipeout from 'react-native-swipeout';

import Colors from '../../theme/Colors'
import Images from '../../theme/Images'
import styles from '../styles'

const Item = ({ 
    rowData, 
    onDelete
}) => {
    var swipeoutBtns = [
        {
            text: 'Delete',
            type: 'delete',
            onPress: () => onDelete(rowData)
        }
    ]

    return (
        <Swipeout autoClose backgroundColor={Colors.spaceGreyDark} right={swipeoutBtns}>
            <TouchableOpacity style={styles.listItem}>
                <Image style={styles.icon} source={Images.clapperboard} />
                <Text style={styles.listItemText}>{rowData}</Text>
            </TouchableOpacity>
        </Swipeout>
    )
}

Item.propTypes = {
    rowData: PropTypes.string,
    onDelete: PropTypes.func,
}

export default Item
