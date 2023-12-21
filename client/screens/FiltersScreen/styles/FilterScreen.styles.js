import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF8FD',
  },
  wrapper: {
    marginTop: normalize(40, 'height'),
  },
  titleContainer: {
    paddingHorizontal: normalize(16, 'width'),
    marginTop: normalize(20, 'height'),
    marginBottom: normalize(17, 'height'),
  },
  title: {
    fontSize: normalize(16),
    fontWeight: '500',
    color: '#1b1b1f',
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: normalize(16, 'width'),
    marginTop: normalize(23, 'height'),
  },
  button: {
    width: '100%',
    height: normalize(40),
    borderRadius: normalize(40 / 2),
    backgroundColor: '#4754BA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: normalize(14),
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: 0.1,
  },
});
