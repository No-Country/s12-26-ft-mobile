import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    position: 'absolute',
    width: '100%',
    height: normalize(35),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: normalize(10),
    paddingHorizontal: normalize(35, 'width'),
    left: 0,
  },
  searchIcon: {
    position: 'absolute',
    left: normalize(7, 'width'),
  },
  filterIcon: {
    position: 'absolute',
    right: normalize(7, 'width'),
  },
});
