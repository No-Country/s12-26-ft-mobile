import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(56),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    position: 'absolute',
    width: '100%',
    height: normalize(56),
    borderRadius: normalize(30),
    paddingLeft: normalize(55, 'width'),
    paddingRight: normalize(40, 'width'),
    left: 0,
    fontSize: normalize(16),
    fontWeight: '500',
    letterSpacing: 0.5,
    lineHeight: normalize(24),
    color: '#46464f',
    backgroundColor: '#E3E1EC',
  },
  searchIcon: {
    position: 'absolute',
    left: normalize(18, 'width'),
  },
  filterIcon: {
    position: 'absolute',
    right: normalize(18, 'width'),
  },
});
