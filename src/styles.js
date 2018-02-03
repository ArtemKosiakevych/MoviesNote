import {StyleSheet} from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.spaceGreyDark,
    padding: 14,
    paddingTop: 30
  },
  inputText: {
    color: 'white',
    height: 50,
    borderBottomWidth: 1,
    borderColor: Colors.spaceGrey,
  },
  btnWrapper: {
    height: 50,
    width: '100%',
    backgroundColor: Colors.deepRed,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 5,
  },
  btnText: {
    color: Colors.spaceGreyLight,
    fontSize: 16,
    fontWeight: '600'
  },
  list: {
    paddingTop: 14
  },
  listItem: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    height: 30,
    width: 30,
  },
  listItemText: {
    flex: 1,
    paddingLeft: 14,
    color: Colors.spaceGreyLight
  },
  separator: {
    height: 1,
    backgroundColor: Colors.spaceGrey
  },
});
