// @flow

import React from 'react'
import { View, TouchableOpacity, TextInput, Text } from 'react-native'
import i18n from 'react-native-i18n'

import Colors from '../../theme/Colors'
import styles from '../styles'

type Props = {
    text: string,
    onChangeText: () => string,
    onAdd: () => void,
}

const Header = ({
  text,
  onChangeText,
  onAdd,
}: Props) => (
    <View style={styles.padding}>
        <TextInput
            style={styles.inputText}
            autoFocus={true}
            autoCapitalize={'sentences'}
            placeholder={i18n.t('ADD_MOVIE_PLACEHOLDER')}
            placeholderTextColor={Colors.spaceGrey}
            underlineColorAndroid={'transparent'}
            value={text}
            onChangeText={onChangeText}
            returnKeyType={'done'}
            onSubmitEditing={onAdd}
            keyboardAppearance={'dark'}
        />
        <TouchableOpacity onPress={onAdd} style={styles.btnWrapper}>
            <Text style={styles.btnText}>{i18n.t('ADD')}</Text>
        </TouchableOpacity>
  </View>
)

export default Header
