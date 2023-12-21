import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF8FD',
  },
  wrapper: {
    marginTop: normalize(40, 'height'),
    paddingHorizontal: normalize(16, 'width'),
  },
  button: {
    marginTop: normalize(20, 'height'),
    marginLeft: normalize(16, 'width'),
  },
  buttonText: {
    fontSize: normalize(16),
    color: '#EF476F',
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});
