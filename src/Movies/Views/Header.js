import React from 'react'
import { View, TouchableOpacity, TextInput, Text } from 'react-native'
import PropTypes from 'prop-types'
import i18n from 'react-native-i18n';

import Colors from '../../theme/Colors'
import styles from '../styles'

const Header = ({ 
    text, 
    onChangeText,
    onAdd 
}) => (
    <View>
        <TextInput
            style={styles.inputText}
            autoFocus={true}
            autoCapitalize={'sentences'}
            placeholder={i18n.t('ADD_MOVIE_PLACEHOLDER')}
            placeholderTextColor={Colors.spaceGrey}
            underlineColorAndroid={'transparent'}
            value={text}
            onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={onAdd} style={styles.btnWrapper}>
            <Text style={styles.btnText}>{i18n.t('ADD')}</Text>
        </TouchableOpacity>
  </View>
)

Header.propTypes = {
    text: PropTypes.string,
    onChangeText: PropTypes.func,
    onAdd: PropTypes.func,
}

export default Header
