import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 12,
    marginVertical: 6,
    position: 'relative',
  },
  inputSearchIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#777',
    position: 'absolute',
    left: 4,
    top: 6,
  },
  input: {
    paddingVertical: 8,
    paddingLeft: 32,
    paddingRight: 32,
    borderWidth: 0,
  },

  inputScanIconContainer: {
    paddingLeft: 4,
    borderLeftWidth: 1,
    position: 'absolute',
    right: 4,
    top: 6,
  },
  inputScanIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#777',
  },
});
