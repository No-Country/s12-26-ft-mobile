import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { rootColors } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(60),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: normalize(40, 'height'),
    alignSelf: 'center',
  },
  button: {
    width: normalize(60),
    height: normalize(40),
    borderRadius: normalize(8),
    backgroundColor: rootColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
