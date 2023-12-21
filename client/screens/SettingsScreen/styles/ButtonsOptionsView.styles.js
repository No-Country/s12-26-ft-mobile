import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: normalize(16),
    marginLeft: normalize(16, 'width'),
    marginTop: normalize(20, 'height'),
  },
  buttonText: {
    fontSize: normalize(16),
    color: '#1b1b1f',
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});
