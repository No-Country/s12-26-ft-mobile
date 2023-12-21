import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { rootColors } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(56),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: normalize(40, 'height'),
    alignSelf: 'center',
  },
  button: {
    width: normalize(56),
    height: normalize(56),
    borderRadius: normalize(16),
    backgroundColor: '#FFD9DD',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
});
